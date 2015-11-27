# pool_fee
> library to calculate how to split the bill of a pool game

To Start, create a fork of the example timeline `timeline_20151127.js`, run

```
node timeline_20151127.js
```

## Features:
- Input when did each table open and close, along with how much it cost per minute

  ```
    // create a table which costs $35 per hour
    var table = new Table('table_alias', 35 / 60);
    // open this table at 19:00
    table.JoinPool(pool, new Date('2015-11-27 19:00'));
    // close this table at 21:00
    table.LeftPool(pool, new Date('2015-11-27 21:00'))
  ```

- Input when did everyone arrive and leave

  ```
    // create player with a alias and an optional discount
    var tom = new Player('tom');

    // join pool at 19:00
    tom.JoinPool(pool,new Date('2015-11-27 19:00'));

    // left pool at 21:00
    tom.LeftPool(pool,new Date('2015-11-27 21:00'));
  ```

- Optional, place a discount on anyone

  ```
    // now jerry weights 0.8 while others weights 1
    var jerry = new Player('jerry',0.8);
  ```

- Optional, charge extra money on anyone

  ```
    // tom ate something worth $23, which should not be paid by everyone
    tom.Eat(23);
  ```


## TODO:

- Create Android App and iOS App for that
