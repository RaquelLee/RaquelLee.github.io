import React from "react";
import { Parallax } from 'react-materialize';
import me from "../../assets/portrait.png"
import galaxy from "../../assets/parallax2.jpeg"

const About = () => (
    <main>
        <div className="section">
            <div className="row container">
                <h2 className="deep-purple-text darken-4">
                    About Raquel</h2>
                <div className="col s3">
                    <img alt="" src={me} className="responsive-img circle left z-depth-5">
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
                            <i class="fab fa-npm"></i>
                            </div>
                            <div className="col m1">
                                <i className="fab fa-react"></i>
                            </div>
                            <div className="col m1">
                            <i class="fab fa-git-alt"></i>                            </div>
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
                src={galaxy} />}
            options={{
                responsiveThreshold: 0
            }}></Parallax>
    </main>
);

export default About;
