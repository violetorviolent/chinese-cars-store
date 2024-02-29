import { data } from '../../constants';
import './OurAdvantages.css';

const OurAdvantagesCard = (props) => {
    return (
        <div className='app__ourAdvantages-card' >
            <div>
                <div className='icon__container'><img src={props.card.imgUrl} alt="our advantages icon" /></div>
                <h4 className='uppercase'>{props.card.h}</h4>
            </div>
            <p>{props.card.p}</p>
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