import React from 'react';
import {email, phone} from '../App.js';
import fbLogo from '../images/fb-logo-1.png';
import igLogo from '../images/ig-logo-4.jpg';
import yelpLogo from '../images/yelp-logo-4.jpg';

const facebookLink = 'https://www.facebook.com/88MarketplaceChicago/';
const instagramLink = 'https://www.instagram.com/88marketplace_chicago/';
const yelpLink = 'https://www.yelp.com/biz/88-marketplace-chicago-4';


class Footer extends React.Component {
    render() {
        return (
            <footer>
            <div className="footer-container">
                <div className="table-footer-container">
                <table className="table-footer">
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Hours</th>
                            <th>Mailing List</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2105 S. JEFFERSON ST.</td>
                            <td>{email}</td>
                            <td>Open Daily</td>
                            <td><input id="footer-email-input" type="email" placeholder="Enter your email here" /></td>
                        </tr>
                        <tr>
                            <td>CHICAGO, IL 60616</td>
                            <td>{phone}</td>
                            <td>8:00AM-8:00PM</td>
                            <td><button type="submit" id="footer-email-button">Suscribe</button></td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className="social-media">
                    <a href={facebookLink}><img className="social-media-icon" src={fbLogo} alt="Facebook logo" /></a>
                    <a href={instagramLink}><img className="social-media-icon" src={igLogo} alt="Instagram logo" /></a>
                    <a href={yelpLink}><img className="social-media-icon" src={yelpLogo} alt="Yelp logo" /></a>
                </div>
            </div>
            </footer>
        )
    }
}

export default Footer;