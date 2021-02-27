class Game {
constructor(){}
readstate(){
    var gamestateRef = database.ref("gamestate")
    gamestateRef.on("value", function(data){
gamestate = data.val()


    })
}
updatestate(state){
database.ref("/").update({
    gamestate:state
})

}
start(){
if (gamestate==0){
    player = new Player()
    player.readcount()
    form = new Form()
    form.display()

}


}

}