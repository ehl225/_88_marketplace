import React from 'react';
import Vendor from './Vendor';
import _312fishmarket_logo from '../images/food_court_pictures/_312fishmarket_logo.png';
import bbqking_logo from '../images/food_court_pictures/bbqking_logo.png';
import chiuquonbakery_logo from '../images/food_court_pictures/chiuquonbakery_logo.png';
import cropculture_logo from '../images/food_court_pictures/cropculture_logo.png';
import dama_logo from '../images/food_court_pictures/dama_logo.png';
import coming_soon_logo from '../images/food_court_pictures/coming-soon-logo.png';
import DSC00768 from '../images/food_court_pictures/312_FISH_MARKET/DSC00768.jpg';
import DSC00788 from '../images/food_court_pictures/312_FISH_MARKET/DSC00788.jpg';
import DSC00802 from '../images/food_court_pictures/312_FISH_MARKET/DSC00802.jpg';
import DSC00829 from '../images/food_court_pictures/312_FISH_MARKET/DSC00829.jpg';
import _11_0541 from '../images/food_court_pictures/CHIU QUON BAKERY/11-0541.jpg';
import _11_3730 from '../images/food_court_pictures/CHIU QUON BAKERY/11-3730.jpg';
import _11_06651 from '../images/food_court_pictures/CHIU QUON BAKERY/11-06651.jpg';
import _11_08277 from '../images/food_court_pictures/CHIU QUON BAKERY/11-08277.jpg';
import _11_9948 from '../images/food_court_pictures/CHIU QUON BAKERY/11-9948.jpg';


const vendorImages = {
    _312fishmarket: [DSC00768, DSC00788, DSC00802, DSC00829],
    bbqking: [],
    chiuquonbakery: [_11_0541, _11_3730, _11_06651, _11_08277, _11_9948],
    cropculture: [],
    dama: [],
    fattiger: []

};

const vendors = [
    {
        name: "312 Fish Market",
        logo: _312fishmarket_logo,
        website: "https://312fishmarket.com/",
        instagram: "https://www.instagram.com/312fishmarket/",
        facebook: "https://www.facebook.com/312fishmarket",
        images: vendorImages._312fishmarket 
    },
    {
        name: "B.B.Q King",
        logo: bbqking_logo,
        website: "http://www.bbqkingonline.com/",
        instagram: null,
        facebook: "https://www.facebook.com/pages/BBQ%20King%20House/113579742008458/",
        images: vendorImages.bbqking 
    },
    {
        name: "Chiu Quon Bakery & Dim Sum",
        logo: chiuquonbakery_logo,
        description: "Chiu Quon Bakery is a legendary staple in Chicago's Chinatown neighborhood. Now, you can also find them inside of 88 Marketplace! Whether you're looking for buns, pastries, or cakes, Chiu Quon should hit the sweet spot.",
        website: "http://www.cqbakery.com/",
        instagram: "https://www.instagram.com/chiuquonbakery/",
        facebook: "https://www.facebook.com/cqbakery",
        images: vendorImages.chiuquonbakery 
    },
    {
        name: "Crop Culture",
        logo: cropculture_logo,
        website: null,
        instagram: "https://www.instagram.com/drinkcropculture/",
        facebook: "https://www.facebook.com/Crop-Culture-104550768041781",
        images: vendorImages.cropculture 
    },
    {
        name: "Dama",
        logo: dama_logo,
        website: null,
        instagram: "https://www.instagram.com/damaeats/",
        facebook: null,
        images: vendorImages.dama 
    },
    {
        name: "Fat Tiger",
        logo: coming_soon_logo,
        website: null,
        instagram: null,
        facebook: null,
        images: vendorImages.fattiger 
    }
    
];

class FoodCourt extends React.Component {
    render() {
        return (
            <div className="page-container" id="food-court-container">
                <h1 className="page-title" id="food-court-title">Satisfy Your Cravings</h1>
                <div id="vendor-list-container">
                {vendors.map((vendor, index) => {
                    return < Vendor key={index} name={vendor.name} logo={vendor.logo} website={vendor.website} instagram={vendor.instagram} facebook={vendor.facebook} images={vendor.images}/>
                })}
                </div>
            </div>
        )
    }
}

export default FoodCourt;