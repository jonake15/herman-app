import React from "react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <>
      <div className="footerContainer">
        {/* &#169;Copyright */}
        <div className="content-footer">
          <h2>REAL</h2>
          <br />
          <h2>ESTATE</h2>
          <ul>
            <p style={{ padding: "0.2rem", fontSize: "small" }}>
              Your trusted form for best houses and apartments in Uganda{" "}
            </p>
          </ul>
        </div>
        <div className="content-footer">
          <h3>Explore</h3>
          <br />
          <p>Home</p>
          <p>Houses</p>
          <p>Services</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="content-footer">
          <h3>Follow Us</h3>
          <br />
          <p>
            <i class="bi bi-instagram" aria-hidden="true"></i>Instagram
          </p>
          <p>
            <i class="bi bi-twitter" aria-hidden="true"></i>Twitter
          </p>
          <p>
            <i class="bi bi-facebook" aria-hidden="true"></i>Facebook
          </p>
          <p>
            <i class="bi bi-linkedin" aria-hidden="true"></i>LinkedIn
          </p>
        </div>
        <div className="content-footer">
          <h3>Explore</h3>
          <br />
          <p>Home</p>
          <p>Houses</p>
          <p>Services</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="content-footer">
          <h3>Follow Us</h3>
          <br />
          <p>
            <i class="bi bi-instagram" aria-hidden="true"></i>Instagram
          </p>
          <p>
            <i class="bi bi-twitter" aria-hidden="true"></i>Twitter
          </p>
          <p>
            <i class="bi bi-facebook" aria-hidden="true"></i>Facebook
          </p>
          <p>
            <i class="bi bi-linkedin" aria-hidden="true"></i>LinkedIn
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
