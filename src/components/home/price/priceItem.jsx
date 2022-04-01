import React from "react";
import s from './price.module.css'

const PriceItem = ({priceData}) => {

    return ( 
        <div className={s.top__card}>

        <h3 className={s.priceDes}>{priceData.title}</h3>
        <p className={s.price}>  {priceData.price}</p>
        <h3>Что входит в уборку?</h3>
        <p className={s.aboutPrice}>{priceData.text}</p>
        <button className={s.price_btn}> <a href="https://wa.me/996709919582">Заказать уборку</a> </button>
    </div>
    )
}

export default PriceItem;