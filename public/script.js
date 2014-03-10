var body = document.querySelector("body");
var rectangle = document.querySelector("button#rectangle");
var circle = document.querySelector("button#circle");


var count = 0;

var random = function(number){
  return Math.floor(Math.random()*number);
};

var setColor = function() {
  rand1 = random(255);
  rand2 = random(255);
  rand3 = random(255);
  return "rgba("+rand1+","+rand2+","+rand3+",.5)"
};

var setBackground = function() {
  body.setAttribute("style", "background-color: "+setColor() );
};

setBackground();

rectangle.addEventListener("click", function() {
  var colorBlock = document.createElement("div");
  body.appendChild(colorBlock);
  colorBlock.id = count;
  colorBlock.setAttribute("style","width:"+setSize()+"px; height:"+setSize()+"px; background-color: "+setColor()+"; position: absolute; top: "+setTopLocation()+"px; left: "+setLeftLocation()+"px;" );
  count++;
});

circle.addEventListener("click", function(){
  var colorBlock = document.createElement("div");
  body.appendChild(colorBlock);
  colorBlock.id = count;
  var dimension = setSize()
  colorBlock.setAttribute("style","width:"+dimension+"px; height:"+dimension+"px; background-color: "+setColor()+"; position: absolute; top: "+setTopLocation()+"px; left: "+setLeftLocation()+"px; border-radius: 50%" );
  count++;
});


var setTopLocation = function() {
  var rand = random(400);
  return rand
};

var setLeftLocation = function() {
  var rand = random(600);
  return rand
};

var setSize = function() {
  rand = random(800);
  return rand
};
