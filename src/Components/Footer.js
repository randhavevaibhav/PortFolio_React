import React from 'react';

function Footer() {
    return (
        <div className='footerB'>
            <footer className="container-fluid footer" id="footer">
    {/* social media icons */}
    <div className="social-icons mt-4">
      {/* <a href="https://www.facebook.com/" target="_blank">
        <i className="fab fa-facebook" />
      </a> */}
      {/* <a href="https://www.instagram.com/" target="_blank">
        <i className="fab fa-instagram" />
      </a> */}
      {/* <a href="https://www.twitter.com/" target="_blank">
        <i className="fab fa-twitter" />
      </a> */}
      <a href="https://www.linkedin.com/in/vaibhav-randhave-b8b099205/" target="_blank">
        <i className="fab fa-linkedin" />
      </a>
      {/* <a href="https://www.twitch.tv/" target="_blank">
        <i className="fab fa-twitch" />
      </a> */}

      <a href="https://github.com/randhavevaibhav" target="_blank">
      <i className="fab fa-github "></i>
      </a>
    </div>
  </footer>
        </div>
    );
}

export default Footer;