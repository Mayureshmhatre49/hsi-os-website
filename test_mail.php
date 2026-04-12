<?php
/**
 * HSI OS — Quick SMTP Test
 * DELETE THIS FILE after testing. Never leave it on the server.
 * Access: https://www.hsios.in/test_mail.php?key=hsios_test_2024
 */
if (($_GET['key'] ?? '') !== 'hsios_test_2024') {
    http_response_code(403); die('Forbidden.');
}

define('HSIOS_APP', true);
require_once __DIR__ . '/includes/config.php';

$autoload = __DIR__ . '/vendor/autoload.php';
if (!file_exists($autoload)) {
    die('<b style="color:red">❌ PHPMailer not found.</b><br>
         Run <code>composer install</code> locally, then upload the <code>vendor/</code> folder to the server.');
}
require_once $autoload;

try {
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS; // SSL port 465
    $mail->Port       = SMTP_PORT;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom(SMTP_FROM_EMAIL, SMTP_FROM_NAME);
    foreach (NOTIFY_EMAIL as $addr) {
        $mail->addAddress($addr);
    }
    $mail->Subject = 'HSI OS — SMTP Test';
    $mail->Body    = 'SMTP is working correctly. You will receive lead emails at this address.';

    $mail->send();
    echo '<b style="color:green;font-size:18px;">✅ Email sent successfully to ' . htmlspecialchars(implode(', ', NOTIFY_EMAIL)) . '</b>';
} catch (Exception $e) {
    echo '<b style="color:red;font-size:16px;">❌ Failed: ' . htmlspecialchars($e->getMessage()) . '</b>';
}
