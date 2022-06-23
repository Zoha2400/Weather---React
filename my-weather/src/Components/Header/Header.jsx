import React from "react";
import './Header.css'

const Header = () => {

    return(
        <div className="Header">
            <div className="Centrier-h">
                <div className="Brand">Weather<d>Info</d></div>
                <div className="buttons">
                    <div className="headerItem">Forecast</div>
                    <div className="headerItem">Climate Change</div>
                    <div className="headerItem">Photos</div>
                    <div className="headerItem">News</div>
                </div>
            </div>
        </div>
    )

}

export default Header;