function setup() {
    createCanvas(640,480);
}

function draw() {
    
    var x = width/2;
    var y = height/2;
    //lefthorn
    fill('#000000');
    triangle(x-15, y-50, x-75, y-120, x-55, y-50);
    //righthorn
    fill('#000000');
    triangle(x+15, y-50, x+75, y-120, x+55, y-50);
    //face
    noStroke();
    fill('#f77900');
    ellipse(x, y, 250, 200);
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
   
}

var randomColourOne;
var randomColourTwo;

$(document).ready(function(){
    $("#colourOne").hide();
    $("#colourTwo").hide();
})

$(document).ready(function(){   
    $("body").hover(function(){
        $("#colourOne").fadeToggle(300);
        $("#colourTwo").fadeToggle(300);
    });
});

function firstColour(){
    randomColourOne = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    
    randomColourTwo = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    
    var background = document.getElementById("background");
    background.style.backgroundImage = "-webkit-linear-gradient("+ randomColourOne +" , "+ randomColourTwo +")";
    
    document.getElementById("topColour").innerHTML=(randomColourOne);
    document.getElementById("bottomColour").innerHTML=(randomColourTwo);
}