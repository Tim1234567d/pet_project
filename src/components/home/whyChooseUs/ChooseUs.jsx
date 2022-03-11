import React, { useEffect } from "react";
import ChooseUsItem from "./chooseUsItem";
import './style.css'
import { chooseUsData } from "./data";

const ChooseUs = () => { 
  return (
    
     <section class="benefits">
        <div class="benefits__wrap">
            <h2 class="benefits__title">Почему выбирают нас</h2>
            <div class="benefits__cards">

                {
                    chooseUsData.map((chooseUs) => (
                  <ChooseUsItem  chooseUs = {chooseUs}/>
                      
                    ))
                }

            </div>
        </div>
    </section>
      
)

}

export default ChooseUs;