import React from 'react';
import {address, email, phone, hours} from '../App.js';
const parking = "Lot and street parking are available for our guests";
const about = "We are Chicago's largest Chinese Supermarket! At 88 Marketplace, we strive to nourish and enrich local and interstate communities by providing fresh and high-quality products at a great value, exceptional service, and committing ourselves in fostering the growth of our employees and communities.";

class AboutUs extends React.Component {
    render() {
        return (
            <div  className="page-container" id="about-us-container">
                <div className="background-overlay"></div>
                <div className="about-us-info overlay-top" >
                <h1 className="page-title overlay-top" id="about-us-title">About 88!</h1>
                    <p className="about-us-inner-info overlay-top">{about}</p>
                </div>
                <div className="store-info overlay-top" id="store-info-container">
                    <div className="store-inner-info">
                    <h2 className="store-info overlay-top" id="store-info-title">Hours &amp; Location</h2>
                    <p className="store-info overlay-top" id="about-address">{address} <span id="second-floor">(second floor)</span></p>
                    <p className="store-info overlay-top" id="about-parking">{parking}</p>
                    <p className="store-info overlay-top" id="about-hours">{hours}</p>
                    <p className="store-info overlay-top" id="about-email">{email}</p>
                    <p className="store-info overlay-top" id="about-phone">{phone}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;
