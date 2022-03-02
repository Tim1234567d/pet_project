import React from "react"
// import Place from "./place";
// import axios from "axios";
// import { fetchTopPlaces } from "../../../redux/actions/topPlaces";
import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import OneService from "./oneService";
import './services.css'
 
const Services = () => {

const Services = [
  {id:'0', title:'Генеральная уборка квартир и домов', text:'Генеральная уборка квартир (домов) гарантирует полный спектр клининговых мероприятий и самый тщательный подход к делу наших специалистов.'}, 
  {id:'1', title:'Уборка квартир', text:'Позволяет поддерживать комфорт в вашей квартире на максимальном уровне.'}, 
  {id:'2', title:'Уборка после ремонта', text:'Нашей задачей является абсолютное избавление от следов недавно проведенных строительных работ.'}, 
  {id:'3', title:'Уборка офисов и коммерчиских помощений', text:'Уборка кафе и ресторанов, магазинов, салонов красоты, фитнес центров и офисных помещений'}, 
  {id:'4', title:'Химчистка мягкой мебели', text:'Наша компания использует технику «KARCHER». Время сушки по этой методике может составить от двух до нескольких часов, в зависимости от ковровых волокон .'}, 
  {id:'5', title:'Мытьё окон', text:'Мытье окон представляет собой самые кропотливые и трудоемкие клининговые работы. Оконные стекла подвержены постоянному загрязнению во все сезоны года'}, 
]
  

return (
    <section className="section-tours">
      <div className="wrapper">
        <h2 className="top__title section-title">НАШИ УСЛУГИ</h2>
        <div className="top__cards">


          {Services.map( (services) => 
        <OneService services = {services} />

          )}
        </div>
      </div>
    </section> 
    )

}

export default Services;
