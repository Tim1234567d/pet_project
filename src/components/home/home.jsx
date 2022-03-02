import React, { useEffect} from "react";
// import Slider from "./slider/slider";
// import { SliderData } from "./slider/sliderData";
// import TopPlaces from "./topPlaces/topPlaces"
// import GetInTouch from "./getInTouch/getInTouch";
// import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import GetInTouch from "./getInTouch/getInTouch";
// import Info from "./info/info";
// import Price from "./price/price";
import MainImg from "./mainImg/mainImg";
import Price from "./price/price";
import Services from "./services/services";
import ChooseUs from "./whyChooseUs/ChooseUs";



const Home = () => {
  const { topPlacesId } = useParams();

  // const dispatch = useDispatch();

    return (
        <div>
          {/* <Slider slides={SliderData}/>  */}
          {/* <TopPlaces/> */}
          {/* <Info /> */}
          {/* <Price /> */}
          {/* <GetInTouch/> */}
          <MainImg />
          <Services />
          <ChooseUs />
          <Price />
          <GetInTouch />
          
        </div>
    );
}

export default Home;

