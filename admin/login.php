<?php
/**
 * HSI OS Admin — Login Page
 */
define('HSIOS_APP', true);
require_once dirname(__DIR__) . '/includes/config.php';
require_once dirname(__DIR__) . '/includes/db.php';

// Secure session settings
ini_set('session.cookie_httponly', '1');
ini_set('session.cookie_samesite', 'Strict');
ini_set('session.use_strict_mode', '1');
session_start();

// Already logged in?
if (!empty($_SESSION['admin_id'])) {
    header('Location: dashboard.php');
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';

    // CSRF check
    if (empty($_POST['csrf']) || $_POST['csrf'] !== ($_SESSION['csrf_login'] ?? '')) {
        $error = 'Invalid request. Please try again.';
    } else {
        try {
            $db = get_db();
            $ip = trim(explode(',', (
                $_SERVER['HTTP_CF_CONNECTING_IP']  ??
                $_SERVER['HTTP_X_FORWARDED_FOR']   ??
                $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0'
            ))[0]);

            // Rate limiting: max 5 attempts per IP per 15 minutes
            $stmt = $db->prepare(
                'SELECT COUNT(*) FROM login_attempts
                 WHERE ip_address = ? AND attempted_at > DATE_SUB(NOW(), INTERVAL 15 MINUTE)'
            );
            $stmt->execute([$ip]);
            $attempts = (int) $stmt->fetchColumn();

            if ($attempts >= 5) {
                $error = 'Too many login attempts. Please wait 15 minutes and try again.';
            } else {
                // Log this attempt
                $db->prepare('INSERT INTO login_attempts (ip_address) VALUES (?)')->execute([$ip]);

                // Fetch user
                $stmt = $db->prepare('SELECT * FROM admin_users WHERE username = ? LIMIT 1');
                $stmt->execute([$username]);
                $user = $stmt->fetch();

                if ($user && password_verify($password, $user['password_hash'])) {
                    // Success — regenerate session to prevent fixation
                    session_regenerate_id(true);
                    $_SESSION['admin_id']   = $user['id'];
                    $_SESSION['admin_user'] = $user['username'];

                    // Update last_login
                    $db->prepare('UPDATE admin_users SET last_login = NOW() WHERE id = ?')
                       ->execute([$user['id']]);

                    // Clear old attempts for this IP
                    $db->prepare('DELETE FROM login_attempts WHERE ip_address = ?')->execute([$ip]);

                    header('Location: dashboard.php');
                    exit;
                } else {
                    $error = 'Invalid username or password.';
                }
            }
        } catch (PDOException $e) {
            error_log('[HSI OS login] DB error: ' . $e->getMessage());
            $error = 'Server error. Please try again.';
        }
    }
}

// Generate CSRF token for the form
$_SESSION['csrf_login'] = bin2hex(random_bytes(24));
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Login — HSI OS</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #05070f;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      padding: 20px;
    }
    .card {
      width: 100%;
      max-width: 400px;
      background: #0a0f23;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 16px;
      padding: 40px;
    }
    .logo {
      font-size: 22px;
      font-weight: 800;
      color: #fff;
      letter-spacing: -0.5px;
      margin-bottom: 4px;
    }
    .logo span { color: #2563eb; }
    .subtitle { font-size: 13px; color: rgba(255,255,255,0.4); margin-bottom: 32px; }
    h2 { font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 24px; }
    label {
      display: block;
      font-size: 13px;
      color: rgba(255,255,255,0.65);
      margin-bottom: 6px;
      font-weight: 500;
    }
    input[type="text"],
    input[type="password"] {
      width: 100%;
      padding: 11px 14px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 8px;
      color: #fff;
      font-size: 14px;
      margin-bottom: 18px;
      transition: border-color .2s;
    }
    input:focus { outline: none; border-color: #2563eb; background: rgba(37,99,235,0.06); }
    .btn {
      width: 100%;
      padding: 13px;
      background: #2563eb;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: background .2s;
    }
    .btn:hover { background: #1d4ed8; }
    .error {
      background: rgba(239,68,68,0.1);
      border: 1px solid rgba(239,68,68,0.25);
      color: #fca5a5;
      padding: 12px 14px;
      border-radius: 8px;
      font-size: 13px;
      margin-bottom: 20px;
    }
    .notice {
      margin-top: 20px;
      font-size: 12px;
      color: rgba(255,255,255,0.25);
      text-align: center;
      line-height: 1.5;
    }
    .notice a { color: rgba(37,99,235,0.7); text-decoration: none; }
    .flash {
      background: rgba(34,197,94,0.12);
      border: 1px solid rgba(34,197,94,0.25);
      color: #86efac;
      padding: 12px 14px;
      border-radius: 8px;
      font-size: 13px;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">HSI <span>OS</span></div>
    <div class="subtitle">Admin Panel</div>
    <h2>Sign In</h2>

    <?php if (isset($_GET['logged_out'])): ?>
      <div class="flash">You have been signed out.</div>
    <?php endif; ?>

    <?php if ($error): ?>
      <div class="error"><?= htmlspecialchars($error) ?></div>
    <?php endif; ?>

    <form method="POST" autocomplete="off">
      <input type="hidden" name="csrf" value="<?= htmlspecialchars($_SESSION['csrf_login']) ?>">

      <label for="username">Username</label>
      <input type="text" id="username" name="username"
             value="<?= htmlspecialchars($_POST['username'] ?? '') ?>"
             required autofocus autocomplete="username">

      <label for="password">Password</label>
      <input type="password" id="password" name="password"
             required autocomplete="current-password">

      <button type="submit" class="btn">Sign In →</button>
    </form>

    <p class="notice">
      First time? <a href="setup.php">Run setup</a> to create your admin account.
    </p>
  </div>
</body>
</html>
