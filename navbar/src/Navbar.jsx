import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data.js";

const Navbar = () => {
  console.log(links);
  console.log(social);

  const[showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linkRef = useRef(null)

  const toggleLink = () => {
    setShowLinks(!showLinks)
  }

  useEffect(()=>{
    const linksHeight = linkRef.current.getBoundingClientRect().height;

    if(showLinks){
        linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
        linksContainerRef.current.style.height = 0;
    }

  }, [showLinks])


  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLink}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref = {linksContainerRef}>
          <ul className="links" ref={linkRef} >
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
