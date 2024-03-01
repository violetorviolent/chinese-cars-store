import { useState } from 'react';
import { images, data } from '../../constants';
import { DropdownType1 } from '../../reusable';
import './CreditFormMain.css';

const CreditFormMain = () => {
    const [carName, setCarName] = useState('Выбрать');

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
                <div>
                <h4>Кредитные условия</h4>
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
            <div className='creditForm__cardCar'>
                <div className='creditForm__cardCar-imgContainer'>
                    <img src={images.CarCreditDefault} alt="car image" />
                </div>
                <h4>Выберите автомобиль</h4>
                <div>
                    <div className='creditForm__cardCar-infoField'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreditFormMain