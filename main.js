'use strict';

function main (){
  var mainElement = document.querySelector('#site-main');

  function buildDom(html){
    mainElement.innerHTML = html;
    return mainElement;
  };

  function createSplashScreen(){
    var splashScreen = buildDom(`
      <section>
        <h1>Eternal Enemies</h1>
        <button>Start</button>
      </section>
    `);

    var startButton = splashScreen.querySelector('button');
    startButton.addEventListener('click', createGameScreen);
  };

  function createGameScreen(){
    var gameScreen = buildDom(`
      <section>
        <canvas width="500" height="500"></canvas>
      </section>
			`);
		var canvasElement = document.querySelector('canvas');
		var gameInstance = new Game(canvasElement);
		gameInstance.gameOverCallback(createGameOverScreen);

		gameInstance.startGame();
		document.addEventListener('keydown', function(event){
			if(event.key === 'ArrowDown'){
				//ir hacia abajo
				gameInstance.player.setDirection(1);
			} else if(event.key === 'ArrowUp'){
				gameInstance.player.setDirection(-1);
				//ir hacia arriba
			}
		});

		// setTimeout(createGameOverScreen, 3000);
  };

  function createGameOverScreen(){
    var gameOverScreen = buildDom(`
      <section>
        <h1>Game Over</h1>
        <button>Restart</button>
      </section>
		`);
		
		var buttonRestart = gameOverScreen.querySelector('button');
		buttonRestart.addEventListener('click', createGameScreen);
  };
	
	createSplashScreen();

};

window.addEventListener('load', main);