
var outerContainer = document.getElementById("outer-container");

function scaleToWindow() {
  if (window.innerWidth > window.innerHeight) {
    outerContainer.style.height = window.innerHeight*0.8+"px";
    outerContainer.style.width = outerContainer.style.height;
  } else {
    outerContainer.style.width = window.innerWidth*0.8+"px";
    outerContainer.style.height = outerContainer.style.width;
  }
}

scaleToWindow();

window.addEventListener('resize', scaleToWindow);
