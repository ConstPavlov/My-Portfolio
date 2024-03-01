const body = document.getElementById('body');
const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');





///// Отключаем прелоад - чтобы убрать артефакты
function transitionAfterPageLoad() {
  body.classList.remove('preload');
  const popupsAll = document.querySelectorAll('.popup');
  popupsAll.forEach(popup =>{
    popup.classList.remove('popup-preload');
  })
}
// call the function inside an Immediately Invoked Function Expression (IIFE) to invoke it immediately after page load
(function() {
  setTimeout(() => {
    transitionAfterPageLoad();
  }, 500);
})()




if (menu && burger) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('burger_active')
    burger.classList.toggle('burger_active')
    body.classList.toggle('lock')
  })
  menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('header__nav')) {
      menu.classList.remove('burger_active')
      burger.classList.remove('burger_active')
      body.classList.remove('lock')
    }
  })
  menu.querySelectorAll('.header__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('burger_active')
      burger.classList.remove('burger_active')
      body.classList.remove('lock')
    })
  })
}









///////         -button  Up^    

// const btnUp = {
//   domBtnUp: document.querySelector('.btn-up'),
//   show() {
//     this.domBtnUp.classList.remove('btn-up_hide');
//   },
//   hide() {
//     this.domBtnUp.classList.add('btn-up_hide');
//   },
//     visibilityAndScroll() {
//     window.addEventListener('scroll', () => {
//       const scrollY = window.scrollY || document.documentElement.scrollTop;
//       if (scrollY > 800) {
//         this.show();
//       } else {
//         this.hide();
//       }
//     });
//     document.querySelector('.btn-up').onclick = () => {
//       window.scrollTo({
//           top: 0,
//           left: 0,
//           behavior: 'smooth',
//       });
//     }
//   }
// }
// btnUp.visibilityAndScroll();
const domBtnUp = document.querySelector('.btn-up');

// Кнопка Скрыть/Показать боковое меню


function visibilityBtn() {
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  if (scrollY > 800) {
    domBtnUp.classList.remove('btn-up_hide');
  } else {
    domBtnUp.classList.add('btn-up_hide');
  }
});
}
visibilityBtn();

domBtnUp.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

const btnSideBar = document.querySelector('.button-side-bar');
const sideBar = document.querySelector('.menu');

btnSideBar.addEventListener('click', () => {
  sideBar.classList.toggle('side-bar_hide');
  btnSideBar.classList.toggle('side-bar-active');
})

