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
    };

    createSplashScreen();

    function createGameScreen(){

    };

    function createGameOverScreen(){

    };

};

window.addEventListener('load', main);