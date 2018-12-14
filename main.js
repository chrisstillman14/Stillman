var sq;
var feed = [];
var numFood = 10;
var score = 0;
var level = 0;
var r, g, b;


function setup() {
    createCanvas(740,480);
    textSize(32);
    sq = new Pumpkin();
    r = random(255);
    g = random(255);
    b = random(255);
    for(var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background (127);
    sq.display();
    Score();
    for(var i = 0; i < feed.length; i++) {
        feed[i].display();
    }
    fill(0,0,0);
    stroke(0,0,0)
    text("Score: " + score, width/2, 470); 
    textAlign(CENTER);
    text("Level: " + level, width/2, 40);
    textAlign(CENTER);
    
}

function mousePressed() {
    sq.eat();
    r = random(255);
    g = random(255);
    b = random(255);
}

function Score() {
    
}

function Level() {
    
}

function Food(x, y) {
    this.x = x;
    this.y = y;
    this.fill = (r, g, b, 127);
    this.foodSize = 50;
    
    this.display = function() {
        fill(r, g, b);
        stroke(r,g,b);
        ellipse(this.x, this.y, 50, 50);
    };
}

function Pumpkin() {
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;
    var ate = false;
    
    
    
    
    this.getDistance = function(other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    }
    
    this.score = function() {
        var score = feed.count;
        console.log(score);
    }
    
    this.eat = function() {
        ate = true;
        setTimeout(function() {
            ate = false;
        }, 2000);
        for(var i = feed.length - 1; i >= 0; i--) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if (r1 + r2 > d) {
                diameter = 200 + score;
                feed.splice(i, 1);
                feed.push(new Food(random(width), random(height)));
                score += 5;
                
            }
        }
    }
    
    this.display = function() {
        if(!ate) {
            diameter --;
            if(diameter % 10 === 0) {
                score--;
            }
        }
        if (diameter < 40) {
                text("You Lose", width/2, height/2);
                fill('white');
                diameter = 200;
                score = 0;
                r = random(255);
                g = random(255);
                b = random(255);
                
            }
        
        if (score > 200) {
            text("You Win", width/2, height/2);
                fill('white');
                diameter = 200;
                score = 0;
                level += 1;
        }
        x = mouseX;
        y = mouseY;
        //horns
        fill('#000000');
        triangle(x-diameter*3/40, y-diameter/4, x-diameter*3/8, y-diameter*3/5, x-diameter*11/40, y-diameter/4);
        triangle(x+diameter*3/40, y-diameter/4, x+diameter*3/8, y-diameter*3/5, x+diameter*11/40, y-diameter/4);
        //face
        noStroke();
        fill('#f77900');
        ellipse(x, y, diameter + 50, diameter);
        //eyes
        fill('#000000');
        triangle(x+diameter*3/8, y-diameter/20, x+diameter*11/40, y-diameter/4, x+diameter*7/40, y-diameter/20);
        triangle(x-diameter*7/40, y-diameter/20, x-diameter*11/40, y-diameter/4, x-diameter*3/8, y-diameter/20);
        //nose
        fill('#000000');
        triangle(x+diameter*3/40, y, x, y+diameter*3/20, x-diameter*3/40, y);
        //tounge
        fill('#000000')
        arc(x, y+diameter/5, diameter*3/5, diameter*9/20, 0, PI, PIE); 
        //tooth
        fill('#f77900');
        triangle(x+diameter*3/20, y+diameter*3/20, x+diameter*3/40, y+diameter*3/10, x-diameter/40, y+diameter*3/20);
        //tooth
        fill('#f77900');
        triangle(x-diameter*3/20, y+diameter*3/20, x-diameter*3/40, y+diameter*3/10, x+diameter/40, y+diameter*3/20);
         //tooth
        fill('#f77900');
        triangle(x+diameter/4, y+diameter*3/20, x+diameter*7/40, y+diameter*3/10, x+diameter/10, y+diameter*3/20);
        //tooth
        fill('#f77900');
        triangle(x-diameter/4, y+diameter*3/20, x-diameter*7/40, y+diameter*3/10, x-diameter/10, y+diameter*3/20);
        //tooth
        fill('#f77900');
        triangle(x+diameter*7/20, y+diameter*3/20, x+diameter*11/40, y+diameter*3/10, x+diameter/5, y+diameter*3/20);
        //tooth
        fill('#f77900');
        triangle(x-diameter*7/20, y+diameter*3/20, x-diameter*11/40, y+diameter*3/10, x-diameter/5, y+diameter*3/20);
    };
}

