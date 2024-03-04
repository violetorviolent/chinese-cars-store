import { images } from '../../constants';
import { PomodoroTimer } from '../../reusable';

const Banner2 = (props) => {
    return (
     
            <div className="banner1" style={{ backgroundImage: `url(${props.imgUrl})` }}>
                <div className="banner2-colorOverlay" >
                    <div>
                        <h1 className='uppercase'>РЕКОРДНАЯ СКИДКА <br />НА {props.model}</h1>
                        <h2 style={{paddingBottom:'1rem'}}>Успей приобрести,<br />предложение ограничено</h2>
                        <p className='banner1-colorOverlay-p'>от <span>3 849 990 ₽ </span></p>
                        <PomodoroTimer/>
                        <div style={{ marginTop: '8rem' }}>
                        <p className='banner1-priceMobile'>от <span>3 849 990 ₽ </span></p>
                        <a href="#" className="btn-type1 btn-type1-orange" >
                            <div className='btn-type1-container'>
                                <p>Оставить заявку</p>
                                <div>
                                    <img src={images.arrowIcon} alt="view more" /></div>
                            </div>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Banner2