import React, { Component } from 'react';
import {Link} from 'react-router';


class Homepage extends Component {


    render() {
        return (
            <div className="homepage">
                <Link to="/g-m"><div className="g-m">G-M</div></Link>
                <div className="middle">
                   <Link to="/a-f"> <span className="a-f">A-F</span></Link>
                    <span className="space">space</span>
                   <Link to="/n-t"> <span className="n-t">N-T</span></Link>
                </div>
                <Link to="/u-z"><div className="u-z">U-Z</div></Link>
            </div>
        );
    }
}

export default Homepage;
