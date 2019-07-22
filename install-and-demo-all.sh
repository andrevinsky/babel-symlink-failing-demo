#!/usr/bin/env bash
cd ./secondary-package
npm i
npm  test
cd ../main-package
npm i
npm test
