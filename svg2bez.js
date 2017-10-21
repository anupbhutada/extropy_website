//points exported from DrawScript : Bezier Points Array (anchor, control, control, anchor)
var data = Snap.path.toCubic(document.getElementById("anim-path").getAttribute('d'))
    dataLength = data.length,
    points = [], //holds our series of x/y values for anchors and control points,
    pointsString = data.toString();

// convert cubic data to GSAP bezier
for (var i = 0; i < dataLength; i++) {
  var seg = data[i];
  if (seg[0] === "M") { // move (starts the path)
    var point = {};
    point.x = seg[1];
    point.y = seg[2];
    points.push(point);
  } else { // seg[0] === "C" (Snap.path.toCubic should return only curves after first point)
    for (var j = 1; j < 6; j+=2) {
      var point = {};
      point.x = seg[j]-points[0].x;
      point.y = seg[j+1]-points[0].y;
      points.push(point);
    }
  }
}
points[0].x = 0;
points[0].y = 0;

function scale_svg(points) {
  var w_x = 0.8*window.innerWidth;
  var w_y = 0.8*window.innerHeight;
  var max = {}, min = {};
  max.x=0.0;
  max.y=0.0;
  min.x=0.0;
  min.y=0.0;
  for (var i = 0; i < points.length; i++) {
    
    if (points[i].x > max.x) {
      max.x = points[i].x;
    }
    if (points[i].x < min.x) {
      min.x = points[i].x;
    }
    if (points[i].y > max.y) {
      max.y = points[i].y;
    }
    if (points[i].y < min.y) {
      min.y = points[i].y;
    }
  }

  console.log(max, min,points)
  var new_arr = [];
  for (var i = 0; i < points.length; i++) {
    var p = {};
    p.x = (points[i].x/(max.x-min.x))*w_x;
    p.y = (points[i].y/(max.y-min.y))*w_y
    new_arr.push(p);
  }
  return new_arr
}

var n_points = scale_svg(points);
points = n_points;

var str = "[";

for (var a = 0; a < points.length; a++) {
    if(a == points.length-1){
        str += "{x:" + points[a].x.toFixed(2) + ", y:" + points[a].y.toFixed(2) + "}];";
    }else{
        str += "{x:" + points[a].x.toFixed(2) + ", y:" + points[a].y.toFixed(2) + "},";
    }
}
console.log("var points = " + str)


//make the tween
/*var tween = TweenMax.to(".shape-1", 3, {bezier:{type:"cubic", values:points}, ease:Power0.easeNone});
but = document.getElementById('about');
but.addEventListener('click', function(){
tween.restart();
console.log('hi');

});
*/

//console.log(pointsString)