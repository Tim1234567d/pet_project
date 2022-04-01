import React from "react";
import { Link } from "react-router-dom";
import './services.css'

const OneService = ({services}) => {      

    return (  
       
      <div  key={services.id}> 
      <Link to={`/serviceDetail/${services.id}`} >  
      <div className="service__card">
       <img className="service_backImg" src={services.backImg} alt="" /> 
       <div className="service_title_wrapper">
          <h3 className="servicesTitle">{services.title}</h3>
        </div>
         
        </div>
        </Link>

        </div>
         
  )
    
}

export default OneService;



