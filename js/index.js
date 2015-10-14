/**
 * Created by fabien on 14/10/15.
 */
var obstacles = new Array();
obstacles.push(new Array(0,0,0,0,0,0,0,0,0,0));
obstacles.push(new Array(0,0,1,1,1,1,0,0,0,0));
obstacles.push(new Array(0,1,2,0,1,1,0,0,0,0));
obstacles.push(new Array(0,1,1,2,3,1,0,0,0,0));
obstacles.push(new Array(0,1,1,1,1,1,0,0,0,0));
obstacles.push(new Array(0,1,1,1,1,1,0,0,0,0));
obstacles.push(new Array(0,0,0,0,0,0,0,0,0,0));

var map = new Map(obstacles);

document.addEventListener('keydown', function (event) {
    console.log(event);
    if (event.which == 38) {
        map.moveEntity('up');
    } else if (event.which == 39) {
        map.moveEntity('down');
    }
}, false);