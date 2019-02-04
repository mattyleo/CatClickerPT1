const countsContainer = document.querySelector('.count');
let counts =  0;
countsContainer.innerHTML = 0;
function onClick() {
  counts++;
  countsContainer.innerHTML =  'You clicked the image ' + counts + ' time';
}
