import React from 'react';
import weekly_ad_02142021 from '../images/weekly_ads/weekly_ad_02142021.jpg';


class WeeklyAd extends React.Component {
    render() {
        return (
            <div className="page-container"  id="weekly-ad-container">
                <h1 className="page-title" id="weekly-ad-title">Latest Savings</h1>
                <img  className="weekly-ad" src={weekly_ad_02142021} alt="Weekly Ad"/>
            </div>
        )
    }
}

export default WeeklyAd;