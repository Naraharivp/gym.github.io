import React from "react";
import aboutimage from '../images/about.png';

function About() {
    return (
        <div id="about">
            <div className="about-things">
                <img src={aboutimage} alt=""/>
            </div>
            <div className="about-text">
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempora, 
                    dolorum rerum cum est repudiandae mollitia sunt quaerat ex voluptas rem dolorem non. 
                    Consequuntur minus numquam nostrum incidunt. Eaque, voluptatum.</p>
                    <button>READ MORE</button>
            </div>
        </div>
    )
}

export default About;