'use strict';

var uuid = require('./uuid');

function Table(alias, unitFeePerMinute) {
  this.id = uuid.v4();
  this.alias = alias;
  this.unitFee = unitFeePerMinute;
}

module.exports = Table;
