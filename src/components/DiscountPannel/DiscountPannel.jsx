import { useState } from 'react';
import Switch from "react-switch";
import './DiscountPannel.css'

const DiscountPannel = () => {
  const [checked_1, setChecked_1] = useState(true);
  const [checked_2, setChecked_2] = useState(true);
  const [checked_3, setChecked_3] = useState(true);

  return (
    <div className='section__padding'>
      <div className='discountPanel'>
        <div className='discountPanel_unit'>
          <div className='discountPanel_unit-head' style={{ paddingBottom: '0.5rem' }}>
            <Switch
              onChange={() => setChecked_1(!checked_1)}
              checked={checked_1}
              onHandleColor="#ffffff"
              onColor="#FF6915"
              offColor="#999999"
              handleDiameter={18}
              uncheckedIcon={false}
              checkedIcon={false}
              height={23}
              width={41}
            />
            <p className='colorAccent'>- 70 000 ₽</p>
          </div>
          <p className='uppercase bold uppercase'>TRADE-IN +БОНУС</p>
          <p>Цена Вашего авто и доп. скидка</p>
        </div>
        <div className='discountPanel_unit'>
          <div className='discountPanel_unit-head' style={{ paddingBottom: '0.5rem' }}>
          <Switch
              onChange={() => setChecked_2(!checked_2)}
              checked={checked_2}
              onHandleColor="#ffffff"
              onColor="#FF6915"
              offColor="#999999"
              handleDiameter={18}
              uncheckedIcon={false}
              checkedIcon={false}
              height={23}
              width={41}
            />
            <p className='colorAccent'>- 70 000 ₽</p>
          </div>
          <p className='uppercase bold uppercase'>Оформление кредита</p>
          <p>Ставка от 4.9% при взносе от 10%</p>
        </div>
        <div className='discountPanel_unit'>
          <div className='discountPanel_unit-head' style={{ paddingBottom: '0.5rem' }}>
          <Switch
              onChange={() => setChecked_3(!checked_3)}
              checked={checked_3}
              onHandleColor="#ffffff"
              onColor="#FF6915"
              offColor="#999999"
              handleDiameter={18}
              uncheckedIcon={false}
              checkedIcon={false}
              height={23}
              width={41}
            />
            <p className='colorAccent'>- 70 000 ₽</p>
          </div>
          <p className='uppercase bold uppercase'>госпрограмм</p>
          <p>Скидка 10% по программам</p>
        </div>
        <div>
          <div className='discountPanel_unit'>
            <div className='discountPanel_unit-head' >
              <h4 className='colorAccent'>Общая скидка:</h4>
              <p className='colorAccent'>- 70 000 ₽</p>
            </div>
          </div>
          <a href='#' className="btn-type1 btn-type1-orange" style={{ marginTop: '1rem' }}>
            <div className='btn-type1-container'>
              <p>Зафиксировать условия</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default DiscountPannel