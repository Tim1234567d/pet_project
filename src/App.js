import './App.css';
// import Header from './components/header/header';
import Header from './components/header/header';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  Routes
} from "react-router-dom"
// import PageServices from './components/pages/Services/serviceInfo';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import AboutUsInfo from './components/pages/aboutUs/aboutUsInfo';
import ContactUs from './components/pages/contactUs/contactUs';
// import ServiceInfo from './components/pages/Services/serviceInfo';
// import Services from './components/home/services/services';
import AllServices from './components/pages/Services/allServicePage';

function App() {
  return (
    <div className="App">
     <Header />
   
 
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/services' element = { <AllServices />} /> 
      <Route path='/aboutUsInfo' element= {<AboutUsInfo />}/>
      <Route path='/contactUs' element= {<ContactUs />}/>
    </Routes>
    <Footer />


    </div>
  );
}

export default App;
