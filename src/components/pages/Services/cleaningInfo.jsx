import React from "react";
import s from "./cleaningInfo.module.css"
import CleaningInfoItem from "./cleaningInfoItem";
import CleaningIngoItem2 from "./cleaningInfoItem2";
import CleaningInfoItem3 from "./cleaningInfoItem3";

const CleaningInfo = () => {
    return(
        <section class="wrapper">

        <div className={s.wrapper_full}>
        <h1 className={s.service_title}>Что входит в уборку помещения</h1>
        <p className={s.service_title2}>Экипаж приедет в удобное для вас время,<br /> создаст чистоту и уют в Вашем доме</p>
 
            <div className={s.tottori__all}>

                <CleaningInfoItem />
                <CleaningIngoItem2 />
                <CleaningInfoItem3 />
            </div> 
            
        </div>
    </section>
    )
}

export default CleaningInfo;