#!/bin/bash

echo "🚀 Starting landing deployment... [$(date '+%Y-%m-%d %H:%M:%S')]"

cd /home/mayuresh/projects/hsios-landing || exit

echo "📥 Pulling latest code..."
git fetch origin
git reset --hard origin/main
git clean -fd -e webhook.json -e includes/config.php

echo "🔁 Reloading Nginx..."
sudo systemctl reload nginx

echo "✅ Landing deployed successfully! [$(date '+%Y-%m-%d %H:%M:%S')]"
