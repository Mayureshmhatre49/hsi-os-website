<?php
defined('HSIOS_APP') or die('Direct access not permitted.');

/**
 * Send a new-lead notification email.
 * Uses PHPMailer (via Composer) when available; falls back to PHP mail().
 * Email is skipped entirely if SMTP_ENABLED is false.
 *
 * @param  array $lead  Associative array with keys: name, phone, email,
 *                      project_type, location, message
 * @return bool         true if sent, false otherwise
 */
function send_lead_email(array $lead): bool {
    if (!SMTP_ENABLED) return false;

    $autoload = dirname(__DIR__) . '/vendor/autoload.php';
    if (file_exists($autoload)) {
        require_once $autoload;
        return _send_phpmailer($lead);
    }

    // Fallback: PHP built-in mail()
    return _send_phpmail($lead);
}

function _send_phpmailer(array $lead): bool {
    try {
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        $mail->isSMTP();
        $mail->Host       = SMTP_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = SMTP_USER;
        $mail->Password   = SMTP_PASS;
        $mail->SMTPSecure = SMTP_SECURE === 'ssl'
            ? PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS
            : PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = SMTP_PORT;
        $mail->CharSet    = 'UTF-8';

        $mail->setFrom(SMTP_FROM_EMAIL, SMTP_FROM_NAME);
        foreach (NOTIFY_EMAIL as $addr) {
            $mail->addAddress($addr);
        }
        $mail->addReplyTo($lead['email'], $lead['name']);

        $mail->isHTML(true);
        $mail->Subject = 'New Lead: ' . $lead['name'] . ' — ' . ucfirst($lead['project_type']);
        $mail->Body    = _email_html($lead);
        $mail->AltBody = _email_text($lead);

        $mail->send();
        return true;
    } catch (Exception $e) {
        error_log('[HSI OS Mailer] PHPMailer error: ' . $e->getMessage());
        return false;
    }
}

function _send_phpmail(array $lead): bool {
    $to      = implode(',', NOTIFY_EMAIL);
    $subject = 'New Lead: ' . $lead['name'] . ' — ' . ucfirst($lead['project_type']);
    $body    = _email_text($lead);
    $headers = implode("\r\n", [
        'From: ' . SMTP_FROM_NAME . ' <' . SMTP_FROM_EMAIL . '>',
        'Reply-To: ' . $lead['email'],
        'X-Mailer: PHP/' . PHP_VERSION,
        'Content-Type: text/plain; charset=UTF-8',
    ]);
    $result = @mail($to, $subject, $body, $headers);
    if (!$result) error_log('[HSI OS Mailer] mail() failed.');
    return $result;
}

function _email_html(array $lead): string {
    $h = fn(string $v): string => htmlspecialchars($v, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $msg = nl2br($h($lead['message'] ?? ''));
    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>New Lead — HSI OS</title></head>
<body style="margin:0;padding:20px;background:#f0f2f5;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.12);">
    <div style="background:#05070f;padding:28px 32px;">
      <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700;">HSI OS — New Lead Received</h1>
    </div>
    <div style="padding:28px 32px;">
      <table style="width:100%;border-collapse:collapse;font-size:15px;">
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#555;width:38%;font-weight:600;">Full Name</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee;color:#111;">{$h($lead['name'])}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#555;font-weight:600;">Phone</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee;color:#111;">{$h($lead['phone'])}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#555;font-weight:600;">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee;"><a href="mailto:{$h($lead['email'])}" style="color:#2563eb;">{$h($lead['email'])}</a></td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#555;font-weight:600;">Project Type</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee;color:#111;">{$h(ucfirst($lead['project_type']))}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#555;font-weight:600;">Location</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee;color:#111;">{$h($lead['location'] ?: 'Not provided')}</td></tr>
        <tr><td style="padding:10px 0;color:#555;font-weight:600;vertical-align:top;">Message</td>
            <td style="padding:10px 0;color:#333;line-height:1.6;">{$msg}</td></tr>
      </table>
    </div>
    <div style="background:#f8f9fb;padding:16px 32px;font-size:13px;color:#999;text-align:center;">
      Sent automatically by HSI OS Website · <a href="{SITE_URL}/admin/" style="color:#2563eb;">View Admin Panel</a>
    </div>
  </div>
</body>
</html>
HTML;
}

function _email_text(array $lead): string {
    return "New Lead — HSI OS Website\n"
        . str_repeat('=', 40) . "\n"
        . "Name:         {$lead['name']}\n"
        . "Phone:        {$lead['phone']}\n"
        . "Email:        {$lead['email']}\n"
        . "Project Type: " . ucfirst($lead['project_type']) . "\n"
        . "Location:     " . ($lead['location'] ?: 'Not provided') . "\n"
        . str_repeat('-', 40) . "\n"
        . "Message:\n" . ($lead['message'] ?: 'No message provided') . "\n";
}
