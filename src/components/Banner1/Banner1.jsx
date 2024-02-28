import { images } from '../../constants';
import './Banner1.css'

const Banner1 = () => {
    return (
        <div className="section__padding " >
            <div className="banner1" style={{ backgroundImage: `url(${images.banner1_bg})` }}>
                <div className="banner1-colorOverlay" >
                    <div>
                        <h2>Хит сезона<br/>ВМЕСТЕ С gEELY</h2>
                        <h3>Geely Manjaro 2.0 8AT<br/>(238л.с.) 4WD</h3>
                        <p className='banner1-colorOverlay-p'>от <span>3 849 990 ₽ </span></p>
                        <a href="#" className="btn-type1 btn-type1-orange" style={{ marginTop: '1rem' }}>
                            <div className='btn-type1-container'>
                                <p>Подробнее</p>
                                <div><img src={images.arrowIcon} alt="view more" /></div>
                            </div>
                        </a>
                    </div>
                    <img className='banner1-img'  src={images.banner1_img} alt="car" />
                    <div className="banner1-p">
                        <img src={images.plusIcon} alt="great news" />
                        <p>Уникальные технологии китайца позволяют комфортно проезжать большие расстояния</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Banner1