'use strict';

const Machine = require('..');

var options = {
  "driver": "virtualbox"
};

// List all machines with additional metadata
Machine.create('beep', options, (err, machines) => {
  if (err) throw err
  console.log(machines);
});
