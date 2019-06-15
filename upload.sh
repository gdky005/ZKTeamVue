#!/usr/bin/env bash
distDir=/root/webroot
currentDir=/Users/WangQing/VUE_Pro/JMVue/dist
scp -r $currentDir/index.html $currentDir/static root@zkteam.cc:$distDir
