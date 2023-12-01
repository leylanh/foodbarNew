
import { useState } from 'react';
import './Footer.css';

export default function Footer() {
  let [email,setEmail] = useState(' ')
  let handleChange = (e) =>{
    setEmail(e.target.value);
  }
  let Submit = () => { 
    setEmail(' ');
  }

  return (
    <div className="footer">
      <div className='upper_footer'>
        <div>
          <h6 class="footer_title">Top Products</h6>
          <ul className='list'>
            <li><a href="#">Managed Website</a></li>
            <li>
              <a href="#">Manage Reputation</a>
            </li>
            <li>
              <a href="#">Power Tools</a>
            </li>
            <li>
              <a href="#">Marketing Service</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 class="footer_title">Quick Links</h6>
          <ul className='list'>
            <li><a href="#">Jobs</a></li>
            <li>
              <a href="#">Brand Assets</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 class="footer_title">Features</h6>
          <ul className='list'>
            <li><a href="#">Jobs</a></li>
            <li>
              <a href="#">Brand Assets</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 class="footer_title">Resources</h6>
          <ul className='list'>
            <li><a href="#">Guides</a></li>
            <li>
              <a href="#">Research</a>
            </li>
            <li>
              <a href="#">Experts</a>
            </li>
            <li>
              <a href="#">Agencies</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 class="footer_title">Newsletter</h6>
          <p className='footer_p'>Stay updated with our latest trends</p>
          <label className='submit'>
            <input name="EMAIL" value={email} onChange={handleChange} placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address '" required="" type="email" />
            <button class="sub-btn" onClick={Submit}>
              →
            </button>
          </label>
        </div>
      </div>
      <div className='lower_footer'>
        <div>
          <p class="col-lg-8 col-md-8 footer-text m-0">
            Copyright ©
            2023 All rights reserved | This template is made with <i class="fa fa-heart-o"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
          </p>
        </div>
        <div class="social">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-dribbble"></i>
          </a>
          <a href="#">
            <i class="fa fa-behance"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

