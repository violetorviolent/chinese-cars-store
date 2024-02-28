import { useState } from "react";
import { data } from "../../constants";
import { CardType3, helpers } from '../../reusable';
import './CatalogMain.css';

// take dropdown menu sepparately into reusable componennts 
// sort stuff in general, like yo wtf u have like tons sooo much components which could be took to reuseable yo
const CatalogMain = () => {
    const [slidesToShowMiltiplayer, setSlidesToShowMiltiplayer] = useState(1);
    const slidesToShow = slidesToShowMiltiplayer * helpers.useSlidesToShow(data.cardsType3.length);

    const [toggleOptions, setToggleOptions] = useState(false);
    const [carName, setCarName] = useState('Марка');

    const [rotateChevron, setRotateChevron] = useState(false);
    const handleRotate = () => setRotateChevron(!rotateChevron);
    const [carCount, setCarCount] = useState('');
    return (
        <section >
            <h2 className='section__padding ' style={{ paddingBottom: '1.5rem' }}>АВТОСАЛОН EXEED В МОСКВЕ</h2>


            <div className="catalogMain-sort-container section__padding">
                hello
                {/* <div className='app__navbar-searchCarName' onClick={() => { setToggleOptions(!toggleOptions); handleRotate() }}>
                    <div className='app__navbar-searchCarName-dropdown '>
                        <p>{carName}</p>
                        <svg className={` ${rotateChevron ? "rotate" : 'rotateBack'}`} width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7L7 8L9 8L9 7L7 7Z" fill="white" />
                        </svg>
                    </div>
                    {toggleOptions &&
                        <div className='app__navbar-searchOptions slide-down '>
                            {data.carNamesList.map((card) => {
                                return (
                                    <div onClick={() => { setCarName(card.title); setCarCount(23) }} key={card.title} ><p>{card.title}</p></div>
                                )
                            })}
                        </div>
                    }
                </div> */}
            </div>


            <div className='cardOptionsGrid section__padding '>
                {data.cardsType4.slice(0, slidesToShow).map((card) => { return (<CardType3 key={card.id} card={card} cardType={'cardType3_1'} />) })}
            </div>
            {slidesToShow <= data.cardsType3.length && <button
                className='btn-type1 btn-type1-orange '
                style={{ textTransform: 'uppercase ', margin: '3rem auto 0 auto' }}
                onClick={() => { setSlidesToShowMiltiplayer(slidesToShowMiltiplayer + 1) }}
            >
                <p>Показать еще</p>
            </button>}

        </section>
    )
}
export default CatalogMain