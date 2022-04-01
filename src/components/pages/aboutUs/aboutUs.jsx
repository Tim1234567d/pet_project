import React, { useState } from "react";
import AboutUsInfo from "./aboutUsInfo/aboutUsInfo";
import s from './aboutUsInfo/aboutUs.module.css'

// import TeamInfo from "./teamInfo/teamInfo";


const AboutUs = () => {

  

    return( 
    
      <div className="wrapper">

      <div className={s.mainBlock} ><img className={s.mainImg} src="https://deepcleaning.ie/wp-content/uploads/2021/06/After-Builders-Cleaning-3-1.jpeg" alt=""/>
      </div>
          <AboutUsInfo/>
          {/* <TeamInfo/>     */}
      </div>

 
    )
}

export default AboutUs;