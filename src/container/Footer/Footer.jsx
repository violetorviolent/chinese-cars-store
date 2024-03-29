import { Link } from 'react-router-dom';
import {images} from '../../constants';
import './Footer.css'

const Footer = () => {
  const today = new Date();


  return (
    <footer>
      <div className='section__padding footer__main'>
        <div className='footer__main-logoSocialMedia'>
          <a href="#"><img src={images.logoFooterIcon} alt="internet car store" /></a>
          <div className='footer__main-SocialMedia-container'>
            <a href="#"><img src={images.vkIcon} alt="vk" /></a>
            <a href="#"><img src={images.odnoklassnikiIcon} alt="odnoklassniki" /></a>
          </div>
        </div>
        <div>
          <h5 className='uppercase'>ГЛАВНАЯ</h5>
          <a href="#">Трейд-ин</a>
          <a href="#">Выкуп</a>
          <a href="#">Автокредит</a>
          <a href="#">Горячие предложения</a>
          <a href="#">Контакты</a>
        </div>
        <div>
          <h5 className='uppercase'>АВТО В НАЛИЧИИ</h5>
          <a href="#">Все авто</a>
          <a href="#">Авто под такси</a>
          <a href="#">Китайские авто</a>
          <a href="#">Скидки</a>
        </div>
        <div>
          <h5 className='uppercase'>Магазин</h5>
          <a href="#">Сравнение</a>
          <a href="#">Избранное</a>
        </div>
      </div>
      <div className='section__padding footer__footer'>
        <div><p>© {today.getFullYear()} - SuperCars - Интернет-магазин автомобилей</p></div>
        <div><Link to='politics'>Политика конфиденциальности</Link></div>
      </div>
    </footer>
  )
}

export default Footer