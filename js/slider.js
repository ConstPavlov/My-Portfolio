// Слайдер для Ани

const slides = document.querySelectorAll('.slide')


function openSlide() {
  slides.forEach((elem) => {
    elem.onclick = () => {
      elem.classList.toggle('active');
    }
  })
}
openSlide()


