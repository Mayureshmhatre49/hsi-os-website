# Nginx Configuration Guidelines for HSIOS

## 1. App Subdomain (`os.hsios.in`) — Prevent Indexing (AEO Task 3)

The app/login subdomain `os.hsios.in` must not be indexed by search engines.

### Required Header
```nginx
add_header X-Robots-Tag "noindex, nofollow" always;
```

> **Important Nginx Gotcha:** If any `location` block contains its own `add_header` directive, Nginx disables inheritance of `server`-level headers. To prevent the header from being dropped, include `add_header X-Robots-Tag "noindex, nofollow" always;` directly inside the `location /` block as well.

### Installation / Update Steps on VPS
1. Copy or link `nginx/os.hsios.in.conf` into `/etc/nginx/sites-available/os.hsios.in`
2. Enable it:
   ```bash
   sudo ln -sf /etc/nginx/sites-available/os.hsios.in /etc/nginx/sites-enabled/
   ```
3. Test syntax:
   ```bash
   sudo nginx -t
   ```
4. Reload Nginx:
   ```bash
   sudo systemctl reload nginx
   ```
5. Verification:
   ```bash
   curl -sI https://os.hsios.in/ | grep -i x-robots-tag
   # Output should be:
   # X-Robots-Tag: noindex, nofollow
   ```

---

## 2. Apex Host 301 Redirect (`hsios.in` -> `www.hsios.in`) — AEO Task 1

In `/etc/nginx/sites-available/hsios.in` (or the default server block):
```nginx
server {
    listen 80;
    listen 443 ssl http2;
    server_name hsios.in;
    return 301 https://www.hsios.in$request_uri;
}
```
