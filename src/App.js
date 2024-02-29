import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';


import { Catalog, ContactInfo, CreditPage, FavoriteCars, Home, LayoutApp, SpecificCar, SpecificCarModel, TradeInPage} from './container';
import './AppCss/variables.css';
import './AppCss/main.css';
import './AppCss/text.css';
import './AppCss/buttons.css';
import './AppCss/gridComponents.css';

import helpers from "./reusable/helpers";
import axios from './apis/availiableCars';



const Jokes = () => {

  const [test, error, loading, refetch] = helpers.useAxios({
      axiosInstance: axios,
      method: 'GET',
      url: '/',
      requestConfig: {}
  });

  return (
      <article>

          <h2>test</h2>

          {loading && <p>Loading...</p>}

          {!loading && error && <p className="errMsg">{error}</p>}

          {!loading && !error && test && <p>{test?.test}</p>}

          {!loading && !error && !test && <p>No dad joke to display</p>}

          <button onClick={() => refetch()}>refetch</button>
      </article>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayoutApp/>}>
      <Route index element={<Home/>}/>
      <Route path='cars' element={<Catalog/>}/>
      <Route path='cars/:brand/:model/' element={<SpecificCarModel/>}/>
      <Route path='cars/:brand/:model/:id' element={<SpecificCar/>}/>
      <Route path='credit/' element={<CreditPage/>}/>
      <Route path='trade-in/' element={<TradeInPage/>}/>
      <Route path='contact/' element={<ContactInfo/>}/>
      <Route path='favorite/' element={<FavoriteCars/>}/>
    </Route>
  )
)


function App() {
  return (
    <div className="App">
      <Jokes/>
      {/* 
      <p> ЦВЕТ ВЫДЕЛЕНИЯ ТЕКСТА</p>
      <p> HOVERs</p>
      <p> АНИМАЦИИ НА МАУНТ И АНМАУНТ</p>
      <p> ВЫЧИТКА ТЕКСТА</p>
      <p> ВЫКИНУТЬ ЛИШНИЕ ПЕРЕМЕННЫЕ</p>
      <p> ССЫЛКИ ПОДВЯЗАТЬ</p>
      <p> ССЫЛКА ПЕРСОНАЛЬНЫЕ ДАННЫЕ</p>
      <p> СВЯЗАТЬ С БЭКЕНДОМ</p>
      <p> ВОЗВРАЩАТЬСЯ НА ТО ЖЕ МЕСТО СКРОЛЛА</p>
      <p> СКЕЛЕТНАЯ ЗАГРУЗКА КАРТОЧЕК</p>
      <p> ЭКРАН ПРЕДПОКАЗА ПОКА РЕАКТ СТАРТУЕТ</p> 
      <p> СТРАНИЦА ВЫКУПА ЭТО...?</p> 
      <p> ВООБЩЕ ВСЕ ССЫЛКИ ФУТЕРА, ЛОЛ...?</p>
      <p> Формочки откидывают на саксесс и присылают что-то на бэк</p> 
      <p> рекламные скрипты </p> 
      <p> найти костыли на ввод телефона </p> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
