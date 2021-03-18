import React from 'react';
import face_mask from '../images/face_mask.png';
import cleaning_spray from '../images/cleaning_spray.png';
import temp_check from '../images/temp_check.png';
import social_distance from '../images/social_distance.png';

const covidProcedures = [
    {
        title: "Masks",
        img: face_mask,
        description: "Masks required at all times for both customers and employees while inside 88 Marketplace."
        
    },
    {
        title: "Temperature Checks",
        img: temp_check,
        description: "Temperature checks required for everyone coming into the market."
    },
    {
        title: "Increased Disinfecting",
        img: cleaning_spray,
        description: "Increased cleaning/disinfecting of shopping carts & checkout lanes."
    },
    {
        title: "Social Distance",
        img: social_distance,
        description: "Signs and directions posted throughout the store to ensure a six foot social distance between customers."
    }
]
export default class Covid extends React.Component {
    render() {
        return (
            <div className="covid-procedures">
                <p>88 Marketplace prides itself in being Chicago's largest Asian supermarket and we do our best to maintain and ensure a great experience for everyone that comes and visits us.</p>
                <p>Our customer's safety is our main concern here at 88 and standard state COVID-19 procedures will be followed in order to ensure the best experience possible for all of our guests. These include but are not limited to:​</p>
                {covidProcedures.map((procedure, index) => {
                    return (
                        <div className="procedure" key={`procedure-${index}`}>
                            <img src={procedure.img} alt="Procedure" />
                            <span><p>{procedure.description}</p></span>
                        </div>
                    )
                })}
            </div>
        )
    }
}
