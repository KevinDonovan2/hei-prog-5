class GameState {
    update(game) {
      throw new Error('Must implement update()');
    }
  }
  
  class MenuState extends GameState {
    update(game) {
      console.clear();
      console.log("Bienvenue dans HEI Snake Game 🐍");
      console.log("Appuyez sur Entrée pour démarrer !");
      require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      }).question('', () => {
        game.changeState(new RunningState());
      });
    }
  }
  
  class RunningState extends GameState {
    update(game) {
      game.tick();
    }
  }
  
  class GameOverState extends GameState {
    update(game) {
      console.clear();
      console.log("💀 Game Over !");
      console.log("Score final :", game.score);
      process.exit();
    }
  }
  
module.exports = { GameState, MenuState, RunningState, GameOverState };
  