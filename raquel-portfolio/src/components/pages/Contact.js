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
                    <div className="col s12 m5">
                        <div className="card">
                            <div className="card-content">
                                <p className="valign-wrapper">
                                    <i className="fas fa-phone-square-alt "></i> &nbsp;
                                    (407) 386-3584‬
                                </p>
                                <br></br>
                                <p className="collection-item valign-wrapper">
                                    <i className="fas fa-envelope-square"></i>&nbsp;&nbsp;
                                    <span>Raquel@cdecompanion.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m7">
                        <ContactForm />
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

export default Contact;
