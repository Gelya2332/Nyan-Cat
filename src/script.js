var obj = document.getElementById('drawing'); // Получить объект холста
if (obj.getContext){ 
  var ctx = obj.getContext('2d');
  
  
 var j = 193;
var lst =['red','OrangeRed','Yellow','LimeGreen','DodgerBlue','Indigo']
shad(ctx);
for (let i = 0; i < 6; i++) {
  ctx.fillStyle = lst[i];//радуга 
  ctx.fillRect(0,j,270,10);
    j=j+10;
}
  ctx.beginPath()//хвост
  ctx.moveTo(200, 240)
  ctx.fillStyle = "#808080";
  ctx.arcTo(95, 100, 270, 300, 5)
  ctx.stroke()
  ctx.fill()
  
  sqrt(ctx, 200, 250, 15, 15, "#808080", 0, 1, 0);//лапки
    sqrt(ctx, 220, 250, 15, 15, "#808080", 0, 1, 0);
   sqrt(ctx, 270, 250, 15, 15, "#808080", 0, 1, 0);
    sqrt(ctx, 290, 250, 15, 15, "#808080", 0, 1, 0);
   sqrt(ctx, 193, 193, 113, 63, "#FFDEAD", 0, 15, 0);//тесто
 sqrt(ctx, 200, 200, 100, 50, "#EE82EE", 0, 15, 0);//тело
  ctx.beginPath()// крапинки
  for(var i = 0;i < 100; i++){
    ctx.fillStyle = '#FF00FF'
    ctx.shadowBlur = 0;
    x = getRandomArbitrary(203, 275);
    y = getRandomArbitrary(200, 245)
    ctx.fillRect(x, y, 3, 3)
  }
   ctx.stroke()
  ctx.fill()
  sqrt(ctx, 270, 209, 55, 50,"#808080", 0, 1, 0);//головешка
  ctx.beginPath()
  ctx.moveTo(284, 209,)
  shad(ctx);
  ctx.arc(284, 209, 9, Math.PI,0);
  ctx.moveTo(310, 209,)
  ctx.arc(310, 209, 9, Math.PI,0);
  ctx.stroke()
  ctx.fill()
 k(ctx,283,230,7,"#000000");
 k(ctx,312,230,7,"#000000");
 k(ctx,280,229,4,"#FFFFFF");
 k(ctx,309,229,4,"#FFFFFF");
 k(ctx,279,240,5,"#DA70D6");
 k(ctx,317,240,5,"#DA70D6");
  ctx.beginPath()
  ctx.fillStyle = "#000000";
  ctx.moveTo(298, 236)
  ctx.arc(297, 235, 4, 0,Math.PI);
  ctx.stroke()
  ctx.fill()
  ctx.beginPath()
  ctx.moveTo(298,237)
  ctx.lineTo(298, 245)
  ctx.moveTo(298,242)
  ctx.arc(298, 242, 5, Math.PI/2,Math.PI);
  ctx.moveTo(302,242)
  ctx.arc(298, 242, 5, 0,Math.PI/2);
  ctx.fillStyle = "#000000";
  ctx.shadowBlur = 0;
  ctx.stroke()
  var x,y;
  for(var i = 1;i <= 3;i++){
    for(var j = 0;j < 20;j++){
    x = getRandomArbitrary(0, 500);
    y = getRandomArbitrary(0, 500)
      star(ctx, x, y, i);
    }
  }
  ctx.beginPath()
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  ctx.shadowBlur = 4;
  ctx.shadowColor = "#9370DB";
  ctx.fillStyle = '#FFFFFF'
  ctx.font = '48px Georgia';
  ctx.fillText("NYAN CAT", 10, 110,200)
  ctx.stroke()
  
}
function sqrt(cntx, x, y, wight, height, color, c, line, t){
  cntx.beginPath()
  cntx.lineWidth = line;
  if(t == 0){
      shad(cntx)}
  cntx.fillStyle = color;
  cntx.strokeStyle = "#000000";
  cntx.fillRect(x, y, wight, height)
  cntx.stroke()
  if(c == 0){
  cntx.fill()}
}
function shad(cntx){
  cntx.shadowOffsetX = 0;
  cntx.shadowOffsetY = 0;
  cntx.shadowBlur = 15;
  cntx.shadowColor = "#000000";}
function k(cntx,x,y,r,color,n=x,z=y){
  cntx.beginPath()
  cntx.fillStyle = color;
  cntx.shadowBlur = 0;
  cntx.moveTo(n, z)
  cntx.arc(x, y, r, 2*Math.PI,0);
  cntx.stroke()
  cntx.fill()
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
function star(cntx, x, y, c){
  cntx.beginPath()// звездочки
    cntx.fillStyle = '#ffffff'
    cntx.shadowBlur = 0;
    cntx.fillRect(x, y, c*3, c)
      cntx.fillRect(x+c*4, y-c*4, c, c*3)
      cntx.fillRect(x+c*4, y, c, c)
      cntx.fillRect(x+c*6, y, c*3, c)
      cntx.fillRect(x+c*4, y+c*2, c, c*3)
   cntx.stroke()
  cntx.fill()
}