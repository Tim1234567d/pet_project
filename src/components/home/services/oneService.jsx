import React from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import {TopPlaceloading} from "../../index"
import './services.css'

const OneService = ({services}) => {      

    return (  
       
      <div  key={services.id}> 
      <Link to={`/tour/${services.id}`} >  
      <div className="top__card">
          <h3>{services.title}</h3>
          <p className="top__cardDesc">
           {services.text}
          </p>
        </div>
        </Link>

        </div>
         
  )

//   }) : Array(9).fill(<TopPlaceloading/>)

// return <>{renderItems}</>
    
}

export default OneService;



