import { useState, useRef } from 'react';
import { IMaskInput } from 'react-imask';
import { images } from '../../constants';
import './TradeInForm.css';

const TradeInForm = () => {
  const ref = useRef(null);
  const inputRef = useRef(null);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [checked, setChecked] = useState(true);

  const handlesubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='section__padding'>
      <form className='tradeInForm' onSubmit={(e) => { handlesubmit(e) }}>
        <p className='bold'>Введите данные автомобиля</p>
        <div className='tradeInForm-Input-container'>
          <label htmlFor='brand-tradein'>Марка <span className='colorAccent'>*</span></label>
          <input
            id='brand-tradein'
            type='text'
            role='textbox'
            placeholder='Введите данные...'
            value={brand}
            required
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className='tradeInForm-Input-container'>
          <label htmlFor='model-tradein'>Модель <span className='colorAccent'>*</span></label>
          <input
            id='model-tradein'
            type='text'
            role='textbox'
            placeholder='Введите данные...'
            value={model}
            required
            onChange={(e) => setModel(e.target.value)}
          />
        </div>
        <div className='tradeInForm-Input-container'>
          <label htmlFor='year-tradein'>Год выпуска <span className='colorAccent'>*</span></label>
          <input
            id='year-tradein'
            type='text'
            role='textbox'
            placeholder='Введите данные...'
            value={year}
            required
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div>
          <p className='bold'>Ваши данные</p>
          <div className='tradeInForm-Input-container'>
            <label htmlFor='userName-tradein'>ФИО <span className='colorAccent'>*</span></label>
            <input
              id='userName-tradein'
              type='text'
              role='textbox'
              placeholder='Введите данные...'
              value={userName}
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className='tradeInForm-Input-container'>
            <label htmlFor='userPhone-tradein'>Номер телефона <span className='colorAccent'>*</span></label>
            <IMaskInput
              id='userPhone-tradein'
              mask={'+{7}(000) 000-00-00'}
              value={userPhone}
              unmask={true} 
              ref={ref}
              inputRef={inputRef}  
              required
              onAccept={(value)=>{setUserPhone(value)}}
              placeholder='Введите данные...'
            />
          </div>


        </div>
        <div>
          <div className='tradeInForm-Input-checkbox'>
            <div>
              <input type="checkbox" checked={checked} />
              <span onClick={() => setChecked(!checked)}>
                {checked && <img src={images.checkboxIcon} />}
              </span>
            </div>
            <a href='#'><p>Я соглашаюсь на обработку персональных данных в соответствии с <span className='underline'>политикой конфиденциальности</span></p></a>
          </div>
          <button className={"btn-type1 btn-type1-black "} style={{ marginTop: '1rem' }}>
            <div className='btn-type1-container'>
              <p>Оставить заявку</p>
              <div><img src={images.arrowIcon} alt="" /></div>
            </div>
          </button>
        </div>


      </form>
    </div>
  )
}

export default TradeInForm