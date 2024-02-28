import { HotSalesSliderCatalog, Banner1, BrandsList, CatalogMain, RecommendedModels } from '../../components';


const Catalog = () => {
    return (
        <div className='catalog'>
            <BrandsList />
            <RecommendedModels />
            <CatalogMain />
            <Banner1 />
            <HotSalesSliderCatalog />
        </div>
    )
}

export default Catalog