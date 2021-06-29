import React from "react";
import { Parallax } from 'react-materialize';
import galaxy from "../../assets/images/parallax2.jpeg";
import ContactForm from "../ContactForm";

const Contact = () => (
    <main>
        <div className="section white">
            <div className="row container">
                <h2 className="grey-text text-darken-3 lighten-3 ">Contact Me</h2>
                <div className="row">
                    <div className="col xl4">
                        <ul className="collection z-depth-1">
                            <li className="collection-item valign-wrapper">
                                <i className="fas fa-phone-square-alt mr"></i>
                                <p>‪(407) 386-3584‬</p>
                            </li>
                            <li className="collection-item valign-wrapper">
                                <i className="fas fa-envelope-square mr"></i>
                                <p>Raquel@cdecompanion.com</p>
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
                src={galaxy} />}
            options={{
                responsiveThreshold: 0
            }}></Parallax>
    </main>
);

export default Contact;
