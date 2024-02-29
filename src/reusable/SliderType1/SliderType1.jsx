import { useRef } from "react";
import { images } from "../../constants";
import { CardType1, CardType2 } from "../";

import "./SliderType1.css";


const SliderType1 = (props) => {
    const sliderRef = useRef(null);
    const scrollAmount = 260;

    return (
        <section className="sliderType1">
            <div className="section__padding slider__header">
                <h2 className='uppercase'>{props.h2}</h2>
                <div className="slider__header-btn_container">
                    <button className="btn-type2" onClick={() => { sliderRef.current.scrollLeft -= scrollAmount; }}>
                        <img src={images.arrowLeftIcon} alt=" scroll left" />
                    </button>
                    <button className="btn-type2" onClick={() => { sliderRef.current.scrollLeft += scrollAmount; }}>
                        <img src={images.arrowRightIcon} alt=" scroll right" />
                    </button>
                </div>
            </div>
            <div className="section__padding-noRightMargin">
                <div className="sliderType1__container" ref={sliderRef}>
                    {props.cards.map((card) => {
                        return (
                            <>
                                {props.cardType === 'CardType1' && <CardType1 key={card.id+'CardType1'} card={card} />}
                                {props.cardType === 'CardType2' && <CardType2 key={card.id+'CardType2'} card={card} />}
                            </>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default SliderType1