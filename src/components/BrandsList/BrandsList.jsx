import { data } from '../../constants';
import './BrandsList.css';

const BrandsList = () => {
    return (
        <section className='section__padding'>
            <h2>КАТАЛОГ<br />АВТОМОБИЛЕЙ</h2>
            <div className='brandLinks-container'>
                {data.carNamesList.map((card) => {
                    return (
                            <a key={card.title} className='brandLink' href="#">
                                <img src={card.url} alt={card.title} />
                                <p>{card.title}</p>
                            </a>   
                    )
                })}
            </div>
        </section>
    )
}

export default BrandsList