import React from "react";
import { Footer } from 'react-materialize'

function Foot() {
    return (
        <Footer
            className="example"
            copyrights="&copy 2015 Copyright Text"
            links={<ul>
                <li><a className="grey-text text-lighten-3" href="#!">Resume</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">LinkedIn</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">GithHub</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Twitter</a></li>
            </ul>}
            moreLinks={
                <a className="grey-text text-lighten-4 right" href="#!">About Me</a>
            }
        >
            <h5 className="white-text">
                Footer Content
        </h5>
            <p className="grey-text text-lighten-4">
                You can use rows and columns here to organize your footer content.
        </p>
        </Footer>);
}

export default Foot;