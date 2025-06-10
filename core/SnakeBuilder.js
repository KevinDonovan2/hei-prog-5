const Snake = require('./Snake');
const Point = require('../models/Point');

class SnakeBuilder {
  static build(initialX, initialY, length, direction) {
    const body = [];
    for (let i = 0; i < length; i++) {
      body.push(new Point(initialX - i * direction.x, initialY - i * direction.y));
    }
    return new Snake(body, direction);
  }
}

module.exports = SnakeBuilder;
