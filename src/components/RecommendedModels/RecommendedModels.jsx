import { data } from "../../constants";
import { CardType3 } from '../../reusable';
import {helpers} from '../../reusable'

const RecommendedModels = () => {
    return (
        <section className='section__padding '>
            <h2>Автомобили EXEED в наличии</h2>
            <br/>
            <div className='cardOptionsGrid'>
                {data.cardsType3.slice(0, helpers.useSlidesToShow(data.cardsType3.length)).map((card) => { return (<CardType3 key={card.id} card={card} cardType ={'cardType3_2'}/>) })}
            </div>
        </section>
    )
}

export default RecommendedModels