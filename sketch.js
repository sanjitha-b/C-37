var database
var gamestate, playercount
var form, player, game

function setup(){
database = firebase.database()
createCanvas(400,400)
game = new Game()
game.readstate()
game.start()
}

function draw(){

  
}