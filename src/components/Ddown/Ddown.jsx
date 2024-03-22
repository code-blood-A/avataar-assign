import React from 'react'

function Ddown({item}) {
    const { label, link, subItems } = item;

    if (subItems) {
      return (
        <li className="nav-item dropdown">
          <label htmlFor="nav-toggle" className="nav-link">{label}</label>
          <ul className="dropdown-menu">
            {subItems.map((subItem, index) => (
              <li key={index}><a href={subItem.link} className="dropdown-item">{subItem.label}</a></li>
            ))}
          </ul>
        </li>
      );
    } else {
      return (
        <li className="nav-item">
          <a href={link} className="nav-link">{label}</a>
        </li>
      );
    }
}

export default Ddown