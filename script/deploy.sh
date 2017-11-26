#!/bin/bash

echo 'start'

npm run build

cp ./dist/* D:\\github_code\\my-web
cd D:\\github_code\\my-web
git add .
git commit -am 'commit'
git push origin master

echo 'end'
