
  let clickedImg1 = document.getElementById('shoes1');
  let clickedImg2 = document.getElementById('shoes2');
  let clickedImg3 = document.getElementById('shoes3');
  
  
  if (clickedImg1) {
    clickedImg1.addEventListener('click', switchImage);
  }
  if (clickedImg2) {
    clickedImg2.addEventListener('click', switchImage);
  }
  if (clickedImg3) {
    clickedImg3.addEventListener('click', switchImage);
  }

function switchImage(event) {

    const target = event.target;

    const mainImg = document.getElementById('ampShoes');

    mainImg.src = target.src;
    
}