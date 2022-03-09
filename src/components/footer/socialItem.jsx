import React from "react";

const SocialItem = ({social}) => {
    return (
    
            <li>
            <a href="#">
                <img src={social.img} alt="whatsapp"/> 
                <img src="../../assets/main-img/Mask instagram.svg" alt="" />
            </a>
          </li>
        
    )
}

export default SocialItem;