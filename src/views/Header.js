import React from 'react';
import { NavLink } from "react-router-dom";
// eslint-disable-next-line
import Full_logo from "../images/LOGO/FULL_logo.png";
import WHITE_88_ONLY from "../images/LOGO/WHITE_88_ONLY.png";
const navlinkArray = [
    {
        title: "Home",
        path: "/",
        exact: true
    },  
    {
        title: "About Us",
        path: "/about-us",
        exact: false
    },
    {
        title: "Store Policies",
        path: "/store-policies",
        exact: false
    },
    {
        title: "Weekly Ad",
        path: "/weekly-ad",
        exact: false
    },
    {
        title: "Food Court",
        path: "/food-court",
        exact: false
    },
    {
        title: "Contact Us",
        path: "/contact-us",
        exact: false
    }

]

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn : true,
            screenWidth: window.innerWidth
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.displayNavigation = this.displayNavigation.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.checkNavigationMenu = this.checkNavigationMenu.bind(this);
    }

    updateWindowDimensions() {
        this.setState({screenWidth: window.innerWidth });
        this.checkNavigationMenu();
    }   
    
    componentDidMount() {
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentDidUpdate(prevState) {
        if (this.state.screenWidth !== prevState.screenWidth) {
            this.checkNavigationMenu();
        }
    }

    checkNavigationMenu() {
        let hamburgerButton = document.querySelector("#nav-toggle-bar");
        let navMenu = document.querySelector(".nav-items-container");
        let overlay = document.querySelector(".overlay");
        if(this.state.screenWidth > 900) {

            navMenu.classList.remove("display-nav-for-mobile");
            navMenu.classList.add("hide-toggle");
            overlay.classList.add("hide-for-mobile");
            hamburgerButton.classList.remove("open");
        } else if ( this.state.isToggleOn && this.state.screenWidth <= 900) {
            navMenu.classList.add("display-nav-for-mobile");
        } 
    //     else if (this.state.isToggleOn && this.state.screenWidth >= 900) {
    //         navMenu.classList.remove("display-nav-for-mobile");
    //     } else if (this.state.isToggleOn && this.state.screenWidth < 900) {
    //         this.handleToggle();      
    // }
}

    handleToggle() {
        this.checkNavigationMenu();
        if (this.state.screenWidth <= 900) {
            this.setState({ isToggleOn: !this.state.isToggleOn});
            this.displayNavigation();
        }
    }    

    displayNavigation() {
        let hamburgerButton = document.querySelector("#nav-toggle-bar");
        let navMenu = document.querySelector(".nav-items-container");
        let overlay = document.querySelector(".overlay");
        if (this.state.isToggleOn && this.state.screenWidth <= 900) {
            hamburgerButton.classList.add("open");
            navMenu.classList.add("display-nav-for-mobile");
            navMenu.classList.remove("hide-toggle");
            overlay.classList.remove("hide-for-mobile");
        } else if (this.state.screenWidth <= 900) {
            navMenu.classList.remove("display-nav-for-mobile");
            navMenu.classList.add("hide-toggle");
            overlay.classList.add("hide-for-mobile");
            hamburgerButton.classList.remove("open");
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    render() {
        const navlinks = navlinkArray.map((navlink, index) => {
            return <NavLink key={index} className="nav-path" exact={navlink.exact} to={navlink.path} onClick={this.handleToggle}>{navlink.title}</NavLink>
        })
        return (
            <header >
            <div className="header-container">
                <a href="/">
                    <span><img class="switch-logo" id="header-logo" src={WHITE_88_ONLY} alt="88 Marketplace Logo" /></span>
                </a>
                <a href="#top" id="nav-toggle-bar" onClick={this.handleToggle} >
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                </a>
                <nav className="nav-items-container hide-toggle" onClick={this.handleToggle} >
                    {navlinks}
                </nav>
                </div>
                <div className="overlay hide-for-mobile" onClick={this.handleToggle}></div>
            </header>
        )
    }
}

export default Header;

