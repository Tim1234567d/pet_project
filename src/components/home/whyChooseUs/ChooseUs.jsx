import React, { useEffect } from "react";
import ChooseUsItem from "./chooseUsItem";
import './style.css'
import { chooseUsData } from "./data";

const ChooseUs = () => { 
  return (
    
     <section className="chooseUs">
        <div className="wrapper">
            <h2 className="chooseUs__title">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
            <div className="chooseUs__cards">

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