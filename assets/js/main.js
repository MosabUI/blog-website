// Grab elements
const selectElememt = selector =>{
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`Something went wrong about ${selector}`)


}
//Nav styles on scroll
const scrollHeader = ()=>{
    const headerElemet = selectElememt('#header');
    if(this.scrollY >15){
    headerElemet.classList.add('activated')
}else
headerElemet.classList.remove('activated')
}
window.addEventListener('scroll',scrollHeader)

// Open menu & search pop-up
const menuToggleIcon = selectElememt('#menu-toggle-icon');

const toggleMenu=()=>{
    const mobileMenu = selectElememt('#menu')
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}
menuToggleIcon.addEventListener('click',toggleMenu);




// Switch theme/add to local storage
const bodyElement=document.body;
const themeToggleBtn = selectElememt('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme')

if (currentTheme){
bodyElement.classList.add('light-theme')
}else{
    bodyElement.classList.remove('light-theme')   
}


themeToggleBtn.addEventListener('click',()=>{

 bodyElement.classList.toggle('light-theme');

 if(bodyElement.classList.contains('light-theme')){
     localStorage.setItem('currentTheme','themeActive');
}else{
     localStorage.removeItem('currentTheme');

 }
})

// Open/Close search form popup
const formOpenBtn = selectElememt('#search-icon');
const formCloseBtn = selectElememt('#search-close-btn');
const searchFormConatiner = selectElememt('#search-form-container');

formOpenBtn.addEventListener('click',()=> {
    searchFormConatiner.classList.add('activated');
})
formCloseBtn.addEventListener('click',()=>{
    searchFormConatiner.classList.remove('activated')
})
// -- Close the search form popup on ESC keypress

window.addEventListener('keyup',(e)=>{
    if(e.key === 'Escape') searchFormConatiner.classList.remove('activated')
})
// Swiper
const swiper = new Swiper(".swiper", {
    // How many slides to show
    slidesPerView: 1,
    // How much space between slides
    spaceBetween: 20,
    // Make the next and previous buttons work
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Make the pagination indicators work
    pagination: {
        el: '.swiper-pagination'
    },
    //Responsive breakpoints for how many slides to show at that view
    breakpoints: {
        // 700px and up shoes 2 slides
        700: {
          slidesPerView: 2
        },
        // 1200px and up shoes 3 slides
        1200: {
            slidesPerView: 3
        }
    }   
});