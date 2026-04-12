<?php
/**
 * HSI OS Admin — Leads Dashboard
 */
define('HSIOS_APP', true);
require_once dirname(__DIR__) . '/includes/config.php';
require_once dirname(__DIR__) . '/includes/db.php';

ini_set('session.cookie_httponly', '1');
ini_set('session.cookie_samesite', 'Strict');
session_start();

// Auth guard
if (empty($_SESSION['admin_id'])) {
    header('Location: login.php');
    exit;
}

try {
    $db = get_db();
} catch (PDOException $e) {
    die('Database error: ' . htmlspecialchars($e->getMessage()));
}

// ─── Actions ────────────────────────────────────────────────
$action = $_GET['action'] ?? '';
$id     = (int) ($_GET['id'] ?? 0);

if (in_array($action, ['read', 'unread'], true) && $id > 0) {
    $val = $action === 'read' ? 1 : 0;
    $db->prepare('UPDATE leads SET is_read = ? WHERE id = ?')->execute([$val, $id]);
    header('Location: dashboard.php');
    exit;
}

if ($action === 'delete' && $id > 0) {
    $db->prepare('DELETE FROM leads WHERE id = ?')->execute([$id]);
    header('Location: dashboard.php');
    exit;
}

// ─── CSV export ─────────────────────────────────────────────
if ($action === 'export') {
    $rows = $db->query(
        'SELECT id, name, phone, email, project_type, location, message, is_read, created_at
         FROM leads ORDER BY created_at DESC'
    )->fetchAll();

    header('Content-Type: text/csv; charset=UTF-8');
    header('Content-Disposition: attachment; filename="hsios_leads_' . date('Y-m-d') . '.csv"');
    header('Cache-Control: no-cache');

    $out = fopen('php://output', 'w');
    fprintf($out, chr(0xEF) . chr(0xBB) . chr(0xBF)); // UTF-8 BOM for Excel
    fputcsv($out, ['ID', 'Name', 'Phone', 'Email', 'Project Type', 'Location', 'Message', 'Read', 'Date']);
    foreach ($rows as $r) {
        fputcsv($out, [
            $r['id'], $r['name'], $r['phone'], $r['email'],
            ucfirst($r['project_type']), $r['location'], $r['message'],
            $r['is_read'] ? 'Yes' : 'No', $r['created_at'],
        ]);
    }
    fclose($out);
    exit;
}

// ─── Stats ───────────────────────────────────────────────────
$total  = (int) $db->query('SELECT COUNT(*)   FROM leads')->fetchColumn();
$unread = (int) $db->query('SELECT COUNT(*)   FROM leads WHERE is_read = 0')->fetchColumn();
$today  = (int) $db->query("SELECT COUNT(*)   FROM leads WHERE DATE(created_at) = CURDATE()")->fetchColumn();

// ─── Pagination ──────────────────────────────────────────────
$per_page = 20;
$page     = max(1, (int) ($_GET['page'] ?? 1));
$offset   = ($page - 1) * $per_page;
$pages    = max(1, (int) ceil($total / $per_page));

$leads = $db->prepare(
    'SELECT * FROM leads ORDER BY created_at DESC LIMIT ? OFFSET ?'
);
$leads->bindValue(1, $per_page, PDO::PARAM_INT);
$leads->bindValue(2, $offset,   PDO::PARAM_INT);
$leads->execute();
$leads = $leads->fetchAll();

