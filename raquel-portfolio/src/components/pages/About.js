import React from "react";
import { Parallax } from 'react-materialize';
import me from "../../assets/images/portrait.jpeg";
import galaxy from "../../assets/images/parallax2.jpeg";

const About = () => (
    <main>
        <div className="section">
            <div className="row container">
                <div className="col s3">
                    <h1> </h1>
                    <section><img alt="" src={me} className="responsive-img circle left z-depth-5">
                    </img></section>
                </div>
                <div className="col s9">
                    <h3>My name is Raquel Scofield, and I am a Full-Stack Web Developer.</h3>
                    <p className="grey-text text-darken-3 lighten-3 ">
                        I recently earned a certificate in Full Stack Web Development from the University of Central Florida where I found I have a passion for using my skills to develop real-world applications, which you can view in my "Portfolio" section.
                    </p>
                    <div className="row">
                        <div className="section">
                            <div className="col m2">
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
                                <i className="fab fa-git-alt"></i>
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
                            <div className="col m2">
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
