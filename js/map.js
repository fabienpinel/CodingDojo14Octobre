var obstacles = [
    [0,0,0,0,0,0,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,0,0,0,0,0,0]
];

var Map = Class.extend({
    init: function (rows, cols) {
        this.map = [rows][cols];
        for (var i in this.map) {
            for (var j in this.map[i]) {
                this.map[i][j] = new Case();
            }
        }
    }
});