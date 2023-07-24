import React from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <React.Fragment>
        <header>
            <h1>Medicine Inventory</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
    </React.Fragment>
};

export default Header;