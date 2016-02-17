var filterdude = document.getElementById("filterdude");
var output = document.getElementById("filterValue");


var blurAmount = 0;
var brightness = 100;
var contrast = 100;
var dropShadow = 0;
var grayscale = 0;
var hueRotate = 0;
var invert = 0;
var opacity = 100;
var saturate = 100;
var sepia = 0;
var setOutput = function(value){
  output.innerHTML = value;
}
var filterText = function() {
  return "sepia(" + sepia + "%) invert(" + invert +
    "%) saturate(" + saturate + "%) hue-rotate(" + hueRotate + "deg) contrast(" + contrast +
    "%) grayscale(" + grayscale + "%) brightness(" + brightness + "%) blur(" + blurAmount + "px) opacity(" + opacity + "%)"
}
var setFilter = function() {
  filterdude.setAttribute("style", "-webkit-filter: " + filterText());
  setOutput(filterText());
}

var changeGrayscale = function(value){
  grayscale = value;
  setFilter();
}
var changeBlurAmount = function(value){
  blurAmount = value;
  setFilter();
}
var changeBrightness = function(value){
  brightness = value;
  setFilter();
}
var changeContrast = function(value){
  contrast = value;
  setFilter();
}
var changeHueRotate = function(value){
  hueRotate = value;
  setFilter();
}
var changeSepia = function(value){
  sepia = value;
  setFilter();
}
var changeInvert = function(value){
  invert = value;
  setFilter();
}
var changeSaturate = function(value){
  saturate = value;
  setFilter();
}
var changeSaturate = function(value){
  saturate = value;
  setFilter();
}
var changeOpacity = function(value){
  opacity = value;
  setFilter();
}
var changeBlur = function(value){
  blurAmount = value;
  setFilter();
}
