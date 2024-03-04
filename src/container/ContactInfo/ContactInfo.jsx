import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IMaskInput } from 'react-imask';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { images } from '../../constants';
import './ContactInfo.css'

const ContactInfo = () => {
  const ref = useRef(null);
  const inputRef = useRef(null);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    if (userPhone.length === 11) {
      navigate("/success");
    }

  }

  return (
    <div >
      <h2 className='section__padding'>Наши контакты</h2>
      <div className='contactInfo-paging'>
        <div className='section__padding'>
          <div className='contactInfo-paging-container'>
            <h4>Москва</h4>
          </div>
        </div>
      </div>
      <div className='section__padding contactInfo-container'>
        <ul className='contactInfo-contactInfo_list'>
          <li>
            <div><img src={images.adressIcon} alt="adress" /></div>
            <div>
              <p className='bold'>Адрес:</p>
              <p>Москва,Новофилевский про-д, дом 48, -1 этаж. </p>
            </div>
          </li>
          <li>
            <div><img src={images.phoneIcon} alt="phone" /></div>
            <div>
              <p className='bold'>Телефон:</p>
              <p>+7 999 555 22 33</p>
            </div>
          </li>
          <li>
            <div><img src={images.emailIcon} alt="email" /></div>
            <div>
              <p className='bold'>Email:</p>
              <p className='underline'>Super-cars.ru</p>
            </div>
          </li>
          <li>
            <p>Мы в соц.сетях:</p>
            <div><a href="#"> <img src={images.vkLightIcon} alt="vk" /></a></div>
            <div><a href="#"><img src={images.odnoklassnikiIcon} alt="odnoklassniki" /></a></div>
          </li>
        </ul>
        <YMaps>
          <Map
            defaultState={{
              center: [55.751574, 37.573856],
              zoom: 10,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
            className='YandexMap'
          >
            <Placemark geometry={[55.684758, 37.738521]} />
          </Map>
        </YMaps>
      </div>
      <div className='section__padding'>
        <div className='flex__center'>
          <div className='contactInfo__contactForm flex__center'>
            <h2>У вас есть вопросы? Напишите нам!</h2>
            <p>Мы с радостью ответим на все интересующие вас вопросы.</p>
            <form className='contactForm' onSubmit={(e) => { handlesubmit(e) }}>
              <div className='contactForm-container'>
                <div className='contactForm-Input-container'>
                  <label htmlFor='userName-tradein'>Ваше имя</label>
                  <input
                    id='userName-tradein'
                    type='text'
                    role='textbox'
                    value={userName}
                    required
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className='contactForm-Input-container'>
                  <label htmlFor='userPhone-tradein'>Ваш номер телефона</label>
                  <IMaskInput
                    id='userPhone-tradein'
                    mask={'+{7}(000) 000-00-00'}
                    value={userPhone}
                    unmask={true}
                    ref={ref}
                    inputRef={inputRef}
                    minlength="17"
                    required
                    onAccept={(value) => { setUserPhone(value) }}
                  />
                </div>
              </div>
              <div>
                <button className={"btn-type1 btn-type1-black "} style={{ marginTop: '1rem' }}>
                  <p>Отправить</p>
                </button>
                <p>Нажимая кнопку “Отправить” я соглашаюсь с <Link to='/politics' className='underline'>политикой конфиденциальности</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


  )
}

export default ContactInfo