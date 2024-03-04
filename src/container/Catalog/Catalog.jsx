import { HotSalesSliderCatalog, Banner1, Banner2, BrandsList, CatalogMain, RecommendedModels } from '../../components';
import {images} from '../../constants';

const Catalog = () => {
    return (
        <div className='catalog'>
            <Banner2  imgUrl = {images.Banner_2Exeed} model ={"exeed"}/>
            <BrandsList />
            <RecommendedModels />
            <CatalogMain />
            <Banner1 />
            <HotSalesSliderCatalog />
        </div>
    )
}

export default Catalog