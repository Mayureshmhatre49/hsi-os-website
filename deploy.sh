#!/bin/bash

echo "Starting deployment... [$(date '+%Y-%m-%d %H:%M:%S')]"

cd /home/mayuresh/projects/hsios-landing || exit

echo "Pulling latest code..."
git fetch origin
git reset --hard origin/main
git clean -fd -e webhook.json -e includes/config.php

echo "Installing dependencies..."
npm ci --production=false

echo "Building Next.js app..."
npm run build

echo "Restarting Next.js process..."
pm2 restart hsios-landing || PORT=3002 pm2 start npm --name "hsios-landing" -- start

echo "Reloading Nginx..."
sudo systemctl reload nginx

echo "Deployed successfully! [$(date '+%Y-%m-%d %H:%M:%S')]"
