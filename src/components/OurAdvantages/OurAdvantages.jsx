import { data } from '../../constants';
import './OurAdvantages.css';

const OurAdvantagesCard = ({ card: { imgUrl, h3, p } }) => {
    return (
        <div className='app__ourAdvantages-card' >
            <div>
                <div className='icon__container'><img src={imgUrl} alt="our advantages icon" /></div>
                <h4>{h3}</h4>
            </div>
            <p>{p}</p>
        </div>
    )
};

const OurAdvantages = () => {
    return (
        <section className='section__padding'>
            <div className='app__ourAdvantages-cardContainer'>
                {data.OurAdvantages.map((card) => <OurAdvantagesCard card={card} key={card.h3} />)}
            </div>
        </section>
    )
}


export default OurAdvantages