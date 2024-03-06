import { useState } from "react";
import { data } from "../../constants";
import { CardType3, DropdownType1, helpers } from '../../reusable';
import './CatalogMain.css';

const CatalogMain = () => {
    const [slidesToShowMiltiplayer, setSlidesToShowMiltiplayer] = useState(1);
    const slidesToShow = slidesToShowMiltiplayer * helpers.useSlidesToShow(data.cardsType3.length);


    const [carName, setCarName] = useState('Марка');
    const [sortOptions, setSortOptions] = useState(data.sortOptions[0].title);
    return (
        <section >
            <h2 className='section__padding ' style={{ paddingBottom: '1.5rem' }}>Автосалон EXEED в Москве</h2>
            {/* <div >
                <div className="catalogMain-sort-container  section__padding-noY">
                    <DropdownType1
                        list={data.carNamesList}
                        title={carName}
                        setTitle={setCarName}
                        dropdownType={'DropdownType1_2'} />
                    <DropdownType1
                        list={data.carNamesList}
                        title={carName}
                        setTitle={setCarName}
                        dropdownType={'DropdownType1_2'} />
                    <DropdownType1
                        list={data.carNamesList}
                        title={carName}
                        setTitle={setCarName}
                        dropdownType={'DropdownType1_2'} />
                </div>
                <div className="section__padding-noY">
                    <div className="catalogMain-sort-container_sortPrice ">
                        <DropdownType1
                            list={data.sortOptions}
                            title={sortOptions}
                            setTitle={setSortOptions}
                            dropdownType={'DropdownType1_2'} />
                    </div>
                </div>
            </div> */}
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