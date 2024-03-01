const category = {
    games: 'Игры',
    kino: 'Кино',
    curses: 'Курсы',
    socialSites: 'Соц-Сети',
    cryptoBurzy: 'Крипто-биржи'
}

const cardsData = [
    {
        src: './img/activities-img/cs-go-500.jpeg',
        id: 1,
        title: 'Counter-strike Global Offensive',
        desc: 'CS:GO (Counter-Strike: Global Offensive) - это один из самых популярных шутеров нашего времени.',
        params:{
            pastime: 'Отдых',
            category: category.games,
            personalRating: '7',
            country: 'Америка',
            cost: 'Бесплатно'
        },
        link: 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/',
        cardIco: './img/mini-ico/cs-go-mini.png',

    },
    {
        src: './img/activities-img/Kak-izbejat-nak-za-ub.webp',
        id: 2,
        title: 'Сериал "Как избежать наказания за убийство"',
        desc: '"Как избежать наказания за убийство" — американский телевизионный сериал производства Шонды Раймс',
        params:{
            pastime: 'Отдых',
            category: category.kino,
            personalRating: '6',
            country: 'Америка',
            cost: 'Бесплатно'
        },
        link: 'https://gidonline.io/film/kak-izbezhat-nakazaniya-za-ubijstvo/',
        cardIco: './img/mini-ico/play-mini.png',

    },
    {
        src: './img/activities-img/binance-logo.jpg',
        id: 3,
        title: 'Binance',
        desc: 'Криптовалютная биржа Binance — мы управляем крупнейшей в мире биржей по объему торгов биткоинами и альткоинами.',
        params:{
            pastime: 'Инвестиции',
            category: category.cryptoBurzy,
            personalRating: '8',
            country: 'Китай',
            cost: 'Не продаётся'
        },
        link: 'https://www.binance.com/ru',
        cardIco: './img/mini-ico/binance-mini.png',

    },
    {
        src: './img/activities-img/people_1_magnet_vinyl_square_front_white_700.jpeg',
        id: 4,
        title: 'Клинок рассекающий демонов',
        desc: 'Манга авторства Коёхару Готогэ, выпускавшаяся в журнале Weekly Shonen Jump издательства Shueisha с 15 февраля 2016 года по 18 мая 2020 года',
        params:{
            pastime: 'Отдых',
            category: category.kino,
            personalRating: '9',
            country: 'Япония',
            cost: 'Бесплатно'
        },
        link: 'https://animego.org/anime/klinok-rassekayuschiy-demonov-902',
        cardIco: './img/mini-ico/anime-go-mini.png',

    },
    {
        src: './img/activities-img/dota2.jpeg',
        id: 5,
        title: 'Dota 2',
        desc: 'CS:GO (Counter-Strike: Global Offensive) - это один из самых популярных шутеров нашего времени.',
        params:{
            pastime: 'Отдых',
            category: category.games,
            personalRating: '8',
            country: 'Америка',
            cost: 'Бесплатно'
        },
        link: 'https://www.dota2.com/home',
        cardIco: './img/mini-ico/dota2-mini.png',

    },
    {
        src: './img/activities-img/skillbox-logo.jpeg',
        id: 6,
        title: 'Skillbox',
        desc: '— российская интернет-компания, работающая в сфере онлайн-образования, основана в 2016 году, входит в образовательный холдинг Skillbox Holding Limited.',
        params:{
            pastime: 'Учеба',
            category: category.curses,
            personalRating: '5',
            country: 'Россия',
            cost: '30000₽'
        },
        link: 'https://skillbox.ru/',
        cardIco: './img/mini-ico/study-mini.png',

    },    {
        src: './img/activities-img/huobi-logo.webp',
        id: 7,
        title: 'Huobi Global',
        desc: 'Huobi — одна из ведущих криптобирж в мире. Здесь, на Huobi, вы можете быстро и легко покупать и продавать Биткоины и другие криптовалюты.',
        params:{
            pastime: 'Инвестиции',
            category: category.cryptoBurzy,
            personalRating: '9',
            country: 'Китай',
            cost: 'Не продаётся'
        },
        link: 'https://www.huobi.com/ru-ru/',
        cardIco: './img/activities-img/huobi-logo.webp',

    },
    {
        src: './img/activities-img/instagram-logo.jpg',
        id: 8,
        title: 'Instagram',
        desc: 'Instagram — американская социальная сеть для обмена фотографиями и видео, основанная Кевином Систромом и Майком Кригером.',
        params:{
            pastime: 'Отдых',
            category: category.socialSites,
            personalRating: '6',
            country: 'Америка',
            cost: 'Бесплатно'
        },
        link: 'https://instagram.com/ice.plasma?igshid=YmMyMTA2M2Y=',
        cardIco: './img/mini-ico/insta-mini.png',

    },
    {
        src: './img/activities-img/skyeng-logo.png',
        id: 9,
        title: 'Skyeng',
        desc: 'Skyeng — российская онлайн-школа по изучению английского языка. Обучение производит на учебной платформе Vimbox, а также при помощи мобильного приложения, расширений для браузера и обучающих рассылок.',
        params:{
            pastime: 'Учеба',
            category: category.curses,
            personalRating: '4',
            country: 'Россия',
            cost: '20000₽'
        },
        link: 'https://skyeng.ru/',
        cardIco: './img/mini-ico/study-mini.png',

    },
    {
        src: './img/activities-img/telegram-logo.jpg',
        id: 10,
        title: 'Telegram',
        desc: 'Telegram — кроссплатформенная система мгновенного обмена сообщениями с функциями обмениваться текстовыми, голосовыми и видеосообщениями, стикерами и фотографиями, файлами многих форматов.',
        params:{
            pastime: 'Отдых',
            category: category.socialSites,
            personalRating: '10',
            country: 'Германия',
            cost: 'Не продаётся'
        },
        link: 'https://web.telegram.org/',
        cardIco: './img/mini-ico/telegram-mini.png',

    },
    {
        src: './img/activities-img/the-sims-3.jpeg',
        id: 11,
        title: 'The Sims',
        desc: 'The Sims — серия компьютерных игр в жанре симулятор жизни, разработанная геймдизайнером Уиллом Райтом и такими компаниями как Maxis и The Sims Studio и изданная компанией Electronic Arts.',
        params:{
            pastime: 'Отдых',
            category: category.games,
            personalRating: '5',
            country: 'Китай',
            cost: 'Бесплатно'
        },
        link: 'https://www.thesims3.com/',
        cardIco: './img/mini-ico/sims-mini.png',

    },
    {
        src: './img/activities-img/geekbrains.png',
        id: 12,
        title: 'Geekbrains',
        desc: 'Крупнейший образовательный портал, входящий в состав Mail.ru Group. Все обучение проходит в удобном онлайн-формате.',
        params:{
            pastime: 'Учеба',
            category: category.curses,
            personalRating: '4',
            country: 'Россия',
            cost: '45000₽'
        },
        link: 'https://gb.ru/?utm_referrer=https%3A%2F%2Fwww.google.com%2F',
        cardIco: './img/mini-ico/study-mini.png',

    },
    {
        src: './img/activities-img/tik-tok-llogo.jpeg',
        id: 13,
        title: 'Tik Tok',
        desc: 'TikTok — сервис для создания и просмотра коротких видео, принадлежащий пекинской компании «ByteDance».',
        params:{
            pastime: 'Отдых',
            category: category.socialSites,
            personalRating: '5',
            country: 'Китай',
            cost: 'Бесплатно'
        },
        link: 'https://www.tiktok.com/',
        cardIco: './img/mini-ico/tik-tok-mini.png',

    },
    {
        src: './img/activities-img/marvel-square.webp',
        id: 13,
        title: 'Marvel',
        desc: 'Marvel Comics — торговая марка и главный актив Marvel Worldwide Inc. издающий комиксы. Подразделение компании Marvel Entertainment.',
        params:{
            pastime: 'Отдых',
            category: category.kino,
            personalRating: '10',
            country: 'Америка',
            cost: 'Бесплатно'
        },
        link: 'https://www.marvel.com/',
        cardIco: './img/mini-ico/chelovek-pauk-mini.png',

    },
    {
        src: './img/activities-img/lacasa-de-papel-square.jpeg',
        id: 13,
        title: 'Бумажный дом',
        desc: '«Бума́жный дом» — это испанский криминальный, драматический телесериал об ограблении, созданный Алексом Пиной.',
        params:{
            pastime: 'Отдых',
            category: category.kino,
            personalRating: '10',
            country: 'Испания',
            cost: 'Бесплатно'
        },
        link: 'https://gidonline.io/film/bumazhnyj-dom/',
        cardIco: './img/mini-ico/play-mini.png',

    },
    {
        src: './img/activities-img/ataka-titanov.jpeg',
        id: 14,
        title: 'Атака Титанов',
        desc: '«Атáка титáнов», — японская постапокалиптическая манга, написанная и иллюстрированная Хадзимэ Исаямой.',
        params:{
            pastime: 'Отдых',
            category: category.kino,
            personalRating: '10',
            country: 'Япония',
            cost: 'Бесплатно'
        },
        link: 'https://animego.online/63-ataka-titanov-v15-x2.html',
        cardIco: './img/mini-ico/anime-go-mini.png',

    },
    {
        src: './img/activities-img/puzzle-english.png',
        id: 15,
        title: 'Puzzle-english',
        desc: 'Puzzle English — онлайн-платформа для самостоятельного изучения английского языка.',
        params:{
            pastime: 'Учеба',
            category: category.curses,
            personalRating: '9',
            country: 'Россия',
            cost: '5000₽'
        },
        link: 'https://puzzle-english.com/',
        cardIco: './img/mini-ico/study-mini.png',

    },
    {
        src: './img/activities-img/gta-5.jpeg',
        id: 16,
        title: 'GTA V',
        desc: 'Grand Theft Auto V — компьютерная игра в жанре action-adventure с открытым миром, разработанная компанией Rockstar North и изданная компанией Rockstar Games.',
        params:{
            pastime: 'Отдых',
            category: category.games,
            personalRating: '8',
            country: 'Америка',
            cost: '4000₽'
        },
        link: 'https://www.rockstargames.com/gta-v',
        cardIco: './img/mini-ico/rockstar-mini.png',

    }
]