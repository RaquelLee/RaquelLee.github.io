import React from "react";
import { Parallax } from 'react-materialize';

const PortfolioPage = (props) => (
    <main>
        <div className="section white">
            <div className="row container">
                <h2 className="deep-purple-text darken-4">Portfolio</h2>
                {props.children}
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

export default PortfolioPage;