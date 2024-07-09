const rotate3dContainer = document.querySelectorAll('#rotate1, #rotate2, #rotate3');

rotate3dContainer.forEach(function(img){
  img.addEventListener('mouseenter', function() {
  this.querySelector('img').style.transform = 'rotateY(180deg)';
});

img.addEventListener('mouseleave', function() {
  this.querySelector('img').style.transform = 'rotateY(0deg)';
});
});