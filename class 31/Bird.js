class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.arraytrajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var birdpos = [this.body.position.x ,this.body.position.y];
      this.arraytrajectory.push(birdpos);
    }
    
    super.display();
    for(var i = 0; i<this.arraytrajectory.length; i++){
      image(this.smokeimage, this.arraytrajectory[i][0], this.arraytrajectory[i][1]);
    }
  }
}
