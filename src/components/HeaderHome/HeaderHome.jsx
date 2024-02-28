import { images, data } from '../../constants';
import { PomodoroTimer } from '../../reusable';
import './HeaderHome.css'
import './HeaderHomeCard.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderHomeCard = (props) => {
    return (
        <div className='headerHome-card'>
            <div className='headerHome-card-section__padding'>
                <h1>{props.card.h1}</h1>
                <p className='p__carPrice-Title'>{props.card.p}</p>
                <div className='headerHome-card-bigScreen'>
                    <p className='p__carPrice-Title' style={{ marginTop: '3rem' }}>от <span className='p__headerHome-card-price'>{props.card.price}</span> <span className='p__carPriceLineThrough'>{props.card.prevPrice}</span></p>
                    <a href="#" className="btn-type1 btn-type1-black" style={{ marginTop: '1rem' }}>
                        <div className='btn-type1-container'>
                            <p>Подробнее</p>
                            <div><img src={images.arrowIcon} alt="" /></div>
                        </div>
                    </a>
                </div>
            </div>
            <div className='headerHome-card-smallScreen headerHome-card-catch'>СКИДКА И ПРЕДЛОЖЕНИЯ ОГРАНИЧЕННЫ!</div>
            <div className='headerHome-card-section__padding'>
                <div className='headerHome-card-PomodoroTimer'>
                <PomodoroTimer />
                </div>
                <div className='headerHome-card-img'>
                    <img src={props.card.imgUrl} alt="car" />
                </div>
                <div className='headerHome-card-smallScreen'>
                    <p className='p__carPrice-Title' style={{ marginTop: '1rem' }}>от <span className='p__headerHome-card-price'>{props.card.price}</span> <span className='p__carPriceLineThrough'>{props.card.prevPrice}</span></p>
                    <a href="#" className="btn-type1 btn-type1-black" style={{ marginTop: '1rem' }}>
                        <div className='btn-type1-container'>
                            <p>Подробнее</p>
                            <div><img src={images.arrowIcon} alt="" /></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

function Arrow(props) {
    let className = props.type === "next" ? "headerSlider__nextArrow" : "headerSlider__prevArrow";
    className += " headerSlider__arrow ";
    return (
        <button className={className} onClick={props.onClick} >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0303 5.46967C15.3232 5.76256 15.3232 6.23744 15.0303 6.53033L10.2574 11.3033C9.96447 11.5962 9.48959 11.5962 9.1967 11.3033C8.90381 11.0104 8.90381 10.5355 9.1967 10.2426L13.4393 6L9.1967 1.75736C8.90381 1.46447 8.90381 0.989593 9.1967 0.696699C9.48959 0.403806 9.96447 0.403806 10.2574 0.696699L15.0303 5.46967ZM0.5 5.25L14.5 5.25V6.75L0.5 6.75L0.5 5.25Z" fill="currentColor" />
            </svg>
        </button>
    );
}


const HeaderHome = () => {
    const settings = {
        dots: true,
        nextArrow: <Arrow type='next' />,
        prevArrow: <Arrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        customPaging: function () {
            return (
                <a className="dot"></a>
            );
        },
        dotsClass: "slick-dots slick-thumb",
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    arrows: false
                }
            }]
    };
    return (
        <div className='headerHome-slider' >
            <Slider {...settings} >
                {data.HeaderHome.map((card) => {
                    return (
                        <HeaderHomeCard key={card.h1} card={card} />
                    )
                })}
            </Slider>
        </div >
    )
}

export default HeaderHome