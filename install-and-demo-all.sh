#!/usr/bin/env bash
echo 'secondary-package:'
cd ./secondary-package
echo 'npm i'
npm i
echo 'npm test'
npm  test
echo 'main-package'
cd ../main-package
echo 'npm i'
npm i
echo 'npm test'
npm test
