import React from 'react';
import "./style.css";
import logo from './../img/bunlogo.png';

class NavMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            onStateChange: props.OnChange
        }
    }

  render() { 
      return (
            <div id="BBMenu" className="BBMenuWrapper">
            <div id="BBLogo" className="BBMenuLogo" onClick={() => this.state.onStateChange(0)}>
                    <img className="BBImg" src={logo} alt="Bun Bun Bakery Logo"/>
            </div>
            <div id="BBNav" className="BBMenuNav">
                <div className="BBMenuNavLinkFirst BBMenuNavItem" onClick={() => this.state.onStateChange(1)}>BUNS</div>
                <div className="BBMenuNavItem" onClick={() => this.state.onStateChange(6)}>OFFERS</div>
                <div className="BBMenuNavItem" onClick={() => this.state.onStateChange(2)}>ABOUT US</div>
                <div className="BBMenuNavItem" onClick={() => this.state.onStateChange(3)}><div>
                    <svg className="BBCart" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="CartFill" fillRule="evenodd" clipRule="evenodd" d="M35.0678 22.9425C34.4162 24.1308 33.1512 24.9167 31.7137 24.9167H17.4345L15.3262 28.75H38.3262V32.5833H15.3262C12.4128 32.5833 10.5728 29.4592 11.972 26.8908L14.5595 22.2142L7.6595 7.66668H3.82617V3.83334H10.0937L11.8953 7.66668H40.262C41.7187 7.66668 42.6387 9.23834 41.9295 10.5033L35.0678 22.9425ZM37.0036 11.5H13.7161L18.2586 21.0833H31.7136L37.0036 11.5ZM15.3262 34.5C13.2178 34.5 11.512 36.225 11.512 38.3334C11.512 40.4417 13.2178 42.1667 15.3262 42.1667C17.4345 42.1667 19.1595 40.4417 19.1595 38.3334C19.1595 36.225 17.4345 34.5 15.3262 34.5ZM30.6787 38.3334C30.6787 36.225 32.3845 34.5 34.4928 34.5C36.6012 34.5 38.3262 36.225 38.3262 38.3334C38.3262 40.4417 36.6012 42.1667 34.4928 42.1667C32.3845 42.1667 30.6787 40.4417 30.6787 38.3334Z"/>
                    </svg>
                </div></div>
            </div>
        </div>
        );
    }
}

export default NavMenu;
