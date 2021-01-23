class Ball {
    constructor(x, y, radius) {
        var options = {
        density: 1.2

            
        }
        this.body = Matter.Bodies.circle(x, y, radius, options)
        World.add(world, this.body)
        this.radius=2*radius

    }

    display() {

        var angle=this.body.angle
        push()
        rotate(angle)
        translate(this.body.position.x, this.body.position.y)
        ellipseMode(CENTER)
        ellipse(0,0, this.radius, this.radius) 
       pop()

    }
}
