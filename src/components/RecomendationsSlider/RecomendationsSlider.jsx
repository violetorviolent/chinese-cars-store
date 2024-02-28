import { data} from "../../constants";
import { SliderType1} from '../../reusable';


const RecomendationsSlider = () => {
    const h2 = <>Рекомендации<br />от автосалона</>;
    const cardType = 'CardType2';

    return (
        <SliderType1 h2={h2}
                     cards={data.RecomendationsSlider}
                     cardType ={cardType} /> 
    )
}

export default RecomendationsSlider