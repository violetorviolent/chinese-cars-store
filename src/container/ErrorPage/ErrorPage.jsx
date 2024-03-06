import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='section__padding fade'>
            <div className='flex__center'>
                <div className='success flex__center'>
                    <h1 className='colorAccent'>404</h1>
                    <h2>Woops!</h2>
                    <h2>Такой странички нет, но не расстраивайся, есть много других страничек</h2>
                    <h2>вот, например, хорошая <Link to='chinese-cars-store/' className='underline'>страничка</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
