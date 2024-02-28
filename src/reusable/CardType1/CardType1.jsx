import { ButtonType3, ColorOptions } from '../';
import "./CardType1.css";

const CardType1 = (props) => {
  
  return (
    <div className="cardType1 sliderType1-slide">
      <div className="cardType1-head">
        <div className="cardType1-head_discount">-20%</div>
        <ButtonType3 click = {()=>{console.log('clicked')}}/>
      </div>
      <div className="cardType1-container">
        <img src={props.card?.url} alt='car' />
        <div>
          <p className='p__carFormfactor' style={{paddingBottom:'1rem'}}>Кроссовер</p>
          <p className='p__carTitle' style={{paddingBottom:'1rem'}}>GEELY Atlas NEW</p>
          <ColorOptions colors={['red', 'blue', 'green', 'orange']}/>
          <p className='p__carPrice-Title' style={{paddingTop:'1rem'}}>2 435 000 ₽ <span className='p__carPriceLineThrough'>3 800 699 ₽</span></p>
        </div>
      </div>
    </div>
  )
}

export default CardType1