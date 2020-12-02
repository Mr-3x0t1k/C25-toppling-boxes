class Log_C24 extends BaseClass{
    constructor (x, y, height, angle)
        {

        super (x, y, 25, height, angle);
        this.image = loadImage("sprites/wood2.png");
        Matter.Body.setAngle(this.body,angle);
        }
    display()
        {

        super.display();

        }
}