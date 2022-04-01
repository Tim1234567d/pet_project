import React from "react";
import s from './cleaningInfo.module.css'

const CleaningIngoItem2 = () => {
    return (
        <>
        <div class={s.tottori__cards}>
    
            <div class={s.tottori_text-2}>

          <div class={s.title-2}><h2 class={s.title-2-2}>Кухна и столовая</h2></div>

          <div class={s.subtitle-2}>  <p class={s.subtitle-2-2}>Кухня и столовая<br/>-Помыть раковину<br/>-Помыть столешницу<br/>-Помыть плиту<br/>-Помыть обеденный стол-Помыть посуду<br/>-Помыть микроволновку<br/>-Помыть шкафы на кухне<br/>-Помыть холодильник<br/>-Помыть духовку<br/>-Помыть вытяжку </p></div>

           {/* <div><a href="#" class="card-link">VIEW NEIGHBORHOOD</a></div> */}
            </div>
        </div>

        <div class={s.tottori__cards}>

          <div class={s.tottori_card-2}>
          <img src="https://static.tildacdn.com/tild6563-3262-4737-a264-373264373932/download.jpg" alt="tottori" className={s.cleaningImg}/>
         </div> 
        </div>
        </>
    )
}

export default CleaningIngoItem2