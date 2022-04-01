import React from "react";
import s from './cleaningInfo.module.css'

const CleaningInfoItem3 = () => {
    return (
        <>
        <div className={s.tottori__cards}>
 
           <div className={s.tottor_card-1}>
          <img src="https://static.tildacdn.com/tild3335-3038-4234-b231-653936393131/download.jpg" alt="tottori" className={s.cleaningImg}/>
           </div>   
      </div>

      <div className={s.tottori__cards}>

           <div className={s.tottori_text-1}>

          <div className={s.title-1}> <h2 className={s.title-1-1}>Ванна и туалет</h2></div>

          <div className={s.subtitle-1}><p className={s.subtitle-1-1}>-Помыть ванную или душевую кабину <br/>-Помыть раковину<br/>-Помыть унитаз<br/>-Помыть биде<br/>-Помыть лоток<br/>-Помыть настенную плитку<br/>-Помыть стиральную машину</p></div>

          {/* <div><a href="#" className="card-link">VIEW PREFECTURE</a></div> */}
           </div>
      </div>
      
      </>
    )
}

export default CleaningInfoItem3;