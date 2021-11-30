import React from 'react';
import './About.css';
import Award from '../../img/award.png';
import photographer from '../../img/photograp.JPG';

const About = () => {
    return (
        <div className="about" id="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={photographer} className="about-img" alt="" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                   Hey, I'm an Independent Curious Developer.
                </p>
                <p className="a-desc">
                    Have a look through some of my Projects. Need Help with an upcoming project or a application? Learn a bit more about me and then consider hiring me.
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">International Design Awards 2021</h4>
                        <p className="a-award-desc">
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;