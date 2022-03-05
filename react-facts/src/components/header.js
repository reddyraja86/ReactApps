import logo from '../images/react-logo.svg';
import './header.css';


function Headertop(){

    return (
       <div> This is Header
           <header className="header">
                <img src={logo} className="headerlogo"></img>
                <h1 className="headerFont">ReactFacts</h1>
                <h3 className="headerTitle"> React Course - Project 1 </h3>
           </header>

       </div>
    );
}

export default Headertop;