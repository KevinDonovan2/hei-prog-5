class Snake {
    constructor(body, direction) {
      this.body = body;
      this.direction = direction;
    }
  
    head() {
      return this.body[0];
    }
  
    move(newHead, ateFood = false) {
      this.body.unshift(newHead);
      if (!ateFood) this.body.pop();
    }
  
    hasCollision(point) {
      return this.body.some(p => p.equals(point));
    }
  
    isOutOfBounds(size) {
      const { x, y } = this.head();
      return x < 0 || y < 0 || x >= size || y >= size;
    }
  }
  
module.exports = Snake;
  