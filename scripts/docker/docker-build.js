const version = require('../version.js');
const sh = require('shelljs');

const imageName = 'angular-test';

sh.exec(`docker build -t ${imageName}:latest -t ${imageName}:${version} .`);

