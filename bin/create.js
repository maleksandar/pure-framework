#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const cp = require('child_process');

console.log('Scaffolding pure-framework app!');

const args = process.argv.slice(2, process.argv.length);
console.log(args);

const appName = args[0];// first argument

if(!appName) {
  console.log('You need to provide an app name in order to scaffold the files. For example: npx pure-framework hello-world-app');
  // exit
}
cp.execSync(`mkdir ${appName}`);
cp.execSync(`git clone https://github.com/maleksandar/pure-framework-hello-world-app.git ${appName}`);
