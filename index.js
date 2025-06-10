const Game = require('./core/Game');
const { RunningState } = require('./core/GameState');
const Direction = require('./models/Direction');
const readline = require('readline');

const game = new Game();
game.changeState(new RunningState());

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.name === 'w') game.snake.direction = Direction.UP;
  else if (key.name === 's') game.snake.direction = Direction.DOWN;
  else if (key.name === 'a') game.snake.direction = Direction.LEFT;
  else if (key.name === 'd') game.snake.direction = Direction.RIGHT;
  else if (key.ctrl && key.name === 'c') process.exit();
});

setInterval(() => {
  game.tick();
}, 500);
