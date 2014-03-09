var body = document.querySelector("body");
var button = document.querySelector("button");

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

button.addEventListener("click", function() {
  var colorBlock = document.createElement("div");
  body.appendChild(colorBlock);
  colorBlock.id = count;
  colorBlock.setAttribute("style","width:"+setSize()+"px; height:"+setSize()+"px; background-color: "+setColor()+"; position: absolute; top: "+setTopLocation()+"px; left: "+setLeftLocation()+"px;" );
  count++;
});

var setTopLocation = function() {
  randomNumber = Math.floor(Math.random()*800);
  return randomNumber
};

var setLeftLocation = function() {
  randomNumber = Math.floor(Math.random()*800);
  return randomNumber
};

var setSize = function() {
  randomNumber = Math.floor(Math.random()*800);
  return randomNumber
};
