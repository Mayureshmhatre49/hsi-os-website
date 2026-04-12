<?php
/**
 * HSI OS — Form Submission Handler
 * Accepts POST from contact.html, validates input,
 * saves to database, and fires an email notification.
 * Returns JSON: { success: bool, message?: string }
 */
define('HSIOS_APP', true);

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');

require_once __DIR__ . '/includes/config.php';
require_once __DIR__ . '/includes/db.php';
require_once __DIR__ . '/includes/mailer.php';

// ─── Method guard ────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// ─── Honeypot check ──────────────────────────────────────────
// Bots fill hidden fields; humans never see or touch them.
if (!empty($_POST['_hp'])) {
    // Silently pretend success — don't reveal detection to bots.
    echo json_encode(['success' => true]);
    exit;
}

// ─── Collect & validate inputs ───────────────────────────────
$name         = trim($_POST['name']         ?? '');
$phone        = trim($_POST['phone']        ?? '');
$email        = trim($_POST['email']        ?? '');
$project_type = trim($_POST['project-type'] ?? '');
$location     = trim($_POST['location']     ?? '');
$message      = trim($_POST['message']      ?? '');

$errors = [];

if (mb_strlen($name) < 2 || mb_strlen($name) > 200) {
    $errors[] = 'Full name is required (2–200 characters).';
}
if (!preg_match('/^[\+\d\s\-\(\)]{7,25}$/', $phone)) {
    $errors[] = 'Please enter a valid phone number.';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 254) {
    $errors[] = 'Please enter a valid email address.';
}
$allowed_types = ['villa', 'apartment', 'developer', 'other'];
if (!in_array($project_type, $allowed_types, true)) {
    $errors[] = 'Please select a project type.';
}
if (mb_strlen($location) > 300) {
    $errors[] = 'Location must be under 300 characters.';
}
if (mb_strlen($message) > 5000) {
    $errors[] = 'Message must be under 5000 characters.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => implode(' ', $errors)]);
    exit;
}

// ─── Get real client IP ──────────────────────────────────────
$ip = $_SERVER['HTTP_CF_CONNECTING_IP']
    ?? $_SERVER['HTTP_X_REAL_IP']
    ?? $_SERVER['HTTP_X_FORWARDED_FOR']
    ?? $_SERVER['REMOTE_ADDR']
    ?? '0.0.0.0';
$ip = trim(explode(',', $ip)[0]); // Take first IP if list

// ─── Rate limiting: max 3 submissions per IP per hour ────────
try {
    $db = get_db();
    $stmt = $db->prepare(
        'SELECT COUNT(*) FROM leads
         WHERE ip_address = ? AND created_at > DATE_SUB(NOW(), INTERVAL 1 HOUR)'
    );
    $stmt->execute([$ip]);
    if ((int) $stmt->fetchColumn() >= 3) {
        http_response_code(429);
        echo json_encode(['success' => false, 'message' => 'Too many submissions from your IP. Please try again in an hour.']);
        exit;
    }
} catch (PDOException $e) {
    error_log('[HSI OS submit] DB error (rate limit check): ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server error. Please try again shortly.']);
    exit;
}

// ─── Save to database ─────────────────────────────────────────
try {
    $stmt = $db->prepare(
        'INSERT INTO leads (name, phone, email, project_type, location, message, ip_address, user_agent)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    );
    $stmt->execute([
        $name,
        $phone,
        $email,
        $project_type,
        $location,
        $message,
        $ip,
        mb_substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 500),
    ]);
} catch (PDOException $e) {
    error_log('[HSI OS submit] DB insert error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Could not save your request. Please try again.']);
    exit;
}

// ─── Send email notification (non-fatal if it fails) ─────────
send_lead_email([
    'name'         => $name,
    'phone'        => $phone,
    'email'        => $email,
    'project_type' => $project_type,
    'location'     => $location,
    'message'      => $message,
]);

echo json_encode(['success' => true]);
exit;
