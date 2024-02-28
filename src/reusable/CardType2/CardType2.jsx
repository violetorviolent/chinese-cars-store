import { images } from '../../constants';
import "./CardType2.css";

const CardType2 = (props) => {

  return (
    <div className="cardType2 sliderType1-slide" style={{ backgroundImage: `url(${props.card.url})` }}>
      <div className="cardType2-colorOverlay">
        <div className='cardType2-head'>
          <p className="cardType2-head-catch">{props.card.headCatch}</p>
          <p className="cardType2-h">{props.card.h}</p>
        </div>
        <div className="cardType2-p">
          <img src={images.plusIcon} alt="great news" />
          <p>{props.card.p}</p>
        </div>
        <div className='cardType2-footer'>
          <a href="#">Подробнее</a>
          <p className="cardType2-date">{props.card.date}</p>
        </div>
      </div>

    </div>
  )
}

export default CardType2