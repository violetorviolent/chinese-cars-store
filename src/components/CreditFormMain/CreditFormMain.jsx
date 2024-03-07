import { useState, useRef } from 'react';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IMaskInput } from 'react-imask';
import { Range, getTrackBackground } from "react-range";
import { images, data } from '../../constants';
import { DropdownType1 } from '../../reusable';
import './CreditFormMain.css';
import './RangeCreditForm.css'


const rangePayment_Step = 5;
const rangePayment_Min = 10;
const rangePayment_Max = 80;
const rangePayment_Value = 40; 
const rangePayment_Scale = [
    <span className="range-CreditForm-scale_item">10</span>,
    <span className="range-CreditForm-scale_item">15</span>,
    <span className="range-CreditForm-scale_item">20</span>,
    <span className="range-CreditForm-scale_item">25</span>,
    <span className="range-CreditForm-scale_item">30</span>,
    <span className="range-CreditForm-scale_item">35</span>,
    <span className="range-CreditForm-scale_item">40</span>,
    <span className="range-CreditForm-scale_item">45</span>,
    <span className="range-CreditForm-scale_item">50</span>,
    <span className="range-CreditForm-scale_item">55</span>,
    <span className="range-CreditForm-scale_item">60</span>,
    <span className="range-CreditForm-scale_item">65</span>,
    <span className="range-CreditForm-scale_item">70</span>,
    <span className="range-CreditForm-scale_item">75</span>,
    <span className="range-CreditForm-scale_item">80</span>];

const rangeTime_Step = 1;
const rangeTime_Min = 1;
const rangeTime_Max = 9;
const rangeTime_Value = 3;
const rangeTime_Scale = [
    <span className="range-CreditForm-scale_item">6 мес</span>,
    <span className="range-CreditForm-scale_item">1 год</span>,
    <span className="range-CreditForm-scale_item">2 года</span>,
    <span className="range-CreditForm-scale_item">3 года</span>,
    <span className="range-CreditForm-scale_item">4 года</span>,
    <span className="range-CreditForm-scale_item">5 лет</span>,
    <span className="range-CreditForm-scale_item">6 лет</span>,
    <span className="range-CreditForm-scale_item">7 лет</span>,
    <span className="range-CreditForm-scale_item">8 лет</span>];


class RangePayment extends React.Component {
    state = {
        values: [rangePayment_Value]
    };

    render() {
        return (
                <div className="range-CreditForm">
                    <p>Первый взнос</p>
                    <Range
                        values={this.state.values}
                        step={rangePayment_Step}
                        min={rangePayment_Min}
                        max={rangePayment_Max}
                        onChange={values => {this.setState({ values }); console.log(values)}}
                        renderTrack={({ props, children }) => {
                            return (
                                <div
                                    onMouseDown={props.onMouseDown}
                                    onTouchStart={props.onTouchStart}
                                    style={{
                                        ...props.style,
                                        height: "36px",
                                        display: "flex",
                                        width: "100%"
                                    }}
                                >
                                    <div
                                        ref={props.ref}
                                        style={{
                                            height: "4px",
                                            width: "100%",
                                            background: getTrackBackground({
                                                values: this.state.values,
                                                colors: ["var(--color-h)", "var(--color-border-light)"],
                                                min: rangePayment_Min,
                                                max: rangePayment_Max
                                            }),
                                            alignSelf: "center",

                                        }}
                                    >
                                        {children}
                                        <div className="range-CreditForm-scale">{rangePayment_Scale}</div>
                                    </div>
                                </div>
                            );
                        }}
                        renderThumb={({ props, isDragged }) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: "18px",
                                    width: "18px",
                                    borderRadius: "15px",
                                    backgroundColor: "white",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    border: "2px solid black"
                                }}
                            />
                        )}
                    />
                </div>
        );
    }
}

class RangeTime extends React.Component {
    state = {
        values: [rangeTime_Value]
    };

    render() {
        return (
            <div className="Test">
                <div className="range-CreditForm">
                <p>Срок кредитования</p>
                    <Range
                        values={this.state.values}
                        step={rangeTime_Step}
                        min={rangeTime_Min}
                        max={rangeTime_Max}
                        onChange={values => {this.setState({ values }); console.log(values)}}
                        renderTrack={({ props, children }) => {
                            return (
                                <div
                                    onMouseDown={props.onMouseDown}
                                    onTouchStart={props.onTouchStart}
                                    style={{
                                        ...props.style,
                                        height: "36px",
                                        display: "flex",
                                        width: "100%"
                                    }}
                                >
                                    <div
                                        ref={props.ref}
                                        style={{
                                            height: "4px",
                                            width: "100%",
                                            background: getTrackBackground({
                                                values: this.state.values,
                                                colors: ["var(--color-h)", "var(--color-border-light)"],
                                                min: rangeTime_Min,
                                                max: rangeTime_Max
                                            }),
                                            alignSelf: "center",

                                        }}
                                    >
                                        {children}
                                        <div className="range-CreditForm-scale">{rangeTime_Scale}</div>
                                    </div>
                                </div>
                            );
                        }}
                        renderThumb={({ props, isDragged }) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: "18px",
                                    width: "18px",
                                    borderRadius: "15px",
                                    backgroundColor: "white",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    border: "2px solid black"
                                }}
                            />
                        )}
                    />
                </div>
            </div>
        );
    }
}



const CreditFormMain = (props) => {
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
                <div className="creditForm_phoneOnly">
                <h2 style={{paddingBottom:'1rem'}}>Выберите автомобиль</h2>
                <div className='creditForm__cardCar-imgContainer'>
                    <img src={images.CarCreditDefault} alt="car image" />
                </div>
                <div style={{paddingBottom:'1rem'}}>
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
                </div>
                </div>
                <h3>Кредитные условия</h3>
                <RangePayment />
                <p className='colorLight'>Скидка действует при первом взносе от 10%</p>
                <RangeTime />
                <div className='creditForm_phoneOnly'>
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