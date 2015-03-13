#!/bin/bash

cd /home/pi
nohup nws -d OpenFrame-Node/public &
xinit /usr/bin/chromium --kiosk http://localhost:3030