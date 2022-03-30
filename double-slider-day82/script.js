
function leavesFirst() {
  let rightImages = document.querySelectorAll('.container-right img');
  let leftImages = document.querySelectorAll('.container-left img');

  for(i = 0; i < rightImages.length; i++){
      rightImages[i].style.display = "none";
  }
  rightImages[0].style.display = "block";

  for(i = 0; i < leftImages.length; i++){
      leftImages[i].style.display = "none";
  }
leftImages[0].style.display = "block";
}

leavesFirst();

let nextImage = document.querySelector('.btn-next');
let backimage = document.querySelector('.btn-prev');

nextImage.onclick = function(event){

  let contLftImg = document.getElementById('left-side');
  let leftImages = document.querySelectorAll('.container-left img');
  let firstLeftImage = leftImages[0];
  firstLeftImage.remove();
  contLftImg.append(firstLeftImage);

  let contRtImg = document.getElementById('right-side');
  let rightImages = document.querySelectorAll('.container-right img');
  let firstRightImage = rightImages[0];
  firstRightImage.remove();
  contRtImg.append(firstRightImage);
  leavesFirst();
  event.preventDefault();
}

backimage.onclick = function(event){

  let contLftImg = document.getElementById('left-side');
  let leftImages = document.querySelectorAll('.container-left img');
  let lastLeftImage = leftImages[leftImages.length-1];
  lastLeftImage.remove();
  contLftImg.prepend(lastLeftImage);

  let contRtImg = document.getElementById('right-side');
  let rightImages = document.querySelectorAll('.container-right img');
  let lastRightImage = rightImages[rightImages.length-1];
  lastRightImage.remove();
  contRtImg.prepend(lastRightImage);


  leavesFirst();
  event.preventDefault();
}