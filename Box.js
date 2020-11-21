class Box {
    constructor(x, y) {

        var options ={
            restitution:0.4,
            friction:1,
            density:0.04
        }
      
        this.body = Bodies.rectangle(x, y, 70, 70, options);       
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        strokeWeight(4);
        stroke("red")
        fill("white")
        rectMode(CENTER);
        rect(0, 0, 70, 70);
        pop();
    }

};