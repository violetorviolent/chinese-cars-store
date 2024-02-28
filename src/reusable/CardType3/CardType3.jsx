import { ButtonType3, SliderImagesType1, ColorOptions } from '..';

import "./CardType3.css";


const CardType3 = (props) => {return (
  <div className="cardType3">
    <div className='cardType3__header'>
      <div className="cardType3-head">
        <div className="cardType3-head_catch">хит</div>
        <ButtonType3 click={() => { console.log('clicked') }} />
      </div>
    </div>
    <SliderImagesType1 card={props.card} cardType ={props.cardType}/>
    <div className="cardType3-container">
      <div>
        <p className='p__carFormfactor' style={{ paddingBottom: '0.5rem' }}>Кроссовер</p>
        <p className='p__carPrice-Title' style={{ paddingBottom: '0.5rem' }}>GEELY Atlas NEW</p>
        {props.cardType === 'cardType3_1' && <p className='p__carCharacteristics'>GX 2.0 8AT (231 л.с.) 4WD</p>}
        {props.cardType === 'cardType3_2' && <ColorOptions colors={['red', 'blue', 'green', 'orange']}/>}
        <p className='p__carPrice-Title' style={{ paddingTop: '0.5rem', color: 'var(--color-accent)' }}>2 435 000 ₽ <span className='p__carPriceLineThrough'>3 800 699 ₽</span></p>
        {props.cardType === 'cardType3_1' &&  <p className='cardType3-monthlyPayment'>от 65 255 руб/мес.</p>}
      </div>
    </div>
    <a href='#' className='cardType3-btn' style={{ padding: props.cardType === 'cardType3_2' && '1.8rem'}} >
      Купить в кредит
      {props.cardType === 'cardType3_1' &&  <p className='cardType3-monthlyPayment'>от 65 255 руб/мес.</p>}
    </a>
  </div>
)
}

export default CardType3