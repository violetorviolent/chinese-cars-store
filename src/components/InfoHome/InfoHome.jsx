import './InfoHome.css';
import { images } from '../../constants';

const InfoHome = () => {
    return (
        <section>
            <div className="section__padding" style={{paddingBottom:'0'}}>
                <h5>1. Новые китайские автомобили в Москве у дилера</h5>
                <br />
                <p>Большой модельный ряд из одиннадцати китайских брендов представлен в автосалоне дилера «Китайские автомобили». Здесь Вы найдете популярные модели таких китайских автопроизводителей, как Haval, Chery, Jac и Geely, среди которых множество новинок российского рынка.</p>
                <br />
                <p>Стоит ли приобретать китайские модели в 2024 году? Однозначно, стоит. Автолюбители России выбирают продукт китайского автопрома в основном по финансовым причинам, но множество отзывов (уже владельцев китайских автомобилей) на всевозможных форумах в перечислении достоинств авто о цене даже не упоминают. Динамичность, яркий дизайн, отличная управляемость, инновационный интерьер и высокий уровень безопасности, – то, что отличает китайские внедорожники среди их аналогов на рынке нашей страны.</p>
                <br />
                <h5 style={{ fontWeight: '500' }}>Ваши выгоды при покупке нового китайского автомобиля в нашем автосалоне: </h5>
                <br />
                <ul>
                    <li><p>— Бесплатная консультация по всем вопросам</p></li>
                    <li><p>— Помощь в оформлении госпрограммы</p></li>
                    <li><p>— Первоначальный взнос не обязателен</p></li>
                    <li><p>— Удобная система автокредита</p></li>
                    <li><p>— Широкий выбор новых авто</p></li>
                    <li><p>— Лояльная ценовая политика</p></li>
                    <li><p>— Прозрачная услуга Trade-IN</p></li>
                    <li><p> — Индивидуальный подарок</p></li>
                </ul>
                <br />
                <h5>2. Как купить новый автомобиль дешевле чем у дилера?</h5>
                <br />
                <p>Данным вопросом задаются многие водители по той причине, что опасаются вездесущих «допов» и других надбавок к цене нового авто. Мы понимаем, насколько эти «допы» отравляют желание приобретать новые автомобили, насколько они угнетают покупательскую способность, поэтому автосалон «Китайские автомобили» свел подобные избытки к минимуму. Конечно, будучи дилером у нас не получится избавиться о них совсем, поскольку китайские бренды, которые мы представляем, выдвигают ряд требований по продаже их автомобилей.</p>
                <br />
                <p>— В сотрудничестве с нашими банками-партнерами мы создали удобную и выгодную систему автокредита, где процентная ставка от 4.9%, а вероятность одобрения – свыше 90%;</p>
                <br />
                <p>— У нас Вы можете приобрести новый китайский кроссовер, седан или минивэн в кредит без первого взноса благодаря тому, что автосалон дает данную сумму в беспроцентную рассрочку;</p>
                <br />
                <p>— Также мы предлагаем воспользоваться выгодной опцией Трейд-Ин, за счет которой можно не только без лишних нервов продать старый автомобиль, но и использовать скидку в размере 10% на новый.</p>
            </div>
            <div className="app__homeInfo-container section__padding-noRightMargin" style={{marginTop:'1.5rem'}}>
                <div className="app__homeInfo-container__text">
                    <h2 className='uppercase'>Интернет-магазин<br />SUPER CARS</h2>
                    <br />
                    <p>Добро пожаловать в <span className='bold'>SUPER CARS</span> – каждому нашему клиенту гарантирован индивидуальный подход. С Вами будет общаться Ваш персональный менеджер, который будет лично контролировать процесс подготовки Вашего автомобиля до момента выезда автомобиля из салона. Покупая автомобиль у нас, Вы получаете персональную дисконтную карту, которая предоставляет скидки на обслуживание в техническом центре..</p>
                    <br />
                    <p className='bold'>О НАС</p>
                    <br />
                    <p>SUPER CARS - это место, где Вы можете себя порадовать. Наш сервис предлагает Вам все возможные формы расчетов: наличную (операционная касса банка примет к оплате рубли, доллары, евро), безналичную. Вы сами выбираете то, что для Вас удобнее. Кроме того, мы рады предложить Вам возможность приобрести автомобиль в кредит.</p>
                    <br />
                    <a href="#" className="btn-type1 btn-type1-black" style={{marginTop:'1rem'}}>
                        <div className='btn-type1-container'>
                            <p>Подробнее</p>
                            <div><img src={images.arrowIcon} alt="" /></div>
                        </div>
                    </a>
                </div>
                <img className="app__homeInfo-container-img" src={images.infoHome} alt="enjoy your car" />
            </div>
        </section>
    )
}

export default InfoHome