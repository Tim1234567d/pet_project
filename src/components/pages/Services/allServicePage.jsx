// import React, { useEffect } from "react";
import CleaningInfo from "./cleaningInfo";
import Services from "./services";
import s from './services.module.css'

 
const AllServices = () => {
    return (
        <section >
        <div className="wrapper" >

          <div  ><img className={s.photoBig3} src="https://rescuemytimecleaningservice.com/wp-content/uploads/2019/11/cleaning-person-800x533.jpeg" alt="11"/></div>

          <Services />
          <CleaningInfo />
        </div> 
        
      </section> 
    )
}

export default AllServices;

