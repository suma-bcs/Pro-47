class Book{
    constructor(x,y){
    var options ={
        isStatic: true
    }
    this.body = Bodies.rectangle(x, y, 30, 30,options);
        this.width = 30;
        this.height = 30;
        this.image = loadImage("book.jpg");
       
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        imageMode(CENTER);
       // fill("red");
        image(this.image,pos.x,pos.y, this.width, this.height);
        
      }
}