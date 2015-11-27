'use strict';
var uuid = require('./uuid');
function Player(alias, discount) {
  this.id = uuid.v4();
  this.alias = alias;
  this.discount = (!!discount || discount === 0) ? discount : 1;
  this.fee = 0;
}

Player.prototype.Eat = function(fee) {
  this.fee += fee;
};

module.exports = Player;
