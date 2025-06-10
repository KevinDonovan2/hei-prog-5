const FoodFactory = require('./FoodFactory');
const SnakeBuilder = require('./SnakeBuilder');
const MoveStrategy = require('./MoveStrategy');
const { MenuState, GameOverState } = require('./GameState');
const Direction = require('../models/Direction');
const Point = require('../models/Point');

class Game {
  constructor(size = 10) {
    this.size = size;
    this.snake = SnakeBuilder.build(5, 5, 3, Direction.RIGHT);
    this.food = FoodFactory.generateFood(this.size, this.snake);
    this.strategy = new MoveStrategy();
    this.state = new MenuState();
    this.score = 0;
  }

  changeState(state) {
    this.state = state;
    this.state.update(this);
  }

  start() {
    this.changeState(new MenuState());
  }

  tick() {
    const head = this.snake.head();
    const newHead = new Point(head.x + this.snake.direction.x, head.y + this.snake.direction.y);

    if (this.snake.hasCollision(newHead) || newHead.x < 0 || newHead.y < 0 || newHead.x >= this.size || newHead.y >= this.size) {
      this.changeState(new GameOverState());
      return;
    }

    const ateFood = newHead.equals(this.food);
    this.snake.move(newHead, ateFood);

    if (ateFood) {
      this.score++;
      this.food = FoodFactory.generateFood(this.size, this.snake);
    }

    this.print();
  }

  print() {
    const grid = Array.from({ length: this.size }, () => Array(this.size).fill('.'));

    for (const part of this.snake.body) {
      grid[part.y][part.x] = '*';
    }

    grid[this.food.y][this.food.x] = '@';

    console.clear();
    console.log("Score:", this.score);
    console.log(grid.map(row => row.join(' ')).join('\n'));
  }
}

module.exports = Game;
