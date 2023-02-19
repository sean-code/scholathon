
// import './contact.css';

import React, { Component }  from 'react';
import { render } from 'react-dom';

class Contact extends Component {
    render(){
        return(
            <>
            <h1>Elegant Contact Form</h1>
            <form class="cf">
                <div class="half left cf">
                    <input type="text" id="input-name" placeholder="Name" />
                    <input type="email" id="input-email" placeholder="Email address" />
                    <input type="text" id="input-subject" placeholder="Subject" />
                </div>
                <div class="half right cf">
                    <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
                </div>  
                <input type="submit" value="Submit" id="input-submit" />
            </form>
            </>
            
        );
    }
}

export default Contact;