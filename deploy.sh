#!/bin/bash

# Script: deploy.sh
# Description: Pull latest changes, clean old build files, build the project, and restart PM2 process.

# Set script to exit on any error
set -e

echo "Starting deployment..."

# Pull latest changes from Git
echo "Pulling latest changes from Git..."
git pull

# Remove old build files
echo "Removing old build files..."
rm -rf .next

# Build the project
echo "Building the project..."
yarn build

# Restart PM2 process
echo "Restarting PM2 process..."
pm2 restart 0 --update-env

echo "Deployment completed successfully!"