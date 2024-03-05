import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IMaskInput } from 'react-imask';
import { images, data } from '../../constants';
import { PomodoroTimer } from '../../reusable';
import './BannerForm.css';

const BannerForm = () => {
    const ref = useRef(null);
    const inputRef = useRef(null);
    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        if (userPhone.length === 11) {
            navigate("/success");
        }

    }

    // const expirationDate = Date.now() / 1000;
    // const date = new Date();
    // const m = new Date();
    // if(date.getDay()){m.setDate(date.getDate() + 8 - date.getDay())} else {m.setDate(date.getDate() + 1)}
    // alert(m);
//     const date = new Date("2010-08-10");

// let d=new Intl.DateTimeFormat({year:"numeric", month:"2-digit",day:"2-digit"}).format(date).split(" ").join(".");
// const date = Date.now();

// const formatter = new Intl.DateTimeFormat('ru', {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'numeric',
//   day: 'numeric',
//   hour: 'numeric',
//   minute: 'numeric',
//   second: 'numeric',
//   hour12: true,
//   timeZone: 'UTC'
// });
// alert(formatter);

// alert(d);

    return (
        <div className='section__padding'>
            <div className='section__padding bannerForm'>
                <div className="phoneOnly">
                    <div style={{ padding: '2rem 0' }}>
                        <PomodoroTimer />
                    </div>
                    <div className='bannerForm-imgContainer'>
                        <img src={images.HeaderHome_3} alt="car" />
                    </div>
                </div>
                <div className='bannerForm_form'>
                        <h1>Станьте владельцем Geely Coolray уже сегодня</h1>                   
                    <form onSubmit={(e) => { handlesubmit(e) }}>
                    <div className='bannerForm_form-head'>
                        <span className='line'></span>
                        <h4>Срок действия акции - до <span className='backgroundAccent'>12.02.2024</span></h4>
                        <span className='line'></span>
                    </div>
                        <div className='bannerForm_form-grid'>
                            <div className='input-container'>
                                <input
                                    id='userName-bannerForm'
                                    type='text'
                                    role='textbox'
                                    placeholder='ФИО'
                                    value={userName}
                                    required
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div className='input-container'>
                                <IMaskInput
                                    id='userPhone-bannerform'
                                    mask={'+{7}(000) 000-00-00'}
                                    value={userPhone}
                                    unmask={true}
                                    ref={ref}
                                    inputRef={inputRef}
                                    minlength="17"
                                    required
                                    onAccept={(value) => { setUserPhone(value) }}
                                    placeholder='+7 (___)___-__-__'
                                />
                            </div>
                            <div>
                                <button><h4>Получить предложение</h4></button>
                            </div>
                        </div>
                        <p>Нажимая кнопку “Получить предложение” я соглашаюсь с <Link to='/politics' className='underline'>политикой конфиденциальности</Link></p>
                    </form>
                </div>
                <div className='bannerForm_aside'>
                    <h2>Персональное предложение на Geely Coolray</h2>
                    <div style={{ padding: '2rem 0' }}>
                        <PomodoroTimer />
                    </div>
                    <div className='bannerForm-imgContainer'>
                        <img src={images.HeaderHome_3} alt="car" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerForm