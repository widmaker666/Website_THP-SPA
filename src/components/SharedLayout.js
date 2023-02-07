import '../styles/SharedLayout.css'
import React, { useState, useContext, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import ThemeContext from '../contexts/ThemeContext';

function SharedLayout(){

    // const [ currentTheme, setCurrentTheme ] = useState();
    const { theme, updateTheme } = useContext(ThemeContext);

    useEffect( () => {

        if (localStorage["display-choice"]) {
            const lastThemeChoice = localStorage.getItem("display-choice");
            // console.log('lastThemeChoice', lastThemeChoice);
            updateTheme(lastThemeChoice);
        } else {
            localStorage.setItem("display-choice", "light");
            updateTheme("light");
        }
      }, []);

    function handleClick(e){
        // console.log('e.target.value', e.target.value);
        var newTheme = '';
        if ( e.target.value === "light" ) { newTheme = "dark" }
        if ( e.target.value === "dark" ) { newTheme = "light" }

        updateTheme(newTheme);
 
        localStorage.setItem("display-choice", newTheme);

        // console.log('localStorage["display-choice"]', localStorage["display-choice"]);
    }

    return(
        <div id="navbar-page-container">
            <nav id="navbar">
                <div><Link to ="/" className='link'><button className='btn btn-light'>HOME</button></Link></div>
                <div><Link to ="/about" className='link'><button className='btn btn-light'>AGENCY</button></Link></div>
                <div><Link to ="/works" className='link'><button className='btn btn-light'>PROJECT</button></Link></div>
                <button
                    value = {theme}
                    onClick = { (e) => handleClick(e) }
                    className = 'btn btn-outline-light'
                >
                 { theme === "light" ? "DARK MODE" : "LIGHT MODE" }
                </button>
            </nav>
            {/* "theme" = {theme} */}
            <Outlet/>
        </div>
    )
}

export default SharedLayout;