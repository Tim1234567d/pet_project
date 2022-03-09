import React, { useEffect, useState } from "react";
import {Services} from './data';
import { useParams } from "react-router-dom";
import s from './serviceDetail.module.css'
import Form from "./form/Form"

const ServiceDetail = () => {

  const {id} = useParams(); 

    return(
        Services.filter(services => services.id === id ).map((services) => (
          
     <div className={s.wrapper}>
            
      <div className={s.container}>
        <div className={s.main__info}> 
          <h1></h1>
          <div className={s.photo}><img  className="naturePhoto" src={services.backImg} alt="nature"  />
          </div>
          <h3>{services.title}</h3>
          <p className={s.text}> 
         {services.text}
            <br />
            <br />
          {services.text2}
          </p> 
        </div>

        <div class={s.sidebar}>
        <Form />

        </div>
       
      </div> 
    

        </div>
    ))

        )
}

export default ServiceDetail;