function Fire(x,y){
    this.x = x;
    this.y = y;
    this.r = 8; 
    this.toDelete = false;
    
        
    this.show = function (){
        fill(150,0,255);
        ellipse(this.x, this.y, this.r*2,this.r*2);
    }

    this.hits = function(knights){
        var d= dist(this.x,this.y,knights.x, knights.y);
        if (d<this.r + knights.r){
            return true;

        }else{
            return false
        }
    }
        this.evaporate = function(){
          this.toDelete=true;  
        }
        this.move= function(){
            this.y = this.y-4;
        }
    }