import React from "react";
import { Link } from "react-router-dom";
import s from './services.module.css'

const ServiceInfo = ({services}) => {      

    return (  
       
      <div  key={services.id}> 
      <Link to={`/serviceDetail/${services.id}`} >  
      <div className={s.top__card}>
       <img className={s.backImg} src={services.backImg} alt="" /> 
       <div className={s.block}>
          <h3 className="servicesTitle">{services.title}</h3>
          {/* <p className="top__cardDesc">
           {services.text}
          </p> */}
        </div>
         
        </div>
        </Link>

        </div>
         
  )
    
}

export default ServiceInfo;



