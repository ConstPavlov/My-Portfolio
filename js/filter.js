const domElements = {
    results: document.getElementById('results'),
    input: document.getElementById('search-input'),
    button: document.getElementById('search-button'),
    filters: {
        pastime: document.getElementById('filter-pastime'),
        category: document.getElementById('filter-category'),
        personalRating: document.getElementById('filter-personalRating'),
        country: document.getElementById('filter-country'),
        cost: document.getElementById('filter-cost')
    }
}

function creatingCards(cardsData) {
    const cards = [];
    for (let i = 0;i < cardsData.length;i++) {
        cards.push(`
    <div class="card">
        <img src="${cardsData[i].src}" class="img__card" alt="cs go">
        <div class="card__content">
            <div id="title" class="card__title">${cardsData[i].title}</div>
            <div id="desc" class="card__desc">${cardsData[i].desc}</div>
            <div class="card__params">
                <label>Вид деятельности:</label>
                <div id="pastime">${cardsData[i].params.pastime}</div>
            </div>
            <div class="card__params">
                <label>Классификация:</label>
                <div id="category" >${cardsData[i].params.category}</div>
            </div>
            <div class="card__params">
                <label>Личный рейтинг:</label>
                <div id="personalRating" >${cardsData[i].params.personalRating}</div>
            </div>
            <div class="card__footer">
                <div class="card__params">
                    <label>Страна:</label>
                    <div id="country" >${cardsData[i].params.country}</div>
                </div>
                <div class="card__params">
                    <label>Цена:</label>
                    <div id="cost" >${cardsData[i].params.cost}</div>
                </div>
            </div>
            <div class="activities-ico">
                <a class="activities-ico-link" href="${cardsData[i].link}">
                <img src="${cardsData[i].cardIco}" class="activities-ico-img" alt="cs go">
                </a>
            </div>
        </div>
    </div>`)
    }   return cards
}
const cardssArr = creatingCards(cardsData)

domElements.results.innerHTML = cardssArr.join('')

// Функция фильрацции по нназванию

function filter() {
    const rgxp = new RegExp(searchValue, 'i')
    let filteredCardsData = cardsData.filter(card => {
        if (rgxp.test(card.title)) {
            return true;
        } else {
            return false;
        }
    })
    const newFilterData = creatingCards(filteredCardsData)
    domElements.results.innerHTML = newFilterData.join('')
}
let searchValue = ''

domElements.input.oninput = (event) => {
    searchValue = event.target.value
    filter()
}

domElements.button.addEventListener("click", function() {
    filter()
})


// Фильтрация по данным карточек

// Функция фильрации карточек по спискам параметров
const filtersType = [
    'pastime',
    'category',
    'personalRating',
    'country',
    'cost'
]

function filterSelect(type) {
    
domElements.filters[type].onchange = (event) => {
    const value = event.target.value
    const filteredCards = cardsData.filter(card => {
        const reg = new RegExp(value)
        if (reg.test(card.params[type])) {
            return true;
        } else {
            return false;
        }
    })
    const fullFilteredCards =  checkOtherFilters(filtersType, filteredCards)
    const filteredCardsHTML = creatingCards(fullFilteredCards)
    domElements.results.innerHTML = filteredCardsHTML.join('')
 }
}
// Отслеживание изменений фильтров и фильтрации
filtersType.forEach(type => filterSelect(type))

// Проверка и фильрация по значением соседних фильтров
function checkOtherFilters(filtersType, filteredCards)  {
    let updateFillteredCards = filteredCards


    filtersType.forEach(type => {
        const value = domElements.filters[type].value
        const reg = new RegExp(value)
        const newFillteredCards = updateFillteredCards.filter(card => {
            if (reg.test(card.params[type])) {
                return  true;
            } else {
                return false;
            }
        }) 
        updateFillteredCards = newFillteredCards
    })
    return updateFillteredCards
}

