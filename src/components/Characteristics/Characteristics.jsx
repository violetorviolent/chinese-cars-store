import { images } from '../../constants';
import './Characteristics.css';

const Characteristics = () => {
    return (
        <div className='section__padding'>
            <h2 className='uppercase'>Технические<br />характеристики</h2>
            <div className='characteristics__container'>
            <div>
                <div className='characteristics__line'>
                    <h5>Длина, мм</h5>
                    <h4>4400</h4>
                </div>
                <div className='characteristics__line'>
                    <h5>Ширина, мм</h5>
                    <h4>4400</h4>
                </div>
                <div className='characteristics__line'>
                    <h5>Высота, мм</h5>
                    <h4>4400</h4>
                </div>
                <div className='characteristics__line'>
                    <h5>Колесная база, мм</h5>
                    <h4>4400</h4>
                </div>
                <div className='characteristics__line'>
                    <h5>Объем багажного отделения, л</h5>
                    <h4>4400</h4>
                </div>
                <div className='characteristics__line'>
                    <h5>Объем топливного бака, л</h5>
                    <h4>4400</h4>
                </div>
                <div className='characteristics__line'>
                    <h5>Объем ДВИГАТЕЛЯ, л</h5>
                    <h4>4400</h4>
                </div>
                <div className='characteristics__line'>
                    <h5>Рабочий объем двигателя, см3</h5>
                    <h4>4400</h4>
                </div>
                <div className='characteristics__line'>
                    <h5>Коробка передач</h5>
                    <h4>4400</h4>
                </div>
                <div className='characteristics__line'>
                    <h5>Количество передач</h5>
                    <h4>4400</h4>
                </div>
                <div className='characteristics__line'>
                    <h5>Тип привода</h5>
                    <h4>4400</h4>
                </div>
            </div>
            <div className='characteristics__img-container'> 
            <img src={images.placeholderCardType1} alt="car" />
            </div>
            <div>
                <div className='characteristics__line'>
                    <h5>Мощность, л.с</h5>
                    <h4>4400</h4>
                </div>
                <div className='characteristics__line'>
                    <h5>Расход топлива в городе, л/100 км</h5>
                    <h4>4400</h4>
                </div>
                <div className='characteristics__line'>
                    <h5>Расход топлива на трассе, л/100 км</h5>
                    <h4>4400</h4>
                </div>
                <div className='characteristics__line'>
                    <h5>Смешанный расход топлива, л/100 км</h5>
                    <h4>4400</h4>
                </div>
                <div className='characteristics__line'>
                    <h5>Разгон от 0 до 100 км/ч, сек.</h5>
                    <h4>4400</h4>
                </div>
                <div className='characteristics__line'>
                    <h5>Максимальная скорость, км/ч</h5>
                    <h4>4400</h4>
                </div>
                <div className='characteristics__line'>
                    <h5>Клиренс, мм</h5>
                    <h4>4400</h4>
                </div>
                <div className='characteristics__line'>
                    <h5>Снаряженная масса, кг</h5>
                    <h4>4400</h4>
                </div>
                <div className='characteristics__line'>
                    <h5>Максимальная масса, кг</h5>
                    <h4>4400</h4>
                </div>
                <div className='characteristics__line'>
                    <h5>Тип двигателя</h5>
                    <h4>4400</h4>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Characteristics