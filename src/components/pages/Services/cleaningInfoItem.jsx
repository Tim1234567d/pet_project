import React from "react";
import s from './cleaningInfo.module.css'

const CleaningInfoItem = () => {
    return (
        <>
          <div className={s.tottori__cards}> 
    
             <div className={s.tottor_card-1}> 
            <img src="https://static.tildacdn.com/tild3963-3865-4263-a434-613339646466/download.jpg" alt="tottori" className={s.cleaningImg}/>
             </div>   
        </div>

        <div className={s.tottori__cards}>

             <div className={s.tottori_text-1}>

            <div className={s.title_1}> <h2 className={s.title-1-1}>Жилые комнаты</h2></div>
 
            <div className={s.subtitle-1}><p className={s.subtitle-1-1}>-Помыть пол <br/>-Почистить ковер<br/> -Помыть окна<br/> -Помыть окна на балконе<br/> -Убрать балкон <br/>-Почистить мебель <br/>-Протереть пыль<br/>-Погладить вещи (до 30 минут)<br/>-Помыть зеркала<br/>-Помыть люстру<br/>-Застелить постель<br/>-Сложить вещи<br/>-Вынести бытовой мусор до 30 литров<br/>-Убраться в гардеробной<br/>-Убраться внутри шкафов<br/>-Протереть стены </p></div>

            {/* <div><a href="#" className="card-link">VIEW PREFECTURE</a></div> */}
             </div>
        </div>
        
        </>
    )
}

export default CleaningInfoItem;