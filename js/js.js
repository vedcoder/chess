var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");

for (var i = 0; i <= 640; i=i+80) {
  drawLine(0,i,640,i);
  drawLine(i,0,i,640);
}

function drawLine(sx,sy,ex,ey) {
  ctx.moveTo(sx,sy);
  ctx.lineTo(ex,ey);
  ctx.stroke();
}

for (var y = 0; y <= 560; y=y+80) {
  var sp=80;
  if ((y/80)%2!=0){
    sp=0;
  }
  for (var x = sp; x <=560; x=x+160) {
    ctx.fillRect(x, y, 80, 80);
  }
}
