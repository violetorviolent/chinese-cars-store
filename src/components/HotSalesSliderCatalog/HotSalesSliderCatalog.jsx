import { data} from "../../constants";
import { SliderType1} from '../../reusable';


const HotSalesSliderCatalog = () => {
    const h2 = <>Хиты продаж<br />от GEELY </>;
    const cardType = 'CardType1';

    return (
        <SliderType1 h2={h2}
                     cards={data.cardsType1}
                     cardType ={cardType}/> 
    )
}

export default HotSalesSliderCatalog