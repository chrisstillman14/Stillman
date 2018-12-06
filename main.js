var sq;
var feed = [];
var numFood = 10;

function setup() {
    createCanvas(640,480);
    sq = new Pumpkin();
    
    for(var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background(0,255,0);
    sq.display();
    for(var i = 0; i < feed.length; i++) {
        feed[i].display();
    }
  
}

function mousePressed() {
    sq.eat();
}

function Food(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    this.foodSize = 50;
    
    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, 50, 50);
    };
}

function Pumpkin() {
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;
    
    this.getDistance = function(other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    }
    
    this.eat = function() {
        console.log('try to eat');
        for(var i = 0; i < feed.length; i++) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if (r1 + r2 > d) {
                feed.splice(i, 1);
                
            }
        }
    }
    
    this.display = function() {
        x = mouseX;
        y = mouseY;
        //lefthorn
        fill('#000000');
        triangle(x-15, y-50, x-75, y-120, x-55, y-50);
        //righthorn
        fill('#000000');
        triangle(x+15, y-50, x+75, y-120, x+55, y-50);
        //face
        noStroke();
        fill('#f77900');
        ellipse(x, y, diameter + 50, diameter);
        //righteye
        fill('#000000');
        triangle(x+75, y-10, x+55, y-50, x+35, y-10);
        //lefteye
        fill('#000000');
        triangle(x-35, y-10, x-55, y-50, x-75, y-10);
        //nose
        fill('#000000');
        triangle(x+15, y, x, y+30, x-15, y);
        //tounge
        fill('#000000')
        arc(x, y+40, 120, 90, 0, PI, PIE);
        //tooth
        fill('#f77900');
        triangle(x+30, y+30, x+15, y+60, x-5, y+30);
        //tooth
        fill('#f77900');
        triangle(x-30, y+30, x-15, y+60, x+5, y+30);
         //tooth
        fill('#f77900');
        triangle(x+50, y+30, x+35, y+60, x+20, y+30);
        //tooth
        fill('#f77900');
        triangle(x-50, y+30, x-35, y+60, x-20, y+30);
        //tooth
        fill('#f77900');
        triangle(x+70, y+30, x+55, y+60, x+40, y+30);
        //tooth
        fill('#f77900');
        triangle(x-70, y+30, x-55, y+60, x-40, y+30);
    };
}

