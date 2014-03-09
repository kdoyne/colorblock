var body = document.querySelector("body");
var rectangle = document.querySelector("button#rectangle");
var circle = document.querySelector("button#circle");


var count = 0;

var setColor = function() {
  randomNumber1 = Math.floor(Math.random()*225);
  randomNumber2 = Math.floor(Math.random()*225);
  randomNumber3 = Math.floor(Math.random()*225);
  return "rgba("+randomNumber1+","+randomNumber2+","+randomNumber3+",.5)"
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
  randomNumber = Math.floor(Math.random()*400);
  return randomNumber
};

var setLeftLocation = function() {
  randomNumber = Math.floor(Math.random()*600);
  return randomNumber
};

var setSize = function() {
  randomNumber = Math.floor(Math.random()*800);
  return randomNumber
};
