const bigPict = document.getElementsByClassName('big-picture')[0].lastElementChild;
const thumbs = document.querySelector('.thumbnail-wrapper').getElementsByClassName('img-thumbnail');
/* Add event listeners to thumbnails */
for (let thumb of thumbs) {
    thumb.addEventListener('click', changeBigPicture);
}
/* Changing big picture */
function changeBigPicture (event) {
    bigPict.src = event.target.src;
}

/* Page load */
window.addEventListener("load", () => {
    document.querySelector("body").classList.add("loaded"); 
   });