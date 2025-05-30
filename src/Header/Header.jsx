import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import HeaderLinks from "./HeaderLinks";
import { FaBars } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import LogoPhoto from '../images/Muhammad.jpg'
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";

function Header({openSide , openearch}) {


  return (
    <header className="Header">
      <div className="Header__Logo">
        <img className="Header__Logo__Photo" src={LogoPhoto} alt="Logo" />
        <span className="Header__Logo__Tag">Kathrina</span>
      </div>

      <div className="Header__Other">
        <div className="Header__Links">
          {HeaderLinks && HeaderLinks.length > 0
            ? HeaderLinks.map((item, index) => (
                <a
                
                  className="Header__Links__Link" 
                  href={item.path}
              
                >
                  {item.name}
                </a>
              ))
            : null}
          
        </div>
        <ThemeToggle />
        {/* <div className="Header__Search">
          <input
            className="Header__Search__Input"
            type="search"
            placeholder="Search Here"
          />
          <BsSearch className="Header__Search__Icon"  onClick={openearch}/>
        </div> */}
        <div className="Header__Social__Media">
          <a target="_blank" href="#" className="Header__Social__Media__Link">
            <BsInstagram className="Header__Social__Media__Link__Icon" />
            <span className="Header__Social__Media__Link__Name">Instagram</span>
          </a>
          <a target="_blank" href="#" className="Header__Social__Media__Link">
            <BsLinkedin className="Header__Social__Media__Link__Icon" />
            <span className="Header__Social__Media__Link__Name">LinkedIn</span>
          </a>
          <a target="_blank" href="#" className="Header__Social__Media__Link">
            <BsGithub className="Header__Social__Media__Link__Icon" />
            <span className="Header__Social__Media__Link__Name">Github</span>
          </a>
        </div>
      <FaBars  className="Header__Bars__Icons" onClick={openSide}/>
      </div>
      {/* <FaBars  className="Header__Bars__Icons"/> */}
    </header>
  );
}

export default Header;
