'use strict';
var uuid = require('./uuid');
var Table = require('./table');
var Player = require('./player');
var Engine = require('./engine');

// extends the Array object
Array.prototype.remove = function(element) {
  var index = this.indexOf(element);
  if (index < 0)
    return false;
  this.splice(index, 1);
}

function Pool() {
  this.id = uuid.v4();
  this.tables = [];
  this.players = [];
  this.engine = new Engine();
}

// handy methods so both table and people can join and left pool at anytime
Table.prototype.JoinPool = function(pool, joinAt) {
  var table = this;
  if (!table.savePoint) {
    table.savePoint = joinAt;
  }
  pool.engine.onSavePoint(pool, joinAt);
  pool.tables.push(table);
}

Table.prototype.LeftPool = function(pool, leftAt) {
  var table = this;
  pool.engine.onSavePoint(pool, leftAt);
  pool.tables.remove(table);
}

Player.prototype.JoinPool = function(pool, joinAt) {
  var player = this;
  pool.engine.onSavePoint(pool, joinAt);
  pool.players.push(player);
}

Player.prototype.LeftPool = function(pool, leftAt) {
  var player = this;
  pool.engine.onSavePoint(pool, leftAt);
  pool.players.remove(player);

}

// handy method to get sum of weight
Pool.prototype.GetSumOfPlayerWeight = function() {
  var list = this.players;
  var sum = 0;
  for (var i = 0; i < list.length; i++) {
    var player = list[i];
    sum += player.discount;
  }
  return sum;
};

module.exports = Pool;
