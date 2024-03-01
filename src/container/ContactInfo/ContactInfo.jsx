import { YMaps, Map } from '@pbe/react-yandex-maps';
import { images } from '../../constants';
import './ContactInfo.css'

const ContactInfo = () => {
  const test = 902;
  const test2 = 509;
  return (
    <YMaps>
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
          <div><img src={images.odnoklassnikiIcon} alt="adress" /></div>
            <div>
              <p className='bold'>Адрес:</p>
              <p>Москва,Новофилевский про-д, дом 48, -1 этаж. </p>
            </div>
          </li>
          <li>
          <div><img src={images.odnoklassnikiIcon} alt="phone" /></div>
            <div>
              <p className='bold'>Телефон:</p>
              <p>+7 999 555 22 33</p>
            </div>
          </li>
          <li>
          <div><img src={images.odnoklassnikiIcon} alt="email" /></div>
            <div>
              <p className='bold'>Email:</p>
              <p className='underline'>Super-cars.ru</p>
            </div>
          </li>
          <li>
            <p>Мы в соц.сетях:</p>
            <div><a href="#"> <img src={images.vkIcon} alt="vk" /></a></div>
            <div><a href="#"><img src={images.odnoklassnikiIcon} alt="odnoklassniki" /></a></div>
          </li>
        </ul>
        <div>
        <Map 
        defaultState={{ center: [55.75, 37.57], zoom: 15 }}
        width={test}
        height={test2}/>
        </div>
      </div>

    </div>
  </YMaps>
    
  )
}

export default ContactInfo