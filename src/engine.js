'use strict';

var onSavePoint = function(pool, saveAt) {
  caculate(pool, saveAt);
};

var caculate = function(pool, caculateAt) {
  var players = pool.players;
  var sumOfWeight = pool.GetSumOfPlayerWeight();
  var sumOfFee = 0;
  for (var i = 0; i < pool.tables.length; i++) {
    var table = pool.tables[i];
    if (+table.savePoint < +caculateAt) {
      var minutes = (+caculateAt - +table.savePoint) / 1000 / 60;
      var fee = minutes * table.unitFee;
      sumOfFee += fee;
      table.savePoint = caculateAt;
    }
  }

  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    player.fee += (player.discount / sumOfWeight) * sumOfFee;
  }
};

function Engine() {}
Engine.prototype.onSavePoint = onSavePoint;
module.exports = Engine;
