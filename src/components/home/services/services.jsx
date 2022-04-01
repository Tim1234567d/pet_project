import React from "react"
import { useEffect } from "react";
import OneService from "./oneService";
import './services.css'
 
const Services = () => {

const Services = [
  {id:'0', title:'Генеральная уборка квартир ', text:'Генеральная уборка квартир (домов) гарантирует полный спектр клининговых мероприятий и самый тщательный подход к делу наших специалистов.', backImg:'https://static.wixstatic.com/media/e00276_bca2941d67fe4a5f82c9fc4f8e3e528e~mv2_d_4323_1769_s_2.jpg/v1/crop/x_0,y_167,w_4323,h_1602/fill/w_615,h_228,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e00276_bca2941d67fe4a5f82c9fc4f8e3e528e~mv2_d_4323_1769_s_2.jpg'}, 

  {id:'1', title:'Уборка квартир', text:'Позволяет поддерживать комфорт в вашей квартире на максимальном уровне.', backImg:'https://static.wixstatic.com/media/e00276_42760be85496478baf3318ffa1174490~mv2_d_8159_3102_s_4_2.jpg/v1/crop/x_0,y_33,w_8159,h_3035/fill/w_615,h_228,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e00276_42760be85496478baf3318ffa1174490~mv2_d_8159_3102_s_4_2.jpg'},

  {id:'2', title:'Уборка после ремонта', text:'Нашей задачей является абсолютное избавление от следов недавно проведенных строительных работ.',backImg:'https://static.wixstatic.com/media/e00276_b3e4e4fa3afc4af398037dc5c89ecb04~mv2_d_4393_1640_s_2.jpg/v1/fill/w_613,h_230,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e00276_b3e4e4fa3afc4af398037dc5c89ecb04~mv2_d_4393_1640_s_2.jpg'}, 

  {id:'3', title:'Уборка офисов', text:'Уборка кафе и ресторанов, магазинов, салонов красоты, фитнес центров и офисных помещений', backImg:'https://static.wixstatic.com/media/e00276_b7c4035ca85948108d6bba3c706ad8aa~mv2_d_5139_1919_s_2.jpg/v1/fill/w_615,h_230,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e00276_b7c4035ca85948108d6bba3c706ad8aa~mv2_d_5139_1919_s_2.jpg'}, 

  {id:'4', title:'Химчистка мягкой мебели', text:'Наша компания использует технику «KARCHER». Время сушки по этой методике может составить от двух до нескольких часов, в зависимости от ковровых волокон .', backImg:'https://static.wixstatic.com/media/e00276_e5eb7a7a2b4d4ef8a034b74ef366258e~mv2_d_6417_2680_s_4_2.jpg/v1/fill/w_613,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e00276_e5eb7a7a2b4d4ef8a034b74ef366258e~mv2_d_6417_2680_s_4_2.jpg'}, 

  {id:'5', title:'Мытьё окон', text:'Мытье окон представляет собой самые кропотливые и трудоемкие клининговые работы. Оконные стекла подвержены постоянному загрязнению во все сезоны года', backImg:'https://static.wixstatic.com/media/e00276_d61d4bfa258e4eaebffbf256cb2e228c~mv2_d_7441_2779_s_4_2.jpg/v1/fill/w_615,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e00276_d61d4bfa258e4eaebffbf256cb2e228c~mv2_d_7441_2779_s_4_2.jpg'}, 
] 
  

return (
      <section className="services">
      <div className="wrapper">
        <h2 className="services_title">НАШИ УСЛУГИ  </h2>
       
        <div className="service__cards"> 


          {Services.map( (services) => 
        <OneService services = {services} />

          )}
        </div>
      </div>
      </section>
   
    )

}

export default Services;
