//You just graduated out of college and have to get a Job. You are given the option to choose any of the following 
//jobs: engineer, Banker, Architect, Miner, Youtuber, Streamer, Builder, Doctor, actor, Singer, judge. If you do anything bad you get into trouble and go down. If you do anything good you go higher in life and you do better.

var canvas, background;

var gameState = 0;
var distance = 0;
var dataBase

var form, player, game;

var playerCount;

var player;

var employer;

var executioner;

var judge;

var promoter, demoter;

function preload(){

}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
   game = new Game();
   game.start();

}
function draw(){

    if(playerCount === 1){
        game.update(1);
      
    }
    if(gameState === 1){
        clear();
        game.play();
    }
}