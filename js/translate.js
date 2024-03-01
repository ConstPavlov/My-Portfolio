const itemsLang = document.querySelectorAll('.new-select__item');
let language;
const allLang = ['ru', 'en'];
itemsLang.forEach((item) =>{
  item.addEventListener('click', changeURLLanguage);
})



function changeURLLanguage(e) {

  language = e.target.parentElement.dataset.lng;

  location.href = window.location.pathname + '#'+language;
  // location.reload();

  const newSelect = document.querySelector('.new-select');
  if (language == 'ru'){
    newSelect.style.background = `url(../img/Flag_of_Russia.svg.png) center / cover`;
  }  else {
    newSelect.style.background = `url(../img/flag_en_big.jpeg) center / cover`;
  }
  changeLanguage();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  document.querySelector('title').innerHTML = langArr['head__title'][hash];

  // document.querySelector('.lng-hl-1').innerHTML = langArr['hl-1'][hash];

  for (let key in langArr) {
    document.querySelector('.lng-' + key).innerHTML = langArr[key][hash];
  }



}




