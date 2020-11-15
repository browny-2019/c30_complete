class Block {
    constructor(x,y,width,height){
        
       var options={
           restitution:1,
           friction:0.3,
           density:0.5
       }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("square.png");
      
        World.add(world,this.body);
        this.Visiblity = 255
    
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        if(this.body.speed < 3){
          
        image( this.image,0, 0, this.width, this.height);
       
           }
           else{
             World.remove(world, this.body);
             
             this.Visiblity = this.Visiblity - 10;
             tint(255,this.Visiblity);
             image(this.image, 0, 0, this.width, this.height);
             
           }
           pop();
    
}
}