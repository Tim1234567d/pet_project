import React from "react";
import s from './price.module.css'
import PriceItem from "./priceItem";

const Price = () => {

    const priceDatat = [
        {id:0, title:'С окнами', price:'от 2500c' },
        {id:1, title:'С балконом', price:'от 2500c' },
        {id:2, title:'С окнами', price:'от 2500c' },
    ]
    return (
        <section className="wrapper">
    <div className={s.wrapperFull}>
        <h2 className={s.title}>
            Стоимость уборки помещений 
        </h2>
        <p className={s.subtitle}>Цена зависит от площади помещения</p>
        <div className= {s.top__cards}>

        {
            priceDatat.map((priceDatat) => (
                <PriceItem priceData={priceDatat} />
            ))
        }

        </div>
       
    </div>
</section>
    )
}

export default Price;