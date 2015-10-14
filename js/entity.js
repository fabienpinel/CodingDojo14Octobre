/**
 * Created by fabien on 14/10/15.
 */

var Entity = Class.extend({
    type:null,
   init: function(x, y, type){
       this.x = x;
       this.y = y;
       this.type=type;
   }
});

var Player = Entity.extend({
    init: function(x, y) {
        this._super(x,y, 3);
    }
})