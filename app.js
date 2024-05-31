const mainHead = document.querySelector('.main-head')
const logo = document.querySelector('.logo')


window.addEventListener('scroll', function(e){
   if(this.scrollY > 54){
      mainHead.classList.add('slidedown')
      logo.style.color  = '#000';
   } else{
      mainHead.classList.remove('slidedown')
         logo.style.color = '';
   }
})