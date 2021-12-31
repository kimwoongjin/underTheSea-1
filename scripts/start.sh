#!/bin/bash
cd /home/ubuntu/underTheSea/server
sudo kill -9 $(sudo lsof -t -i:80)
authbind --deep pm2 start index.js