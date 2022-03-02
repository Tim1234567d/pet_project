import React, { useEffect} from "react";
// import Slider from "./slider/slider";
// import { SliderData } from "./slider/sliderData";
import TopPlaces from "./topPlaces/topPlaces"
import GetInTouch from "./getInTouch/getInTouch";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Info from "./info/info";
import Price from "./price/price";
import MainImg from "./mainImg/mainImg";



const Home = () => {
  const { topPlacesId } = useParams();

  const dispatch = useDispatch();

    return (
        <div>
          {/* <Slider slides={SliderData}/>  */}
          <TopPlaces/>
          <Info />
          <Price />
          <GetInTouch/>
          <MainImg />
          
        </div>
    );
}

export default Home;

