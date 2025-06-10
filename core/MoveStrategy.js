const Direction = require('../models/Direction');

class MoveStrategy {
  getNextHead(snake) {
    const head = snake.head();
    return {
      x: head.x + snake.direction.x,
      y: head.y + snake.direction.y
    };
  }
}

module.exports = MoveStrategy;
