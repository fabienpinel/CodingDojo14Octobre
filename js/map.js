
var Map = Class.extend({
    largeur_draw : 50,
    init: function (obstacles) {
        this.map = new Array();
        for(var i in obstacles) {
            this.map[i] = new Array();
        }
        for (var i in this.map) {
            for (var j in obstacles[0]) {
                this.map[i][j] = new Case(new Entity(i,j,obstacles[i][j]));
            }
        }
        this.printMap();
    },

    printMap: function(){
        var c;
        var canvas = document.getElementById("my_canvas");
        console.log(canvas);
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        console.log(this.map);
        for (var i in this.map) {
            for (var j in this.map[i]) {
                c = this.map[i][j] ;
                switch(c.entity.type){
                    case 0:
                        //obstacle
                        context.fillStyle = "#000000";
                        context.fillRect(i*this.largeur_draw,j*this.largeur_draw,
                            this.largeur_draw,this.largeur_draw);
                        break;
                    case 1:
                        //case vide (pour l'instant)
                        break;
                    case 2:
                        context.fillStyle = "#FF0000";
                        context.fillRect(i*this.largeur_draw+this.largeur_draw/4,j*this.largeur_draw+this.largeur_draw/4,
                            this.largeur_draw/2,this.largeur_draw/2);
                        break;
                    case 3:
                        context.strokeStyle = "#00FF00";
                        context.fillStyle = "green";
                        context.arc(i*this.largeur_draw+this.largeur_draw/2,j*this.largeur_draw+this.largeur_draw/2,this.largeur_draw/4,0,2*Math.PI)
                        context.stroke();
                        break;
                }
            }
        }
    },
    moveEntity: function (direction) {
        for (var i in this.map) {
            for (var j in this.map[i]) {
                if (this.map[i][j].entity.type == 3){
                    switch (direction) {
                        case "left":
                            if (i > 0) {
                                this.map[i-1][j].entity.type = 3;
                            }
                            break;
                        case "right":
                            if (i < this.map.length - 1) {
                                this.map[i+1][j].entity.type = 3;
                            }
                            break;
                        case "up":
                            if (j > 0) {
                                this.map[i][j-1].entity.type = 3;
                            }
                            break;
                        case "down":
                            if (j < this.map[0].length - 1) {
                                this.map[i][j+1].entity.type = 3;
                            }
                            break;
                    }
                    this.map[i][j].entity.type = 1;
                    break;
                }
            }
        }
        this.printMap();
    }
});