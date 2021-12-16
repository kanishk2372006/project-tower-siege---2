class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 5){
        var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);

       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 1;
         
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }
      
    }
}