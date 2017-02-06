import React from 'react';
import logo from './logo.svg';
import './Footer.css';

const Footer = () =>
    <footer className='footer-main'>
        <p className='created-by'>
            <img src={logo} className='react-logo' alt='React logo'/>
            Created by&nbsp;
            <a target='_blank' rel='noopener' href='https://brentoncozby.com'>Brenton Cozby</a>
            &nbsp;with&nbsp;
            <a target='_blank' rel='noopener' href='https://github.com/facebookincubator/create-react-app'>create-react-app</a>.
        </p>
    </footer>;

export default Footer;
