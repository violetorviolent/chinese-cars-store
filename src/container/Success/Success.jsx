import './Success.css'

const Success = () => {
    return (
        <div className='section__padding'>
            <div className='flex__center'>
                <div className='success flex__center'>
                    <div className='succes-imgContainer flex__center'>
                        <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 10.5L10.1667 19L27.5 2" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <h2>Спасибо!</h2>
                    <p>Мы получили Ваше сообщение. В ближайшее время наши менеджеры свяжутся с вами и ответят на все вопросы.</p>
                    <p>Благодарим за доверие</p>
                </div>
            </div>
        </div>
    )
}

export default Success