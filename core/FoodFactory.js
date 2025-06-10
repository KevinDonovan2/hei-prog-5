const Point = require('../models/Point');

class FoodFactory {
    static generateFood(size, snake) {
      let point;
      do {
        point = new Point(
          Math.floor(Math.random() * size),
          Math.floor(Math.random() * size)
        );
      } while (snake.hasCollision(point));
      return point;
    }
  }
  
module.exports = FoodFactory;
  