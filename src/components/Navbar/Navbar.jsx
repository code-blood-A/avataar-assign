import React, { useState, useEffect } from 'react';

// import DropDown from "./Ddown"
import Ddown from '../Ddown/Ddown';
import './navbar.scss';
import { BsCaretDownFill } from "react-icons/bs";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windows, setWindows] = useState(window.innerWidth);
  const [navItems, setNavItems] = useState([
    { label: 'Home', link: '/' },
    { label: 'About', link: '/' },
    { label: 'Contact', link: '/' },
    { label: 'dukan', link: '/' }
  ]);
  const [subItems,setSubItems]=useState([{ label: 'transport', link: '/' },
  { label: 'clothes', link: '/' },
  { label: 'dukan', link: '/' }])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windows-windowWidth>=10&&navItems.length>1) {
      const removedItem = navItems.pop();
      setSubItems((pre)=>[...pre,removedItem]);
      setNavItems([...navItems]);
      setWindows(windowWidth);
    }
    if (windowWidth-windows>=(10)&&subItems.length>1) {
      const removedItem = subItems.pop();
      setNavItems((pre)=>[...pre,removedItem]);
      setSubItems([...subItems]);
      setWindows(windowWidth);
    }
    console.log(windowWidth-windows);
  }, [windowWidth]);

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo">Navbar</a>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <div className='toggled'>
          <ul className="navbar-nav">
            {navItems.map((item, index) => (
              <Ddown key={index} item={item} />
            ))}
          <li className="nav-item dropdown">
           {/* <label htmlFor="nav-toggle" className="nav-link">More˅</label>  */}
           <div className="moreContainer">
            <p className='morebutton'>more</p>
            <BsCaretDownFill className='dropIcon'/>
           </div>
        
          <ul className="dropdown-menu">
            {subItems.map((subItem, index) => (
              <li key={index}><a href={subItem.link} className="dropdown-item">{subItem.label}</a></li>
            ))}
          </ul>
        </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// const NavItem = ({ item }) => {
//   const { label, link, subItems } = item;

//   if (subItems) {
//     return (
//       <li className="nav-item dropdown">
//         <label htmlFor="nav-toggle" className="nav-link">{label}</label>
//         <ul className="dropdown-menu">
//           {subItems.map((subItem, index) => (
//             <li key={index}><a href={subItem.link} className="dropdown-item">{subItem.label}</a></li>
//           ))}
//         </ul>
//       </li>
//     );
//   } else {
//     return (
//       <li className="nav-item">
//         <a href={link} className="nav-link">{label}</a>
//       </li>
//     );
//   }
// };

export default Navbar;