
var Map = Class.extend({
    largeur_draw : 50,
    init: function (obstacles) {
        this.map = [obstacles.length][obstacles[0].length];
        for (var i in this.map) {
            for (var j in this.map[i]) {
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
        console.log(this.map);
        for (var i in this.map) {
            for (var j in this.map[i]) {
                c =map[i][j] ;
                console.log(largeur_draw);
                switch(c.entity.type){
                    case 0:
                        //obstacle
                        context.fillStyle = "#000000";
                        context.fillRect(i*largeur_draw,j*largeur_draw,largeur_draw,largeur_draw);

                        break;
                    case 1:
                        //case vide (pour l'instant)
                        break;
                    case 2:
                        //gommette
                        break;
                    case 3:
                        break;
                }
            }
        }
    },
    moveEntity: function () {

    }
});