import images from './images';


const HeaderHome = [
  {
    imgUrl: images.HeaderHome_1,
    h1: <>купить новый<br/>haval dargo</>,
    p: 'Максимальная скидка, которую может предоставить дилер. Подробности узнавайте по телефону.',
    price:'2 499 000 ₽',
    prevPrice:'3 689 000 ₽'
  },
  {
    imgUrl: images.HeaderHome_2,
    h1: <>купить новый <br/>CHERY Tiggo 8</>,
    p: 'Максимальная скидка, которую может предоставить дилер. Подробности узнавайте по телефону.',
    price:'2 499 000 ₽',
    prevPrice:'3 689 000 ₽'
  },
  {
    imgUrl: images.HeaderHome_3,
    h1: <>купить новый <br/>changan uni-k</>,
    p: 'Максимальная скидка, которую может предоставить дилер. Подробности узнавайте по телефону.',
    price:'2 499 000 ₽',
    prevPrice:'3 689 000 ₽'
  },
  {
    imgUrl: images.HeaderHome_4,
    h1: <>купить новый <br/>GEELY Monjaro</>,
    p: 'Максимальная скидка, которую может предоставить дилер. Подробности узнавайте по телефону.',
    price:'2 499 000 ₽',
    prevPrice:'3 689 000 ₽'
  }
]

const OurAdvantages = [
  {
    imgUrl: images.ourAdvantages1,
    h: 'Профессиональные менеджеры',
    p: 'Команда “SUPER CARS” держит в своем штате только опытных сотрудников.',
  },
  {
    imgUrl: images.ourAdvantages2,
    h: 'все авто в наличии или под заказ',
    p: 'Большой ассортимент различных марок и брендов у нас в салоне “SUPER CARS”.',
  },
  {
    imgUrl: images.ourAdvantages3,
    h: 'Эксклюзивный выбор',
    p: 'Команда “SUPER CARS” держит в своем штате только опытных сотрудников.',
  }
]

const RecomendationsSlider = [
  {
    id: 1,
    url: images.RecomendationsSlider_1,
    headCatch: '#автокредит',
    h: 'Оформите выгодный автокредит от 4,9% на автомобиль своей мечты и езди н а нем уже завтра',
    p: 'С радостью сообщаем вам о расширении ассортимента.',
    date: '27 Января 2024 г.'
  },
  {
    id: 2,
    url: images.RecomendationsSlider_2,
    headCatch: '#выкуп',
    h: 'Выгодно выкуп Ваш авто и заберем его уже сегодня. Оставляйте зявку',
    p: 'С радостью сообщаем вам о расширении ассортимента.',
    date: '27 Января 2024 г.'
  },
  {
    id: 3,
    url: images.RecomendationsSlider_3,
    headCatch: '#трейд-ин',
    h: 'Сдай старое авто и получи скидку до 250 000 ₽ на новое. Выгодно пользуйся!',
    p: 'С радостью сообщаем вам о расширении ассортимента.',
    date: '27 Января 2024 г.'
  }
]

const tradeIn_1 = {
 title:'Преимущества трейд-ин:',
 subtitle:'Почему мы уверены в том, что для Вас это подойдет?',
 info:[
    {
      title: 'Диагностика за наш счет:',
      p:'Дилер китайских брендов «Китайские автомобили» предоставляет каждому клиенту услугу бесплатной диагностики старого авто. Если у Вас возникают такие вопросы, как «Не слишком ли в плохом состоянии мое авто?» и «Какие машины берут в Трейд-Ин?», то Вам не о чем беспокоиться, – мы берем все.'
    },
    {
      title: 'Гарантированная скидка:',
      p:'Каждому клиенту, воспользовавшемуся данной услугой, автосалон дает скидку на любое новое авто в размере 10%. Данная скидка может увеличиться благодаря использованию других программ (автокредита, госпрограммы и др.)..'
    },
    {
      title: 'Старое авто в зачет стоимости нового авто:',
      p:'Благодаря данной опции можно значительно снизить стоимость приобретаемого нового автомобиля. Конечно, степень снижения цены не ограниченна. При этом опция Trade-IN согласуется с вышеупомянутой скидкой, за счет чего условия становятся еще более выгодными.'
    },
    {
      title: 'Старое авто в зачет первоначального взноса:',
      p:'Если у Вас отсутствуют финансовые средства для внесения первоначального взноса по автокредиту за новое авто, то реализация Вашего старой машины через Трейд-Ин станет отличным решением. Почти каждому нашему клиенту вырученной суммы более чем хватает для внесения первого взноса.'
    },
  ]
}

