import React from 'react';
const waysToContact = "Hello! If you would like to get in touch with us, please fill out the form below. We will get back to you as soon as possible. Alternatively, you can call or stop by in person.";
class ContactUs extends React.Component {
    render() {
        return (
            <div  className="page-container" id="contact-us-container">
                <div className="background-overlay"></div>
                <h1 className="page-title" id="contact-us-title">Contact Us</h1>
                        <p className="ways-to-contact">{waysToContact}</p>
                <div id="contact-form-container">
                    <form id="contact-form">
                        <input className="contact-form-input" type="text" id="first-name" name="first-name" placeholder="First Name" required />
                        <input className="contact-form-input" type="text" id="last-name" name="last-name" placeholder="Last Name" required />
                        <input className="contact-form-input" type="email" id="email" name="email" placeholder="Email"required />
                        <select className="contact-form-input" id="reason-for-contact" name="reason">
                            <option id="reason-placeholder" defaultValue="reason-for-contact" disabled selected hidden>Reason for Contact</option>
                            <option className="contact-reason" value="work">Interest in Partnership</option>
                            <option className="contact-reason" value="customer">Customer Feedback</option>
                            <option className="contact-reason" value="other">Other</option>
                        </select>
                        <textarea className="contact-form-input" id="contact-message" name="message" placeholder="Enter your message here" required></textarea>
                        <button id="contact-form-button">Submit</button>
                    </form>
                </div>
 
            </div>
        )
    }
}

export default ContactUs;