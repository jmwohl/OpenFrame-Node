#!/bin/bash

nohup nws -d /home/pi/OpenFrame-Node/public &
xinit /usr/bin/chromium --kiosk http://localhost:3030