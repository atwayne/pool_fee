var Table = require('./src/table');
var Player = require('./src/player');
var Engine = require('./src/engine');
var Pool = require('./src/pool');

var players = [
  new Player('wayne'), // 0
  new Player('lwf'), // 1
  new Player('bin'), // 2
  new Player('lm'), // 3
  new Player('joseph'), // 4
  new Player('max'), // 5
  new Player('carl', 0.7), // 6
  new Player('taotao',0.3) // 7
];

var tables = [
  new Table('18', 35 / 60), // 0
  new Table('19', 35 / 60), // 1
];

var pool = new Pool();

var PrintFee = function() {
  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    console.log(player.alias + ' : ' + player.fee);
  }
};

var very_begining = new Date('2015-11-27 18:45');
var lwf_join_at = new Date('2015-11-27 19:25');
var bin_join_at = new Date('2015-11-27 19:50');
var max_left_at = new Date('2015-11-27 20:50');
var taotao_join_at = new Date('2015-11-27 21:00');

var very_end = new Date('2015-11-27 21:50');

// start with two tables
tables[0].JoinPool(pool, very_begining);
tables[1].JoinPool(pool, very_begining);

// wayne, max, joseph and carl joined the pool
players[0].JoinPool(pool, very_begining);
players[4].JoinPool(pool, very_begining);
players[5].JoinPool(pool, very_begining);
players[6].JoinPool(pool, very_begining);

// lwf joined the pool
players[1].JoinPool(pool, lwf_join_at);

// bin and lm joined the pool
players[2].JoinPool(pool, bin_join_at);
players[3].JoinPool(pool, bin_join_at);

// bin, lm, max and lwf ate 16
players[1].Eat(16);
players[2].Eat(16);
players[3].Eat(16);
players[5].Eat(16);

// wayne ate 24
players[0].Eat(24);


// max, joseph, carl, bin, lm left the pool
players[2].LeftPool(pool, max_left_at);
players[3].LeftPool(pool, max_left_at);
players[4].LeftPool(pool, max_left_at);
players[5].LeftPool(pool, max_left_at);
players[6].LeftPool(pool, max_left_at);

// closing table 19
tables[0].LeftPool(pool, max_left_at);

// taotao joined the pool
players[7].JoinPool(pool, taotao_join_at);

// wayne, lwf, taotao left the pool
players[0].LeftPool(pool, very_end);
players[1].LeftPool(pool, very_end);
players[7].LeftPool(pool, very_end);

// closing table 18
tables[1].LeftPool(pool, very_end);

PrintFee();
