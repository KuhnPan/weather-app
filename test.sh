#!/bin/bash
node /root/nodejs/weather-app/server.js|awk '{print "["strftime("%F %H:%M:%S")"]:"$0}' >> /root/nodejs/weather-app/log.out 2>&1 & 