$h = fn(string $v): string => htmlspecialchars($v, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Leads Dashboard — HSI OS Admin</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #05070f;
      color: rgba(255,255,255,0.85);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 14px;
      min-height: 100vh;
    }

    /* ── Top Bar ── */
    .topbar {
      background: #0a0f23;
      border-bottom: 1px solid rgba(255,255,255,0.07);
      padding: 0 28px;
      height: 58px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .topbar-left { display: flex; align-items: center; gap: 12px; }
    .logo { font-size: 18px; font-weight: 800; color: #fff; letter-spacing: -0.3px; }
    .logo span { color: #2563eb; }
    .badge-pill {
      background: rgba(37,99,235,0.15);
      border: 1px solid rgba(37,99,235,0.25);
      color: #93c5fd;
      border-radius: 20px;
      padding: 3px 10px;
      font-size: 11px;
      font-weight: 600;
    }
    .topbar-right { display: flex; align-items: center; gap: 16px; }
    .user-chip {
      font-size: 13px;
      color: rgba(255,255,255,0.45);
    }
    .btn-sm {
      padding: 7px 14px;
      border-radius: 7px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      border: 1px solid rgba(255,255,255,0.12);
      color: rgba(255,255,255,0.6);
      transition: all .2s;
    }
    .btn-sm:hover { border-color: rgba(255,255,255,0.25); color: #fff; }
    .btn-primary-sm {
      background: #2563eb;
      border-color: #2563eb;
      color: #fff;
    }
    .btn-primary-sm:hover { background: #1d4ed8; }

    /* ── Content ── */
    .content { padding: 28px; max-width: 1300px; margin: 0 auto; }

    /* ── Stats ── */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-bottom: 28px;
    }
    @media (max-width: 600px) { .stats-grid { grid-template-columns: 1fr; } }
    .stat-card {
      background: #0a0f23;
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 12px;
      padding: 20px 24px;
    }
    .stat-label { font-size: 12px; color: rgba(255,255,255,0.4); font-weight: 600; text-transform: uppercase; letter-spacing: .05em; margin-bottom: 8px; }
    .stat-value { font-size: 32px; font-weight: 800; color: #fff; }
    .stat-value.accent { color: #60a5fa; }
    .stat-value.gold   { color: #c9a84c; }

    /* ── Table card ── */
    .table-card {
      background: #0a0f23;
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px;
      overflow: hidden;
    }
    .table-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 24px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .table-header h2 { font-size: 15px; font-weight: 700; color: #fff; }
    .table-actions { display: flex; gap: 10px; }

    table { width: 100%; border-collapse: collapse; }
    thead th {
      padding: 11px 16px;
      text-align: left;
      font-size: 11px;
      font-weight: 700;
      color: rgba(255,255,255,0.35);
      text-transform: uppercase;
      letter-spacing: .06em;
      background: rgba(255,255,255,0.02);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      white-space: nowrap;
    }
    tbody tr {
      border-bottom: 1px solid rgba(255,255,255,0.04);
      cursor: pointer;
      transition: background .15s;
    }
    tbody tr:last-child { border-bottom: none; }
    tbody tr:hover { background: rgba(255,255,255,0.03); }
    tbody tr.unread { background: rgba(37,99,235,0.05); }
    tbody tr.unread:hover { background: rgba(37,99,235,0.09); }
    td {
      padding: 14px 16px;
      vertical-align: middle;
      color: rgba(255,255,255,0.8);
      font-size: 13px;
    }
    .td-name { font-weight: 600; color: #fff; }
    .td-email { color: #93c5fd; }
    .td-project {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
      text-transform: capitalize;
    }
    .type-villa      { background: rgba(201,168,76,.15); color: #c9a84c; border: 1px solid rgba(201,168,76,.25); }
    .type-apartment  { background: rgba(37,99,235,.15);  color: #93c5fd; border: 1px solid rgba(37,99,235,.25); }
    .type-developer  { background: rgba(139,92,246,.15); color: #c4b5fd; border: 1px solid rgba(139,92,246,.25); }
    .type-other      { background: rgba(255,255,255,.06); color: rgba(255,255,255,.5); border: 1px solid rgba(255,255,255,.1); }
    .unread-dot {
      display: inline-block;
      width: 8px; height: 8px;
      background: #2563eb;
      border-radius: 50%;
      margin-right: 6px;
      flex-shrink: 0;
    }
    .td-date { color: rgba(255,255,255,0.35); white-space: nowrap; }
    .action-links { display: flex; gap: 10px; }
    .action-links a {
      font-size: 12px;
      color: rgba(255,255,255,0.3);
      text-decoration: none;
      transition: color .15s;
    }
    .action-links a:hover { color: rgba(255,255,255,0.8); }
    .action-links a.del:hover { color: #f87171; }

    /* ── Empty state ── */
    .empty {
      padding: 60px 24px;
      text-align: center;
      color: rgba(255,255,255,0.25);
    }
    .empty .icon { font-size: 40px; margin-bottom: 12px; }
    .empty p { font-size: 15px; }

    /* ── Pagination ── */
    .pagination {
      display: flex;
      justify-content: center;
      gap: 6px;
      padding: 20px;
      border-top: 1px solid rgba(255,255,255,0.06);
    }
    .pagination a, .pagination span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 34px; height: 34px;
      border-radius: 7px;
      font-size: 13px;
      font-weight: 500;
      text-decoration: none;
      border: 1px solid rgba(255,255,255,0.08);
      color: rgba(255,255,255,0.5);
      transition: all .15s;
    }
    .pagination a:hover { border-color: #2563eb; color: #93c5fd; }
    .pagination .active { background: #2563eb; border-color: #2563eb; color: #fff; }

    /* ── Modal ── */
    .modal-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.7);
      z-index: 200;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .modal-overlay.open { display: flex; }
    .modal {
      background: #0d1428;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 16px;
      padding: 32px;
      max-width: 560px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 24px;
    }
    .modal-header h3 { font-size: 18px; font-weight: 700; color: #fff; }
    .modal-close {
      background: none;
      border: none;
      color: rgba(255,255,255,0.4);
      font-size: 22px;
      cursor: pointer;
      line-height: 1;
      padding: 4px;
    }
    .modal-close:hover { color: #fff; }
    .modal-row {
      display: grid;
      grid-template-columns: 130px 1fr;
      gap: 8px 16px;
      margin-bottom: 12px;
      font-size: 14px;
    }
    .modal-label { color: rgba(255,255,255,0.4); font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: .05em; padding-top: 2px; }
    .modal-value { color: rgba(255,255,255,0.85); line-height: 1.6; word-break: break-word; }
    .modal-divider { height: 1px; background: rgba(255,255,255,0.06); margin: 16px 0; }
    .modal-msg {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 8px;
      padding: 14px;
      font-size: 14px;
      color: rgba(255,255,255,0.7);
      line-height: 1.7;
      white-space: pre-wrap;
      word-break: break-word;
    }
  </style>
</head>
<body>

<!-- Top Bar -->
<div class="topbar">
  <div class="topbar-left">
    <div class="logo">HSI <span>OS</span></div>
    <span class="badge-pill">Admin</span>
  </div>
  <div class="topbar-right">
    <span class="user-chip">👤 <?= $h($_SESSION['admin_user']) ?></span>
    <a href="dashboard.php?action=export" class="btn-sm">↓ Export CSV</a>
    <a href="logout.php" class="btn-sm">Sign Out</a>
  </div>
</div>

<!-- Main Content -->
<div class="content">

  <!-- Stats -->
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-label">Total Leads</div>
      <div class="stat-value"><?= $total ?></div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Unread</div>
      <div class="stat-value accent"><?= $unread ?></div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Received Today</div>
      <div class="stat-value gold"><?= $today ?></div>
    </div>
  </div>

  <!-- Leads Table -->
  <div class="table-card">
    <div class="table-header">
      <h2>All Leads<?php if ($unread > 0): ?> <span style="color:#60a5fa;font-size:13px;font-weight:500;">(<?= $unread ?> new)</span><?php endif; ?></h2>
      <div class="table-actions">
        <a href="dashboard.php?action=export" class="btn-sm btn-primary-sm">Export CSV</a>
      </div>
    </div>

    <?php if (empty($leads)): ?>
      <div class="empty">
        <div class="icon">📭</div>
        <p>No leads yet. They'll appear here once the form is submitted.</p>
      </div>
    <?php else: ?>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Type</th>
            <th>Location</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($leads as $lead): ?>
            <?php
              $type_class = 'type-' . htmlspecialchars($lead['project_type']);
              $row_class  = $lead['is_read'] ? '' : 'unread';
            ?>
            <tr class="<?= $row_class ?>"
                onclick="openModal(<?= (int)$lead['id'] ?>)"
                data-id="<?= (int)$lead['id'] ?>"
                data-name="<?= $h($lead['name']) ?>"
                data-phone="<?= $h($lead['phone']) ?>"
                data-email="<?= $h($lead['email']) ?>"
                data-type="<?= $h(ucfirst($lead['project_type'])) ?>"
                data-location="<?= $h($lead['location'] ?: 'Not provided') ?>"
                data-message="<?= $h($lead['message'] ?: 'No message') ?>"
                data-date="<?= $h($lead['created_at']) ?>"
                data-read="<?= (int)$lead['is_read'] ?>">
              <td><?= (int)$lead['id'] ?></td>
              <td class="td-name">
                <?php if (!$lead['is_read']): ?><span class="unread-dot"></span><?php endif; ?>
                <?= $h($lead['name']) ?>
              </td>
              <td><?= $h($lead['phone']) ?></td>
              <td class="td-email"><?= $h($lead['email']) ?></td>
              <td><span class="td-project <?= $type_class ?>"><?= $h(ucfirst($lead['project_type'])) ?></span></td>
              <td><?= $h($lead['location'] ?: '—') ?></td>
              <td class="td-date"><?= date('d M Y, H:i', strtotime($lead['created_at'])) ?></td>
              <td onclick="event.stopPropagation()">
                <div class="action-links">
                  <?php if ($lead['is_read']): ?>
                    <a href="?action=unread&id=<?= (int)$lead['id'] ?>">Mark Unread</a>
                  <?php else: ?>
                    <a href="?action=read&id=<?= (int)$lead['id'] ?>">Mark Read</a>
                  <?php endif; ?>
                  <a class="del"
                     href="?action=delete&id=<?= (int)$lead['id'] ?>"
                     onclick="return confirm('Delete this lead permanently?')">Delete</a>
                </div>
              </td>
            </tr>
          <?php endforeach; ?>
        </tbody>
      </table>

      <?php if ($pages > 1): ?>
        <div class="pagination">
          <?php for ($p = 1; $p <= $pages; $p++): ?>
            <?php if ($p === $page): ?>
              <span class="active"><?= $p ?></span>
            <?php else: ?>
              <a href="?page=<?= $p ?>"><?= $p ?></a>
            <?php endif; ?>
          <?php endfor; ?>
        </div>
      <?php endif; ?>
    <?php endif; ?>
  </div>
</div>

<!-- Lead Detail Modal -->
<div class="modal-overlay" id="modal" onclick="closeModalOnBg(event)">
  <div class="modal">
    <div class="modal-header">
      <h3 id="m-name"></h3>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>

    <div class="modal-row">
      <div class="modal-label">Phone</div>
      <div class="modal-value" id="m-phone"></div>
    </div>
    <div class="modal-row">
      <div class="modal-label">Email</div>
      <div class="modal-value" id="m-email"></div>
    </div>
    <div class="modal-row">
      <div class="modal-label">Project Type</div>
      <div class="modal-value" id="m-type"></div>
    </div>
    <div class="modal-row">
      <div class="modal-label">Location</div>
      <div class="modal-value" id="m-location"></div>
    </div>
    <div class="modal-row">
      <div class="modal-label">Received</div>
      <div class="modal-value" id="m-date"></div>
    </div>

    <div class="modal-divider"></div>

    <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Message</div>
    <div class="modal-msg" id="m-message"></div>

    <div style="margin-top:20px;display:flex;gap:10px;" id="m-actions"></div>
  </div>
</div>

<script>
  let currentId = null;

  function openModal(id) {
    const row = document.querySelector('tr[data-id="' + id + '"]');
    if (!row) return;
    currentId = id;

    document.getElementById('m-name').textContent     = row.dataset.name;
    document.getElementById('m-phone').textContent    = row.dataset.phone;
    document.getElementById('m-email').innerHTML      = '<a href="mailto:' + row.dataset.email + '" style="color:#93c5fd;">' + row.dataset.email + '</a>';
    document.getElementById('m-type').textContent     = row.dataset.type;
    document.getElementById('m-location').textContent = row.dataset.location;
    document.getElementById('m-date').textContent     = row.dataset.date;
    document.getElementById('m-message').textContent  = row.dataset.message;

    const isRead = row.dataset.read === '1';
    const actions = document.getElementById('m-actions');
    actions.innerHTML = isRead
      ? '<a href="?action=unread&id=' + id + '" style="font-size:13px;color:rgba(255,255,255,.4);text-decoration:none;padding:8px 14px;border:1px solid rgba(255,255,255,.1);border-radius:7px;">Mark Unread</a>'
      : '<a href="?action=read&id='  + id + '" style="font-size:13px;color:#93c5fd;text-decoration:none;padding:8px 14px;background:rgba(37,99,235,.15);border:1px solid rgba(37,99,235,.25);border-radius:7px;">✓ Mark as Read</a>';

    document.getElementById('modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.getElementById('modal').classList.remove('open');
    document.body.style.overflow = '';
    currentId = null;
  }

  function closeModalOnBg(e) {
    if (e.target === document.getElementById('modal')) closeModal();
  }

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
</script>
</body>
</html>
