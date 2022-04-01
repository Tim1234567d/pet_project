import React from "react"
import s from './aboutUs.module.css'



const OurStory = () => {  
     return (
        <>
    
                <div className={s.tottori__cards}>
    
                    <div className={s.tottor_card-1}>
                        <img src="https://am-bits.com/wp-content/uploads/2020/11/SN-201-1024x684.jpg" alt="tottori" className={s.aboutUsImg}/>
                    </div>   
                </div>
    
                <div className={s.tottori__cards}>
    
                    <div className={s.tottori_text-1}>
    
                        <div className={s.title-1}> <h2 className={s.title-1-1}>Prefecture in Focus: Tottori</h2></div>
    
                        <div className={s.subtitle-1}><p className={s.subtitle-1-1}>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door, </p></div>
    
                            {/* <div><a href="#" className="card-link">VIEW PREFECTURE</a></div> */}
                    </div>
                </div>
                

                <div className={s.tottori__cards}>

    <div className={s.tottori_text-1}>

        <div className={s.title-1}> <h2 className={s.title-1-1}>Prefecture in Focus: Tottori</h2></div>

        <div className={s.subtitle-1}><p className={s.subtitle-1-1}>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door, </p></div>

            {/* <div><a href="#" className="card-link">VIEW PREFECTURE</a></div> */}
    </div>
                </div>
                <div className={s.tottori__cards}>
    
                   <div className={s.tottor_card-1}>
        <img src="https://massimo-group.com/wp-content/uploads/2018/12/happy-successful-multiracial-business-team-giving-people-working-together-ss.jpg" alt="tottori" className={s.aboutUsImg}/>
                     </div>   
                </div>
                </>
    


           
        


        )

}
export default OurStory;