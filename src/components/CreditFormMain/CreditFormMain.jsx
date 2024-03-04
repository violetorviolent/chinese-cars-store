import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IMaskInput } from 'react-imask';
import { images, data } from '../../constants';
import { DropdownType1 } from '../../reusable';
import './CreditFormMain.css';

const CreditFormMain = () => {
    const [carName, setCarName] = useState('Выбрать');
    const ref = useRef(null);
    const inputRef = useRef(null);
    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [checked, setChecked] = useState(true);
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        if (userPhone.length === 11) {
            navigate("/success");
        }

    }

    return (
        <div className='section__padding-noY creditForm'>
            <div className='creditForm__creditForm'>
                <div className='creditForm__creditForm-CarSelect'>
                    <div>
                        <p>Марка <span className='colorAccent'>*</span></p>
                        <DropdownType1
                            list={data.carNamesList}
                            title={carName}
                            setTitle={setCarName}
                            dropdownType={'DropdownType1_3'} />
                    </div>
                    <div>
                        <p>Модель <span className='colorAccent'>*</span></p>
                        <DropdownType1
                            list={data.carNamesList}
                            title={carName}
                            setTitle={setCarName}
                            dropdownType={'DropdownType1_3'} />
                    </div>
                    <div>
                        <p>Комплектация <span className='colorAccent'>*</span></p>
                        <DropdownType1
                            list={data.carNamesList}
                            title={carName}
                            setTitle={setCarName}
                            dropdownType={'DropdownType1_3'} />

                    </div>
                    <div>
                        <p>Цвет <span className='colorAccent'>*</span></p>
                        <DropdownType1
                            list={data.carNamesList}
                            title={carName}
                            setTitle={setCarName}
                            dropdownType={'DropdownType1_3'} />
                    </div>
                </div>

                <form className='creditForm_userData' onSubmit={(e) => { handlesubmit(e) }}>
                    <p className='bold'>Ваши данные</p>
                    <div className='creditForm_userData-container'>
                        <div className='input-container'>
                            <label htmlFor='userName-credit'>ФИО <span className='colorAccent'>*</span></label>
                            <input
                                id='userName-credit'
                                type='text'
                                role='textbox'
                                placeholder='Введите данные...'
                                value={userName}
                                required
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className='input-container'>
                            <label htmlFor='userPhone-credit'>Номер телефона <span className='colorAccent'>*</span></label>
                            <IMaskInput
                                id='userPhone-credit'
                                mask={'+{7}(000) 000-00-00'}
                                value={userPhone}
                                unmask={true}
                                ref={ref}
                                inputRef={inputRef}
                                minlength="17"
                                required
                                onAccept={(value) => { setUserPhone(value) }}
                                placeholder='Введите данные...'
                            />
                        </div>
                    </div>
                    <div>
                        <div className='input-checkbox'>
                            <div>
                                <input type="checkbox" checked={checked} />
                                <span onClick={() => setChecked(!checked)}>
                                    {checked && <img src={images.checkboxIcon} />}
                                </span>
                            </div>
                            <p><span onClick={() => setChecked(!checked)} style={{ cursor: 'pointer' }}>Я соглашаюсь на обработку персональных данных в соответствии с </span><Link to='/politics' className='underline'>политикой конфиденциальности</Link></p>
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
            
            <div className='creditForm__cardCar'>
            <h2>Выберите автомобиль</h2>
                <div className='creditForm__cardCar-imgContainer'>
                    <img src={images.CarCreditDefault} alt="car image" />
                </div>
                <div>
                    <div className='creditForm__cardCar-characteristics'>
                        <div>
                            <img src={images.carCardCredit_1} />
                            <p className='p__carPrice-Title'>2.0 л. бенз. 181 л.с.</p>
                        </div>
                        <div>
                            <img src={images.carCardCredit_2} />
                            <p className='p__carPrice-Title'>Передний привод</p>
                        </div>
                        <div>
                            <img src={images.carCardCredit_3} />
                            <p className='p__carPrice-Title'>Расход 5.9 л</p>
                        </div>
                        <div>
                            <img src={images.carCardCredit_4} />
                            <p className='p__carPrice-Title'>КПП Робот</p>
                        </div>
                    </div>
                    <div className='creditForm__cardCar-infoField'>
                        <div className='creditForm__creditForm-infoField '>
                            <p className='colorAccent'>Цена со скидкой:</p>
                            <p className='colorAccent'>От 756 300 ₽</p>
                        </div>
                        <div className='creditForm__creditForm-infoField'>
                            <p className='colorAccent'>Первоначальный взнос:</p>
                            <p className='colorAccent'>От 756 300 ₽</p>
                        </div>
                        <div className='creditForm__creditForm-infoField'>
                            <p className='colorAccent'>Ежемесячный платеж:</p>
                            <p className='colorAccent'>От 756 300 ₽</p>
                        </div>
                        <div className='creditForm__creditForm-infoField'>
                            <p className='colorAccent'>Ваша выгода:</p>
                            <p className='colorAccent'>От 756 300 ₽</p>
                        </div>
                        <div className='creditForm__creditForm-infoField'>
                            <p className='colorAccent'>Ставка по кредиту:</p>
                            <p className='colorAccent'>От 756 300 ₽</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreditFormMain