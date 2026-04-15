<?php
/**
 * HSI OS — Configuration
 * ============================================================
 * Fill in your database and SMTP details before going live.
 * Add this file to .gitignore — never commit credentials.
 * ============================================================
 */
defined('HSIOS_APP') or die('Direct access not permitted.');

// ─── Database ────────────────────────────────────────────────
define('DB_HOST',    'localhost');
define('DB_NAME',    'xxxxxxxxxxxxxxxx');
define('DB_USER',    'xxxxxxxxxxxxxxx');
define('DB_PASS',    'xxxxxxxxxxxxxx');              // ← ADD YOUR DATABASE PASSWORD HERE
define('DB_CHARSET', 'utf8mb4');

// ─── SMTP Email ──────────────────────────────────────────────
// Set SMTP_ENABLED = true once you've filled in the credentials below.
// Run: composer install  (from the website root) to install PHPMailer.
define('SMTP_ENABLED',    true);               // Hostinger SMTP is configured
define('SMTP_HOST',       'smtp.hostinger.com');
define('SMTP_PORT',        465);
define('SMTP_SECURE',     'ssl');
define('SMTP_USER',       'hello@hsios.in');
define('SMTP_PASS',       'xxxxxxxxxxxx');     // ← ADD YOUR EMAIL PASSWORD HERE
define('SMTP_FROM_EMAIL', 'hello@hsios.in');
define('SMTP_FROM_NAME',  'HSI Smart Interiors');

// ─── Lead Notifications ──────────────────────────────────────
// Every new form submission is emailed here (when SMTP_ENABLED = true).
define('NOTIFY_EMAIL', ['hello@hsios.in', 'mayureshmhatre49@gmail.com', 'nishant.mhatre@mail.com']);

// ─── Site ────────────────────────────────────────────────────
define('SITE_NAME', 'HSI Smart Interiors');
define('SITE_URL',  'https://www.hsios.in');
