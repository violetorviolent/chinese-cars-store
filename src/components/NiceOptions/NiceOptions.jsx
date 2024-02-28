import { data } from "../../constants";
import { CardType3 } from '../../reusable';
import {helpers} from '../../reusable'

const NiceOptions = () => {

    return (
        <section className='section__padding '>
            <div className='cardOptionsGrid'>
                {data.cardsType3.slice(0, helpers.useSlidesToShow(data.cardsType3.length)).map((card) => { return (<CardType3 key={card.id} card={card} cardType ={'cardType3_1'}/>) })}
            </div>
        </section>
    )
}

export default NiceOptions