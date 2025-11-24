// Turn Pages When Click On Next or Prev buttons
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
     el.onclick = () => {
          const pageTurnId = el.getAttribute('data-page');
          const pageTurn = document.getElementById(pageTurnId);

          if (pageTurn.classList.contains('turn')) {
              pageTurn.classList.remove('turn');
              setTimeout(() => {
               pageTurn.style.zIndex = 5 - index;
              }, 500)
     }
     else {
          pageTurn.classList.add('turn');
          setTimeout(() => {
               pageTurn.style.zIndex = 5 + index;
          }, 500)
     }
}
})

// When Contact button is clicked
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
     pages.forEach((page, index) => {
          setTimeout(() => {
               page.classList.add('turn');

          setTimeout(() => {
               page.style.zIndex = 20 + index;
          }, 500)
          }, (index + 1) * 200 + 100 )
     })
}


// Create Reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
     pageNumber--;
     if(pageNumber < 0){
          pageNumber = totalPages - 1;
     }
}


// Back Profile button When Clicked
const backProfileBtn = document.querySelector('.back-profile');
backProfileBtn.onclick = () => {
     pages.forEach((_, index) => {
          setTimeout(() => {
               reverseIndex();
               pages[pageNumber].classList.remove('turn');
               
               setTimeout(() => {
                    reverseIndex();
                    pages[pageNumber].style.zIndex = 10 + index;
               }, 500)
          }, (index + 1) * 200 + 100 )
     })
}


// Opening Animation

const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

// Opening Animation (cover right animation)

setTimeout(() => {
     coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
     coverRight.style.zIndex = -1;
}, 2800)

// Opening Animation (page left or profile page animation)
setTimeout(() => {
     pageLeft.style.zIndex = 0;
}, 3200)

// Opening Animation (all right page animation)

     pages.forEach((_, index) => {
          setTimeout(() => {
               reverseIndex();
               pages[pageNumber].classList.remove('turn');
               
               setTimeout(() => {
                    reverseIndex();
                    pages[pageNumber].style.zIndex = 10 + index;
               }, 500)
          }, (index + 1) * 200 + 2100 )
     })