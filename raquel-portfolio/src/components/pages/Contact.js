import React from "react";
import { Parallax } from 'react-materialize';

const Contact = () => (
    <main>
        <div className="section white">
            <div className="row container">
                <h2 className="deep-purple-text darken-3">Contact Me</h2>
                <div className="row">
                    <div className="col xl4">
                        <ul className="collection z-depth-1">
                            <li className="collection-item valign-wrapper">
                                <i className="fas fa-phone-square-alt mr"></i>
                                <p>‪(407) 900-8098‬</p>
                            </li>
                            <li className="collection-item valign-wrapper">
                                <i className="fas fa-envelope-square mr"></i>
                                <p>rleesc94@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col s8">
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

export default Contact;
