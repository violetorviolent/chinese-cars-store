import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderImagesType1.css";


function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow ";
  return (
    <button className={className} onClick={props.onClick} >
      <svg width="13" height="17" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0.999999L7 7L1 13" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}


function SliderImagesType1(props) {
  const settings = {
    dots: props.cardType === 'cardType3_1' ? true: false,
    arrows:  props.cardType === 'cardType3_1' ? false: true,
    nextArrow: props.cardType === 'cardType3_2' && <Arrow type='next' />,
    prevArrow: props.cardType === 'cardType3_2' && <Arrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    customPaging: function() {
        return (
          <a className="dot"></a>
        );
      },
      dotsClass: "slick-dots slick-thumb"
    };
    return (
      <div className='swiperType1'>
        <Slider {...settings} >
          {props.card.images.slice(0, 3).map((card,index) => { 
          return (
            <img key={index} className='swiperType1-slide' src={card} alt="car" />   
          ) 
        })}
        </Slider>
      </div>
    );
  }

export default SliderImagesType1