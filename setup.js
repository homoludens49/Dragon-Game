var dragon;
var knights =[];
var fires=[];

function setup () {
    createCanvas(600,400);
    dragon = new Dragon();
    //fire = new Fire(width/2,height/2);
    for(var i=0 ; i<6 ; i++){
        knights[i]= new Knight(i*80+80,60);
    }

}


function draw(){
    background(220);
    dragon.show();
    dragon.move();
    for(var i=0; i < fires.length ; i++){
        fires[i].show();
        fires[i].move();
        for(var j=0; j < knights.length ; j++){
            if(fires[i].hits(knights[j])){
                knights[j].burn();
                fires[i].evaporate();
                console.log("Burn");
            }
        }
        
    }
    var edge = false;

    for(var i=0; i < knights.length ; i++){
        knights[i].show();
        knights[i].move();
        
        if(knights[i].x>width || knights[i].x<0 ){
            edge =true;
        }
        
    }
    if(edge){
        for(var i=0; i < knights.length ; i++){
            knights[i].shiftDown();
        }
    }
    for(var i=fires.length-1; i >= 0 ; i--){
        if(fires[i].toDelete){
            fires.splice(i,1);
        }
    }
}

function keyReleased(){
    if(key!= ' '){
        dragon.setDir(0);
    }
    
}

function keyPressed(){
    if (key === ' '){
        var fire = new Fire(dragon.x, height);
        fires.push(fire);
    }
    if(keyCode === RIGHT_ARROW){
        dragon.setDir(1);
    }else if (keyCode === LEFT_ARROW){
        dragon.setDir(-1);
    }

}