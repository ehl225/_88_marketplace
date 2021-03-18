import React from 'react';
import Policy from './Policy';

const policies = [
    {
        title: "Code of Conduct",
        content: "All individuals in the building must adhere to the following code of conduct guidelines, as stated below - The following activities are not permitted at the Square:",
        contentMiddle: `
        Any violation of the law or public ordinance. \n
        Any activity deemed to have the potential to disrupt the legitimate business of the property and our tenants, subtenants, contractors, and/or employees. \n
        Any activity deemed to threaten the safety of our guests, tenants, subtenants, contractors, and/or employees. \n
        Any activity deemed to threaten the well-being of the center, whether it be physical, reputational, financial, etc. \n
        Any activity deemed to disrupt our pleasant, family-oriented, shopping/dining environment. \n
        Any activity deemed to be inconsistent with the purposes of the property, which are shopping, and dining.`,
        contentEnd: "Anyone caught in violation of the Code of Conduct - Tenants, subtenants, contractors, employees and/or guests - may have the potential to be ejected and/or banned from the property. Further punishment could result in legal action & monetary fine, as appropriate."
    },
    {
        title: "Return Policy",
        content: "Due to the COVID-19 pandemic, 88 Marketplace is temporarily changing its return policy to safeguard our employees’ and customers’ health and safety. To protect our customers, associates, and community, 88 Marketplace is unable to accept product returns, exchanges, and issue refunds for the time being. We ask that everyone please make their purchases carefully as all sales are final. We appreciate your patience and understanding during this time."
    
    },
    {
        title: "Smoking Policy",
        content: "88 Marketplace is a smoke-free environment. No smoking is permitted around, or within, 15 feet of any building entrances/exits. Violators will be subject to a $100 fine."
    },
    {
        title: "Pet Policy",
        content: "No pets or animals are allowed in the building, unless they are a Service Animal. Accompanying service animals must have their harnesses and valid up-to-date certification. Violators may be ejected and/or banned from the property, and may be the subject to further legal action & monetary fine, as appropriate."
    },
    {
        title: "Covid-19 Policy",
        content: "To ensure we are following standard COIVD-19 procedure with the city of Chicago, and to ensure the safety of everyone around us, face masks are required for everyone inside the building at all times (customers, employees, etc.). Temperature checks will be required before being able to enter 88 Marketplace. In the case a guest does not pass the required temperature check, they will be asked to leave the property. Guests are allowed to bring/use reusable bags, but will be required to bag their own items."
    },
    {
        title: "Bag Tax Policy",
        content: "Beginning December 15, 2020 and in accordance with the City of Chicago’s bag tax, 88 Marketplace is instating a $0.07 bag tax for plastic bags."
    },
    {
        title: "Solicitation & Loitering",
        content: "No cameras, video recording, sound recording, or photography is allowed on premises without the explicit approval of the owners. Violators may be ejected and/or banned from the property, and may be the subject of further legal action & monetary fine, as appropriate."
    },
    {
        title: "Parking",
        content: "Handicap parking spaces are reserved for those with handicap parking privileges only. When parking in handicap spaces, please make sure your parking certificates (license plates and/or placards) are valid, up-to-date, and clearly and visibly displayed. Violators are subject to towing at the violator’s expense at the discretion of Jefferson Square management."
    },
    {
        title: "Personal Property",
        content: "88 Marketplace is not responsible for or the loss/damage of any personal property of guests within its facilities or parking areas."
    }
]

class StorePolicies extends React.Component {
    render() {
        return (
            <div className="page-container" id="store-policies-container">
                <h1 className="page-title" id="store-policies-title">Store Policies</h1>
                {policies.map((policy, index) => {
                   return (
                   <Policy  key={`policy-${index}`}title={policy.title} index={index} content={policy.content} contentMiddle={policy.contentMiddle} contentEnd={policy.contentEnd}/>
                        )
                })}
            </div>
        )
    }
}
export default StorePolicies;