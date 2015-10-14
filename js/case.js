var Case = Class.extend({
    player: null,
    init: function (obstacle, gomette) {
        this.obstacle = obstacle;
        this.gomette = gomette;
    },
    setPlayer: function (player) {
        this.player = player;
        this.gomette = null;
    }
});