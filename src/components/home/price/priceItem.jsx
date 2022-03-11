import React from "react";
import s from './price.module.css'

const PriceItem = ({priceData}) => {
    return (
        <div className={s.top__card}>

        {/* <div className="top__card-pic"><img src="./img/png card/top 1.jpg" alt="123" className="top__card-thumb"/>
          
        </div> */}
        <h3 className={s.priceDes}>{priceData.title}</h3>
        <p className={s.price}>
            
            {priceData.price}
        </p>
    </div>
    )
}

export default PriceItem;