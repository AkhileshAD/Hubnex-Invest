import './App.css';
import Header from './Header-Section/Header';
import Middleone from './MiddleOne-Component/Middleone';
import Footer from './footer-section/Footer';
import Middlesecond from './MiddleSecond/Middlesecond';
import Middlethird from './MiddleThird/Middlethird';


function App() {
  return (
  <div className='app-con'>
    <Header/>
    <Middleone/> 
    <Middlesecond/>
    <Middlethird/>
    <Footer/>
    </div>
  )
}

export default App;
