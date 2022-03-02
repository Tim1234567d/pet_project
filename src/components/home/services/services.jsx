import React from "react"
import Place from "./place";
import axios from "axios";
import { fetchTopPlaces } from "../../../redux/actions/topPlaces";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
 
const TopPlaces = () => {

  const topPlaces = useSelector((state) => state.topPlaces.topPlaceItems);
   const dispatch = useDispatch();
   console.log(topPlaces)
  
  useEffect(() => {
    dispatch(fetchTopPlaces());
  
  }, []);
 

  console.log("topPlaces :", topPlaces);
  

return (
    <section className="section-tours">
      <div className="wrapper">
        <h2 className="top__title section-title">НАШИ УСЛУГИ</h2>
        <div className="top__cards">

        <Place  />
        </div>
      </div>
    </section> 
    )

}

export default TopPlaces;
