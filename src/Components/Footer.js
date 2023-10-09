import React from 'react';
import {LinkedIn} from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import {Email} from '@material-ui/icons';
import {WhatsApp} from '@material-ui/icons';
import '../Styles/Footer.css';
function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
            <LinkedIn/>
            <GitHub/>
            <Email/>
            <WhatsApp/>

            </div>
            <p> &copy; 2023 vaibhav.com</p>
        </div>
    );
}

export default Footer;