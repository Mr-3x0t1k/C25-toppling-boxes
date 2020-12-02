class BaseClass {
 constructor (x, y, width, height, angle){
     var options = {
     restitution : 0.8,
     friction : 1.0,
     density : 1.0,
     isStatic : true

     }

    this.body = Bodies.rectangle(x , y , width , height, options, );
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/base.png");


    World.add(world, this.body);

 }
    display (){
     ///variables for the positions and angles of the log
      var position = this.body.position;
      var angle = this.body.angle;
       //on the collision this will react

       push ();
       translate (position.x, position.y);
        rotate (angle);

     imageMode(CENTER);
     image(this.image, 0, 0, this.width, this.height);
     pop();
    }

}