import React from "react";
import { Parallax } from 'react-materialize';

const About = () => (
    <main>
        <div className="section grey lighten-5">
            <div className="row container">
                <h2 className="deep-purple-text darken-4">
                    About Me</h2>
                <div className="col s3">
                    <img alt="" src="assets/images/portrait.png" className="responsive-img bw circle left z-depth-5">
                    </img>
                </div>
                <div className="col s9">
                    <h5>My name is Raquel Scofield, and I am a full-stack web developer and aspiring software engineer.</h5>
                    <p className="grey-text text-darken-3 lighten-3 ">
                        I am currently 3/4 of the way through UCF's full stack web development program where I have found I have a passion for using my skills to develop applications that solve real-world problems, which you can view in my "Portfolio" section.</p>
                    <div className="row">
                        <div className="section">
                            <div className="col m3">
                            </div>
                            <div className="col m1">
                                <i className="fab fa-js-square"></i>
                            </div>
                            <div className="col m1">
                                <i className="fab fa-node"></i>
                            </div>
                            <div className="col m1">
                                <i className="fab fa-react"></i>
                            </div>
                            <div className="col m1">
                                <i className="fab fa-bootstrap"></i>
                            </div>
                            <div className="col m1">
                                <i className="fab fa-css3"></i>
                            </div>
                            <div className="col m1">
                                <i className="fab fa-html5"></i>
                            </div>
                            <div className="col m3">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Parallax
            image={<img alt=""
                src="https://github.com/RaquelLee/RaquelLee.github.io/blob/main/assets/images/parallax2.jpeg?raw=true" />}
            options={{
                responsiveThreshold: 0
            }}></Parallax>
    </main>
);

export default About;