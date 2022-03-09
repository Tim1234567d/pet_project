import React from "react";
import { Link } from "react-router-dom";
import './services.css'

const OneService = ({services}) => {      

    return (  
       
      <div  key={services.id}> 
      <Link to={`/serviceDetail/${services.id}`} >  
      <div className="top__card">
       <img className="backImg" src={services.backImg} alt="" /> 
       <div className="ab">
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

export default OneService;



