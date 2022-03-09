// import React, { useEffect } from "react";
import CleaningInfo from "./cleaningInfo";
import Services from "./services";

 
const AllServices = () => {
    return (
        <section >
        <div className="wrapper" >

          <div  className="photo-big-3"><img src="https://www.studylab.ru/upload/SimplePage/image/480/c197e4f4d1732f0aace9b4f4a523682c.jpg" alt="11"/></div>

          
          <Services />
        
          <CleaningInfo />
        </div> 
        
      </section> 
    )
}

export default AllServices;

