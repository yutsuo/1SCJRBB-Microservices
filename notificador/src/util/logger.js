const bunyan = require('bunyan');

var bunyanOpts = {
  name: 'ATH-MOTOR'
};

exports.logger = bunyan.createLogger(bunyanOpts);
