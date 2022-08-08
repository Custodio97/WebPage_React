import React, { useState } from "react";
import Home from "../Home";
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs'
import Navbar from "../Navbar";
import About from "../About";
import Service from "../Service";
import Blog from "../Blog";
import Contact from "../Contact";
import Footer from "../Footer";

function Body() {
    const [color, setColor] = useState(false)
    const handleClick = () => {
        setColor(current => !current)
    }

    return (
        <div className="App" style={{

            backgroundColor: color ? "#EFF2EF" : "#082944"


        }}>
            <button className="color" onClick={handleClick}>
                {color ? <BsFillMoonFill color="#299af5" /> : <BsSunFill color="#FFE156" />}
            </button>
            <Navbar/>
            <Home />
            <About/>
            <Service />
            <Blog />
            <Contact />
            <Footer/>
        </div>
    );
}

export default Body;
