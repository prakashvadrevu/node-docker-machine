'use strict';

const Machine = require('..');

var options = {
  "driver": "virtualbox",
  "virtualbox-memory": "1024"
};

Machine.create('test', options, (err) => {
  if (err) throw err;
  else console.log("machine 'test' created successfully!");
});