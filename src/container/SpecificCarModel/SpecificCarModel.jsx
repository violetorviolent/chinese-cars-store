import {DiscountPannel, CreditFormShort, NiceOptions, BannerForm} from '../../components'

const SpecificCarModel = () => {
  return (
    <div>
      <p>charcteristics</p>
      <p>complectation</p>
      <BannerForm/>
      <DiscountPannel/>
      <h2 className='section__padding-noY' >Купить этот авто в кредит по<br/>спецпрограмме <span className='colorAccent'>LADA FINANCE</span></h2>
      <CreditFormShort/>
      <h2 className='section__padding-noY uppercase' >Возможно вас<br/>заинтересует</h2>
      <NiceOptions/>
    </div>
  )
}

export default SpecificCarModel