import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { images, data } from '../../constants';
import { DropdownType1 } from '../../reusable';
import './Navbar.css';
import './MenuOverlay.css';
import './Search.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  toggleMenu ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal');

  const Search = () => {
    const [carCount, setCarCount] = useState('');
    const [carName, setCarName] = useState('Марка');

    return (
      <div className='app__navbar-search slide-down'>
        <p>Найти марку авто</p>
        <DropdownType1
          setCarCount={setCarCount}
          list={data.carNamesList}
          title={carName}
          dropdownType={'DropdownType1_1'}
          setTitle={setCarName} />
        <button onClick={() => { setToggleSearch(false); setCarName('Марка') }}>
          {carName === 'Марка' && <p>Поиск</p>}
          {carName !== 'Марка' && <p>Найдено: {carCount} авто</p>}
        </button>
      </div>
    )
  }

  const MenuOverlay = () => {
    return (
      <div className='app__navbar-overlayMenu '>
        <div className='slide-down'>
          <div className='app__navbar-overlayMenu__bigScreen section__padding '>
            <div className='app__navbar-overlayMenu__bigScreen-catalog'>
              <div className='app__navbar-overlayMenu__bigScreen-catalogClose' onClick={() => { setToggleMenu(false) }}>
                <p>Каталог</p>
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.35355 0.646447C4.15829 0.451184 3.84171 0.451184 3.64645 0.646447L0.464466 3.82843C0.269204 4.02369 0.269204 4.34027 0.464466 4.53553C0.659728 4.7308 0.976311 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646447ZM4.5 2L4.5 1L3.5 1L3.5 2L4.5 2Z" fill="currentColor" />
                </svg>
              </div>
              <h4>Марки авто:</h4>
              <br />
              <div className='app__navbar-overlayMenu__bigScreen-catalog__carnames'>
                {data.carNamesList.map((card) => {
                  return (
                    <Link to={`cars/${card.title}/${card.title}`} onClick={() => { setToggleMenu(false) }} key={card.title} >
                      {card.title}
                    </Link>
                  )
                })}
              </div>
              <br />
              <h4>Популярные модели:</h4>
              <br />
              <div className='app__navbar-overlayMenu__bigScreen-catalog__carnames'>
                {data.carNamesList.map((card) => {
                  return (
                    <Link to={`cars/${card.title}/${card.title}`} onClick={() => { setToggleMenu(false) }} key={card.title} >
                      {card.title}
                    </Link>
                  )
                })}
              </div>
              <br />
              <a href="#" className="btn-type1 btn-type1-orange" style={{ marginTop: '1rem' }} onClick={() => { setToggleMenu(false) }}>
                <div className='btn-type1-container'>
                  <p>Подробнее</p>
                  <div><img src={images.arrowIcon} alt="view more" /></div>
                </div>
              </a>
            </div>
            <div className='app__navbar-overlayMenu__bigScreen-banner'
              style={{ backgroundImage: `url(${images.navBanner})` }}
              href="#" onClick={() => { setToggleMenu(false) }} >
              <h3>EXEED СО СКИДКОЙ 40%<br />ТОЛЬКО ДО 20.09.2024 г.</h3>
              <p>Перейти в каталог</p>
            </div>
          </div>
          <ul className='app__navbar-overlayMenu__smallScreen section__padding'>
            <li><Link to='/' onClick={() => { setToggleMenu(false) }}>Горячие предложения</Link></li>
            <li><Link to='cars' onClick={() => { setToggleMenu(false) }}>Автомобили</Link></li>
            <li><Link to='trade-in' onClick={() => { setToggleMenu(false) }}>TRADE-IN</Link></li>
            <li><Link to='credit' onClick={() => { setToggleMenu(false) }}>В кредит</Link></li>
            <li><Link to='contact' onClick={() => { setToggleMenu(false) }}>Контакты</Link></li>
          </ul>
        </div>
        <div style={{ width: '100%', height: '100vh' }} onClick={() => { setToggleMenu(false) }}></div>
      </div >
    )
  }

  return (
    < nav >
      <div className='flex__center app__navbar section__padding-noY'>
        <div className='app__navbar-smallscreen app__navbar-menuIcon' onClick={() => { setToggleMenu(!toggleMenu); setToggleSearch(false) }} >
          <svg width="36" height="11" viewBox="0 0 36 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="36" y1="1.5" x2="11" y2="1.5" stroke="currentColor" stroke-width="2" />
            <line x1="36" y1="9.5" x2="-8.74228e-08" y2="9.5" stroke="currentColor" stroke-width="2" />
          </svg>
        </div>
        <div className='app__navbar-logo'>
          <Link to='/' onClick={() => { setToggleMenu(false) }}><img src={images.logoNavIcon} alt="logo" /></Link>
        </div>
        <ul className='app__navbar-links'>
          <li>
            <div onClick={() => { setToggleMenu(!toggleMenu); setToggleSearch(false) }} >
              <svg style={{ marginRight: '1rem' }} width="36" height="11" viewBox="0 0 36 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="36" y1="1.5" x2="11" y2="1.5" stroke="currentColor" stroke-width="2" />
                <line x1="36" y1="9.5" x2="-8.74228e-08" y2="9.5" stroke="currentColor" stroke-width="2" />
              </svg>
              Каталог
            </div>
          </li>
          <li><NavLink to='/' className={({ isActive}) => isActive ? "activeNavLink" : "" } onClick={() => { setToggleMenu(false) }}>Горячие предложения</NavLink></li>
          <li><NavLink to='cars' className={({ isActive }) =>  isActive ? "activeNavLink" : "" } onClick={() => { setToggleMenu(false) }}>Автомобили</NavLink></li>
          <li><NavLink to='trade-in' className={({ isActive }) => isActive ? "activeNavLink" : ""} onClick={() => { setToggleMenu(false) }}> TRADE-IN</NavLink></li>
          <li><NavLink to='credit' className={({ isActive }) => isActive ? "activeNavLink" : ""}  onClick={() => { setToggleMenu(false) }}>В кредит</NavLink></li>
          <li><NavLink to='contact' className={({ isActive }) =>isActive ? "activeNavLink" : ""}onClick={() => { setToggleMenu(false) }}>Контакты</NavLink></li>
        </ul>
        <div className='app__navbar-iconsContainer'>
          <div className='flex__center app__navbar-icon ' onClick={() => { setToggleSearch(true); setToggleMenu(false); }} >
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 14.9646L11.6167 11.5812M13.4444 7.18686C13.4444 10.6233 10.6586 13.4091 7.22221 13.4091C3.78578 13.4091 1 10.6233 1 7.18686C1 3.7504 3.78578 0.9646 7.22221 0.9646C10.6586 0.9646 13.4444 3.7504 13.4444 7.18686Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className=' flex__center app__navbar-icon' style={{ position: 'relative' }}>
            <Link to='favorite' onClick={() => { setToggleMenu(false) }}>
              <svg width="22" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.1754 2.76392C21.5989 2.20482 20.9139 1.7612 20.1596 1.45851C19.4054 1.15581 18.5968 1 17.7801 1C16.9634 1 16.1548 1.15581 15.4005 1.45851C14.6463 1.7612 13.9613 2.20482 13.3848 2.76392L12.5 3.63019L11.6152 2.76392C11.0387 2.20482 10.3537 1.7612 9.59948 1.45851C8.84524 1.15581 8.0366 1 7.21992 1C6.40324 1 5.5946 1.15581 4.84036 1.45851C4.08612 1.7612 3.40112 2.20482 2.82464 2.76392C0.388567 5.1184 0.239185 9.09435 3.30726 12.1152L12.5 21L21.6927 12.1152C24.7608 9.09435 24.6114 5.1184 22.1754 2.76392Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className='favoriteAmount'>3</div>
          </div>
        </div>
      </div>

      {toggleSearch && <Search />}

      {toggleMenu && <MenuOverlay />}

    </nav>
  )
}

export default Navbar