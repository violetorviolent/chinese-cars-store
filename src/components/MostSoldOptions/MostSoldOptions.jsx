import { useState } from "react";
import { data } from "../../constants";
import { CardType3, helpers } from '../../reusable';


const MostSoldOptions = () => {

    const [slidesToShowMiltiplayer, setSlidesToShowMiltiplayer] = useState(1);
    const slidesToShow = slidesToShowMiltiplayer * helpers.useSlidesToShow(data.cardsType3.length);
    return (
        <section className='section__padding '>
            <h2 className='uppercase' style={{ paddingBottom: '1.5rem' }}>самые<br />продаваемые</h2>
            <div className='cardOptionsGrid'>
                {data.cardsType4.slice(0, slidesToShow).map((card) => { return (<CardType3 key={card.id} card={card} cardType={'cardType3_2'} />) })}
            </div>
            {slidesToShow <= data.cardsType3.length &&
                <button
                    className='btn-type1 btn-type1-orange uppercase'
                    style={{ margin: '3rem auto 0 auto' }}
                    onClick={() => { setSlidesToShowMiltiplayer(slidesToShowMiltiplayer + 1) }}>
                    <p>Показать еще</p>
                </button>}
        </section>
    )
}

export default MostSoldOptions