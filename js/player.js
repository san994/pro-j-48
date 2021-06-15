class Player{

constructor(x,y,width,height){
  
    var option = {

       isStatic : false,
       density : 0.7,
       friction : 0.1

    }

    this.body = Bodies.rectangle(x,y,width,height,option)
    this.width = width
    this.height = height
    this.colour = "blue"
   // this.image = loadImage("images/blurPlayer.png")
    World.add(world,this.body)

  }

  

 display(){

    var pos = this.body.position

    push()
    rectMode(CENTER)
    imageMode(CENTER)
    fill(this.colour)
    rect(pos.x,pos.y,this.width,this.height);
    //image(this.image,pos.x,pos.y,70,70)
    pop()

 }


}