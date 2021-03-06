import React from "react";
import s from './price.module.css'
import PriceItem from "./priceItem";

const Price = () => {

    const priceDatat = [
        {id:0, title:'Поддерживающая уборка квартиры', price:'от 1800сом',text: [' - Пропылесосим ковры и дорожки',<br/>, ' - Помоем полы и плинтуса', <br/>,'- Произведем влажную уборку всей корпусной мебели снаружи!',<br/>,'- Почистим и продезинфицируем сантехнику (смесители, раковины, унитазы, биде',<br/>,'- Вытрем пыль с фасада кухонного гарнитура',<br/>, '- Мойка раковины и бытовой техники снаружи'] },

        {id:1, title:'Генеральная уборка квартиры', price:'от 2400сом', text:  ['  - Помоем все окна и балкон/лоджию',<br/>, ' - Помоем полы, плинтуса, радиаторы и батареи', <br/>,'- Помоем и продезинфицируем все дверные ручки, выключатели и розетки',<br/>,' - Почистим все стеклянные поверхности',<br/>,' - Удалим пыль отовсюду, включая люстры, потолочные светильники (кроме хрустальных люстр), карнизы, гардины, кондиционеры',<br/>, ' - Произведем влажную уборку всей корпусной мебели снаружи!',<br/>, '  - Обеспылим стены и потолки',<br/>, '  Санузел',<br/>,'- Почистим и продезинфицируем сантехнику (смесители, раковины, унитазы, биде)',<br/>,' - Отмоем кафельную плитку от потолка до пола и межплиточные швы',<br/>,' - Почистим душевые кабины и ванну',<br/>,' Кухня',<br/>,'  - Помоем все горизонтальные поверхности от потолка до пола, включая фасад кухонного гарнитура.',<br/>, '  - Мойка бытовой техники снаружи',<br/>, ' - Мойка раковины, плиты, кухонного фартука от любых загрязнений',<br/>, '- Продезинфицируем и проведем влажную уборку отсеков мусорной корзины (помоем мусорную корзину)']},

        {id:2, title:'Уборка квартиры после ремонта', price:'от 2800сом', text: ['  Кухня',<br/>, '- Очищаем от пыли все поверхности и потолок', <br/>,'- Моем пол, подоконники, батареи, шкафы и технику снаружи, дверные отсеки.',<br/>,'- Удаляем следы и пятна от строительных смесей',<br/>,'Ванная',<br/>, '- Очищаем от пыли все поверхности, включая потолок.',<br/>, '  - Моем пол, кафельную плитку, батареи, ванную и унитаз, чистим зеркала',<br/>, '  - Удаляем пятна от строительных смесей',<br/>,'Жилые помещения',<br/>,' - Очищаем от пыли все поверхности, включая потолок',<br/>,'  - Моем пол, подоконники, батареи, плинтуса, дверные отсеки.',<br/>,' - Удаляем следы и пятна от строительных смесей',<br/>,'  - Собираем и выносим мусор',<br/>, ' - Моем окна и рамы'] },
        
    ]
    return (
        <section className={s.price_wrapper}>
    <div className="wrapper"> 
        <h2 className={s.title}>
            Стоимость уборки помещений 
        </h2>
        <p className={s.subtitle}>Цена зависит от площади помещения</p>
        <h3 className={s.price_subtitle}>Для квартир</h3>
        <div className= {s.top__cards}>

        { 
            priceDatat.map((priceDatat) => (
                <PriceItem priceData={priceDatat} />
            ))
        }


        </div>

        <h3 className={s.price_subtitle}>Для дома </h3>

        <div className= {s.top__cards}> {/* <h1>Для дома</h1> */}
       {
            priceDatat.map((priceDatat) => (
                <PriceItem priceData={priceDatat} />
            ))
        } </div>
        <h3 className={s.price_subtitle}>Для Бизнеса <i className={s.underLine}></i> </h3>

        <div className= {s.top__cards}> {/* <h1>Для дома</h1> */}
       {
            priceDatat.map((priceDatat) => (
                <PriceItem priceData={priceDatat} />
            ))
        } </div>

        
       
    </div> 
</section>
    )
}

export default Price;