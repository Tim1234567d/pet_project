import React, { useState } from "react";
import  s from'./mainImg.module.css'
 
const MainImg = () => {

    return (
       

        <> 
        <div  className={s.intro}> 
        <div className="wrapper">
            
                {/* <div className={s.intro_wrapper}></div> */}
            <h1 className={s.intro__title}>ЧИСТОТА И ПОРЯДОК В ВАШЕМ ДОМЕ</h1>
            <p className={s.intro__subtitle}>
            Уборка квартир, домов и офисов в Бишкеке<br/>
            <div className={s.hey}> <a  className={s.intro_num} href="tel:+996709919582"> <i><img src="https://pngset.com/images/background-white-phone-icon-clipart-call-icon-white-texture-white-board-clothing-apparel-transparent-png-767470.png" className={s.phoneIcon} alt="" /></i> 0709 91 95 82 </a>
            
            <a className={s.intro_num2} href="https://api.whatsapp.com/send?phone=+996709919582"> <i><img src="https://www.svgrepo.com/show/176768/whatsapp-social-media.svg" className="whatsappIcon" alt="" /></i> 0709 91 95 82 </a></div>
           
            </p>    

            </div> 
            </div>
           
            {/* <img  className={s.intro} src="https://deepcleaning.ie/wp-content/uploads/2021/06/After-Builders-Cleaning-3-1.jpeg" alt="" /> */}

           
    
        
        </>

       
       
    )
}
export default MainImg;