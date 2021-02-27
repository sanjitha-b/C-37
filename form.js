class Form {
constructor(){}
display(){


    var title = createElement("H2")
title.html("Car Race")
title.position(130,120)

var input = createInput("name")
input.position(150,200)

var button = createButton("Play")
button.position(215,250)

button.mousePressed(function(){
input.hide()
button.hide()

var name = input.value()
playercount = playercount+1
player.update(name)
player.updatecount(playercount)
var greeting = createElement("h3")
greeting.html("Hi"+ name)
greeting.position(200,200)
})
}
}