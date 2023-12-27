import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
  
      <footer>
        <div className="upperDiv container">
          <div className="innerDiv row">
            <div className="innerContent col">
              <div id="innerContent1">
                <h5 id="headerFive ">
                  <span className="redColour">Ship</span>
                  <span className="whiteColour" id="up">
                    Up
                  </span>
                </h5>
                <p id="firstPara">
                  ShipUp delivers an unparalleled<br/>customer service through
                  dedicated <br/>customer teams, engaged people<br/>working in an agile
                  culture, and a<br/>global footprint
                </p>
              </div>
              <div className="innerContent2">
                <p className="explore">Explore</p>
                <div className="innerContent2Bottom">
                  <p className="listItemP">About Us</p>
                  <p className="ourWarehouses">Our warehoueses</p>
                  <p className="listItemP">Blog</p>
                  <p className="listItemP">News and Media</p>
                </div>
              </div>
              <div className="innerContent3">
                <p className="legal">Legal</p>
                <div className="innerContent3Down">
                  <p className="terms">Terms</p>
                  <p className="privacy">Privacy</p>
                </div>
              </div>
              <div className="innerContent4">
                <p className="socialMedia">social media</p>
                <div className="socialIcons">
                  <div className="logo">
                    <i class="bi bi-facebook"></i>
                  </div>
                  <div className="logo">
                    <i class="bi bi-twitter"></i>
                  </div>
                  <div className="logo">
                    <i class="bi bi-whatsapp"></i>
                  </div>
                  <div className="logo">
                    <i class="bi bi-instagram"></i>
                  </div>
                  ``
                </div>
              </div>
            </div>
            <div className="innerContentBottom">
                <hr />
            

            <p><span className="whiteColour">Ship</span><span className="lastUp">Up</span><span className="ng">.ng</span></p>

            </div>
            
          </div>
        </div>
      </footer>
     
    </>
  );
}

export default Footer;
