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
import PageServices from './components/pages/pageServices';
import Home from './components/home/home';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
     <Header />
   

    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/services' element = { <PageServices />} /> 
    </Routes>
    <Footer />


    </div>
  );
}

export default App;