const tradeIn_2 = {
  title:'Как происходит покупка авто по Трейд-Ин?',
  info:[
     {
       title: 'Как работает Трейд-Ин в автосалонах?',
       p:'Процедура достаточно простая и занимает не более 30 минут. Вы приезжаете на своем автомобиле в автосалон, мы проводим бесплатную диагностику, происходит оценка авто, после чего (в случае Вашего согласия) Вам выплачивается вся сумма целиком, либо урезается цена на желаемую модель.'
     },
     {
       title: 'Какую машину можно сдать по Трейд-Ин?',
       p:'Вы можете реализовать в нашем автосалоне абсолютно любой автомобиль: ни год выпуска, ни состояние, ни марка авто не являются препятствиями для оформления данной услуги. Но необходимо, чтобы именно Вы являлись владельцем продаваемой машины и могли подтвердить это документально.'
     },
     {
       title: 'Как оценивают автомобиль в Трейд-Ин в автосалоне?',
       p:'Дилер «Китайские автомобили» гарантирует, что Ваш старый автомобиль будет оценен согласно средней цене по вторичному рынку. Среди всех дилеров китайских авто в Москве мы подходим к выкупу старых автомобилей наиболее добросовестно.'
     },
     {
       title: 'Какие автомобили можно купить в Трейд-Ин?',
       p:'Ответ на этот вопрос, наверное, очевиден, но все же уточним, что через Trade-IN Вы можете приобрести абсолютно любую модель. Например, это могут быть  три кита китайского автопрома, как Geely Atlas, Chery Tiggo 4 и Haval F7, или такие новички на российском рынке, как седан JAC J7, пикап JAC T6 и кроссовер JAC S7, и т.д.'
     },
   ]
 }

 const credit = {
  title:'Наши преимущества:',
  subtitle:'Почему мы уверены в том, что для Вас это подойдет?',
  info:[
     {
       title: 'Сотрудничество со многими банками в РФ:',
       p:'Это значительно увеличивает вероятность в получении кредита! 96% наших клиентов получают одобрение.'
     },
     {
      title: 'Быстрый процесс оформленя:',
      p:'Процесс оформления максимально прост: всего два документа - паспорт гражданина РФ и водительское удостоверение.'
    },
    {
      title: 'Быстрое принятие решения:',
      p:'Банки принимают решение всего за 30 минут.'
    },
    {
      title: 'Выгодная ставка по автокредиту:',
      p:'Автокредит выгоден: процентные ставки начинаются от 4.9%.'
    },
   ]
 }

const cardsType1 = [
  {
    id: 4,
    url: images.placeholderCardType1,
  },
  {
    id: 5,
    url: images.placeholderCardType1,
  },
  {
    id: 6,
    url: images.placeholderCardType1,
  },
  {
    id: 7,
    url: images.placeholderCardType1,
  },
  {
    id: 8,
    url: images.placeholderCardType1,
  }
]

const carNamesList = [
  {
    title: 'Сhangan',
    url: images.placeholderCarLogo,
  },
  {
    title: 'title2',
    url: images.placeholderCarLogo,
  },
  {
    title: 'title3',
    url: images.placeholderCarLogo,
  },
  {
    title: 'title4',
    url: images.placeholderCarLogo,
  },
  {
    title: 'title5',
    url: images.placeholderCarLogo,
  },
  {
    title: 'title6',
    url: images.placeholderCarLogo,
  },
  {
    title: 'title7',
    url: images.placeholderCarLogo,
  },
  {
    title: 'title8',
    url: images.placeholderCarLogo,
  },
  {
    title: 'title9',
    url: images.placeholderCarLogo,
  }
]

const sortOptions = [
  {
    title: 'Цена по возрастанию'
  },
  {
    title: 'Цена по убыванию'
  },
  {
    title: 'По году: новее'
  },
  {
    title: 'По году: старше'
  },
  {
    title: 'По дате добавления'
  },
  {
    title: 'По пробегу'
  }
]


const cardsType3 = [
    {
      id: 9,
      images: [
        images.placeholderCardType3_1,
        images.placeholderCardType3_2,
        images.placeholderCardType3_3,
      ],
    },
    {
      id: 10,
      images: [
        images.placeholderCardType3_1,
        images.placeholderCardType3_2,
        images.placeholderCardType3_3,
      ],
    },
    {
      id: 11,
      images: [
        images.placeholderCardType3_1,
        images.placeholderCardType3_2,
        images.placeholderCardType3_3,
      ],
    },
    {
      id: 12,
      images: [
        images.placeholderCardType3_1,
        images.placeholderCardType3_2,
        images.placeholderCardType3_3,
      ],
    },
    {
      id: 13,
      images: [
        images.placeholderCardType3_1,
        images.placeholderCardType3_2,
        images.placeholderCardType3_3,
      ],
    }
]

const cardsType4 = [
  {
    id: 14,
    images: [
      images.placeholderCardType3_1,
      images.placeholderCardType3_2,
      images.placeholderCardType3_3,
    ],
  },
  {
    id: 15,
    images: [
      images.placeholderCardType3_1,
      images.placeholderCardType3_2,
      images.placeholderCardType3_3,
    ],
  },
  {
    id: 16,
    images: [
      images.placeholderCardType3_1,
      images.placeholderCardType3_2,
      images.placeholderCardType3_3,
    ],
  },
  {
    id: 17,
    images: [
      images.placeholderCardType3_1,
      images.placeholderCardType3_2,
      images.placeholderCardType3_3,
    ],
  },
  {
    id: 18,
    images: [
      images.placeholderCardType3_1,
      images.placeholderCardType3_2,
      images.placeholderCardType3_3,
    ],
  }
]

export default { HeaderHome, OurAdvantages, RecomendationsSlider, tradeIn_1, tradeIn_2, credit, sortOptions, cardsType1, cardsType3, cardsType4, carNamesList, };