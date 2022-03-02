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
import PageServices from './components/pages/Services/pageServices';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import AboutUsInfo from './components/pages/aboutUs/aboutUsInfo';
import ContactUs from './components/pages/contactUs/contactUs';
import ServiceInfo from './components/pages/Services/pageServices';

function App() {
  return (
    <div className="App">
     <Header />
   
 
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/services' element = { <ServiceInfo />} /> 
      <Route path='/aboutUsInfo' element= {<AboutUsInfo />}/>
      <Route path='/contactUs' element= {<ContactUs />}/>
    </Routes>
    <Footer />


    </div>
  );
}

export default App;
