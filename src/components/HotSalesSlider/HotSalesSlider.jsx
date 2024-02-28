import { data} from "../../constants";
import { SliderType1} from '../../reusable';


const HoteSalesSlider = () => {
    const h2 = <>горячие<br />предложения</>;
    const cardType = 'CardType1';

    return (
        <SliderType1 h2={h2}
                     cards={data.cardsType1}
                     cardType ={cardType}/> 
    )
}

export default HoteSalesSlider