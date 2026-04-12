<?php
/**
 * HSI OS Admin — First-Time Setup
 * Creates the first admin user.
 * Automatically disabled once an admin exists.
 */
define('HSIOS_APP', true);
require_once dirname(__DIR__) . '/includes/config.php';
require_once dirname(__DIR__) . '/includes/db.php';

$error   = '';
$success = false;

// Try to connect and check if any admin exists
try {
    $db = get_db();

    // Ensure tables exist (runs setup SQL inline)
    $db->exec("CREATE TABLE IF NOT EXISTS `admin_users` (
        `id`            INT UNSIGNED  NOT NULL AUTO_INCREMENT,
        `username`      VARCHAR(100)  NOT NULL,
        `password_hash` VARCHAR(255)  NOT NULL,
        `last_login`    TIMESTAMP     NULL DEFAULT NULL,
        `created_at`    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`),
        UNIQUE KEY `uq_username` (`username`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;");

    $db->exec("CREATE TABLE IF NOT EXISTS `leads` (
        `id`           INT UNSIGNED  NOT NULL AUTO_INCREMENT,
        `name`         VARCHAR(255)  NOT NULL,
        `phone`        VARCHAR(30)   NOT NULL,
        `email`        VARCHAR(254)  NOT NULL,
        `project_type` VARCHAR(50)   NOT NULL,
        `location`     VARCHAR(300)  NOT NULL DEFAULT '',
        `message`      TEXT,
        `ip_address`   VARCHAR(45)   NOT NULL DEFAULT '',
        `user_agent`   VARCHAR(500)  NOT NULL DEFAULT '',
        `is_read`      TINYINT(1)    NOT NULL DEFAULT 0,
        `notes`        TEXT,
        `created_at`   TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`),
        INDEX `idx_created` (`created_at`),
        INDEX `idx_ip_time` (`ip_address`, `created_at`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;");

    $db->exec("CREATE TABLE IF NOT EXISTS `login_attempts` (
        `id`           INT UNSIGNED NOT NULL AUTO_INCREMENT,
        `ip_address`   VARCHAR(45)  NOT NULL,
        `attempted_at` TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`),
        INDEX `idx_ip_time` (`ip_address`, `attempted_at`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;");

    // Redirect to login if admin already exists
    $adminCount = (int) $db->query('SELECT COUNT(*) FROM admin_users')->fetchColumn();
    if ($adminCount > 0) {
        header('Location: login.php?setup=done');
        exit;
    }
} catch (PDOException $e) {
    $error = 'Database connection failed: ' . htmlspecialchars($e->getMessage());
}

// Handle form POST
if ($_SERVER['REQUEST_METHOD'] === 'POST' && empty($error)) {
    $username  = trim($_POST['username']  ?? '');
    $password  = $_POST['password']        ?? '';
    $password2 = $_POST['password2']       ?? '';

    if (mb_strlen($username) < 3 || mb_strlen($username) > 50) {
        $error = 'Username must be between 3 and 50 characters.';
    } elseif (!preg_match('/^[a-zA-Z0-9_]+$/', $username)) {
        $error = 'Username may only contain letters, numbers, and underscores.';
    } elseif (mb_strlen($password) < 8) {
        $error = 'Password must be at least 8 characters.';
    } elseif ($password !== $password2) {
        $error = 'Passwords do not match.';
    } else {
        $hash = password_hash($password, PASSWORD_BCRYPT, ['cost' => 12]);
        try {
            $stmt = $db->prepare('INSERT INTO admin_users (username, password_hash) VALUES (?, ?)');
            $stmt->execute([$username, $hash]);
            $success = true;
        } catch (PDOException $e) {
            $error = 'Could not create admin user: ' . htmlspecialchars($e->getMessage());
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Setup Admin — HSI OS</title>
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
      max-width: 440px;
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
      margin-bottom: 6px;
    }
    .logo span { color: #2563eb; }
    .subtitle {
      font-size: 13px;
      color: rgba(255,255,255,0.45);
      margin-bottom: 32px;
    }
    h2 {
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 6px;
    }
    .notice {
      font-size: 13px;
      color: rgba(255,255,255,0.5);
      margin-bottom: 28px;
      line-height: 1.6;
    }
    label {
      display: block;
      font-size: 13px;
      color: rgba(255,255,255,0.7);
      margin-bottom: 6px;
      font-weight: 500;
    }
    input {
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
    input:focus {
      outline: none;
      border-color: #2563eb;
      background: rgba(37,99,235,0.06);
    }
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
      background: rgba(239,68,68,0.12);
      border: 1px solid rgba(239,68,68,0.3);
      color: #fca5a5;
      padding: 12px 16px;
      border-radius: 8px;
      font-size: 13px;
      margin-bottom: 20px;
      line-height: 1.5;
    }
    .success-box {
      text-align: center;
      padding: 10px 0;
    }
    .success-box .icon { font-size: 52px; margin-bottom: 16px; }
    .success-box h3 { color: #fff; font-size: 20px; margin-bottom: 10px; }
    .success-box p { color: rgba(255,255,255,.5); font-size: 14px; margin-bottom: 24px; line-height: 1.6; }
    .success-box a {
      display: inline-block;
      padding: 12px 28px;
      background: #2563eb;
      color: #fff;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
    }
    .success-box a:hover { background: #1d4ed8; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">HSI <span>OS</span></div>
    <div class="subtitle">Admin Panel</div>

    <?php if ($success): ?>
      <div class="success-box">
        <div class="icon">✅</div>
        <h3>Admin Account Created</h3>
        <p>Setup complete. You can now log in to the admin panel and manage your leads.</p>
        <a href="login.php">Go to Login →</a>
      </div>
    <?php else: ?>
      <h2>Create Admin Account</h2>
      <p class="notice">This page is only available before any admin is set up. Once created, it redirects to login automatically.</p>

      <?php if ($error): ?>
        <div class="error"><?= htmlspecialchars($error) ?></div>
      <?php endif; ?>

      <form method="POST" autocomplete="off">
        <label for="username">Username</label>
        <input type="text" id="username" name="username"
               value="<?= htmlspecialchars($_POST['username'] ?? '') ?>"
               placeholder="e.g. admin" required autofocus>

        <label for="password">Password <span style="color:rgba(255,255,255,.35);font-size:12px;">(min 8 characters)</span></label>
        <input type="password" id="password" name="password" placeholder="Strong password" required>

        <label for="password2">Confirm Password</label>
        <input type="password" id="password2" name="password2" placeholder="Repeat password" required>

        <button type="submit" class="btn">Create Admin Account →</button>
      </form>
    <?php endif; ?>
  </div>
</body>
</html>
