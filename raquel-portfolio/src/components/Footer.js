import React from "react";
import { Footer } from 'react-materialize';

function Foot() {
    return (
        <Footer
            className="center grey darken-4"
            copyrights="© 2021 Raquel Scofield"
        // links={<ul>
        //     <li><a className="grey-text text-lighten-2" href="#!">Resume</a></li>
        //     <li><a className="grey-text text-lighten-2" href="#!"> LinkedIn</a></li>
        //     <li><a className="grey-text text-lighten-2" href="#!"> GithHub</a></li>
        //     </ul>
        // }
        >
            {/* <ul>
                <a className="grey-text text-lighten-2" href="#!">Resume  |  </a>
                <a className="grey-text text-lighten-2" href="#!"> LinkedIn |  </a>
                <a className="grey-text text-lighten-2" href="#!"> Github</a>
                </ul>       */}
        </Footer>);
}

export default Foot;