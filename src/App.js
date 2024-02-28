import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Catalog, ContactInfo, CreditPage, FavoriteCars, Footer, Home, Navbar, ScrollTop, SpecificCar, SpecificCarModel, TradeInPage} from './container';
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
      <p> СВЯЗАТЬ С БЭКЕНДОМ</p>
      <p> ВОЗВРАЩАТЬСЯ НА ТО ЖЕ МЕСТО СКРОЛЛА</p>
      <p> СКЕЛЕТНАЯ ЗАГРУЗКА КАРТОЧЕК</p>
      <p> ЭКРАН ПРЕДПОКАЗА ПОКА РЕАКТ СТАРТУЕТ</p> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
      </Routes>
    </BrowserRouter> */}
      <Navbar/>
      <Home/>
      <Catalog/>
      <SpecificCarModel/>
      <SpecificCar/>
      <CreditPage/>
      <TradeInPage/>
      <FavoriteCars/>
      <ContactInfo/> 
      <ScrollTop/>
      <Footer/>
    </div>
  );
}

export default App;
