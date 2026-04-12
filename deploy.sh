#!/bin/bash

echo "🚀 Starting landing deployment..."

cd /home/mayuresh/projects/hsios-landing || exit

echo "📥 Pulling latest code..."
git fetch origin
git reset --hard origin/main
git clean -fd

echo "🔁 Reloading Nginx..."
sudo systemctl reload nginx

echo "✅ Landing deployed successfully!"
