const CONFIG = {
  size: 120,
  y: -30,
}

const update = () => {
  document.documentElement.style.setProperty('--size', CONFIG.size)
  document.documentElement.style.setProperty('--y', CONFIG.y)
}

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  var pos = 0.75*(-50 + window.scrollY);
  return {
    left: rect.left + window.scrollX,
    top: pos,
  };
}

window.addEventListener("scroll", function(){
  const ball = document.getElementsByClassName('columns');
  CONFIG.y = getOffset(ball[0]).top;
  update();
})