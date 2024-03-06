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

    const date = new Date();
    const targetDay = 1; // понедельник, начиная с вс=0
    let targetDate = new Date();
    const delta = targetDay - date.getDay();
    if (delta >= 0) { targetDate.setDate(date.getDate() + delta) }
    else { targetDate.setDate(date.getDate() + 7 + delta) }

    targetDate = new Intl.DateTimeFormat('ru', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }).format(targetDate);

    return (
        <div className='section__padding'>
            <div className='section__padding bannerForm'>
                <div className="phoneOnly-bannerForm">
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
                            <h4>Срок действия акции - до <span className='backgroundAccent'>{targetDate}</span></h4>
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