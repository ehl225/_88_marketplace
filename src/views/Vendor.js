import React from 'react';
// import instagram_logo from '../images/';
// import facebook_logo from '../images/';
// import fbLogo from '../images/fb-logo-1.png';
// import igLogo from '../images/ig-logo-4.jpg';

export default class Vendor extends React.Component {

    render() {
        return (
            <div className="vendor">
                <h2 className="vendor-name">{this.props.name}</h2>
                <div className="vendor-content">
                <a href={this.props.website} target="_blank" rel="noreferrer"><img className="vendor-logo" src={this.props.logo} alt={`${this.props.name} Logo`} /></a>
                {/* <section className="vendor-images">
                    {this.props.images.map((image) => {
                        return <img src={image} alt="Business images" />
                    })}
                </section> */}
                {/* <section className="social-link-container">
                <a href={this.props.instagram} target="_blank" rel="noreferrer" className="vendor-instagram"><img className="social-link vendor-instagram" src={igLogo} alt={`${this.props.name} Instagram`}/></a>
                <a href={this.props.facebook} target="_blank" rel="noreferrer" className="vendor-facebook"><img className="social-link vendor-facebook" src={fbLogo} alt={`${this.props.name} Facebook`}/></a>
                </section> */}
                </div>
            </div>
        )
    }
}
