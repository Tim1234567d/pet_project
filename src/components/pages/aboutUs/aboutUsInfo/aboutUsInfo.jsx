import React from "react";
import s from './aboutUs.module.css'

import OurStory from "./ourStory";
import OurMission from "./ourMission";

const AboutUsInfo = () => { 
    return(

        <section className="wrapper">

        
            <div class={s.tottori__all}> 
            <OurStory />
             {/* <OurMission /> */}    
       
            
        </div>
    </section>
       

    )
}

export default AboutUsInfo;