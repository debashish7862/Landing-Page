import React, { useState } from "react";
import "./main.css";
import image from "./images/img.png";


function Main() {

  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };
  

  return (
    <>
      <div className="main row ">
        <div className="mainUpperDiv col">
          <div className="upperLeft col-md">
          <svg width="492" height="792" viewBox="0 0 492 792" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="44" cy="344" r="447.5" stroke="#BCBDED" stroke-opacity="0.5"/>
</svg>
            <div className="upperLeftTop list-group-flush ">
              <h2 className="upperLeftHading card-header list-group-item ">
                <span className="quickAndReliable">Quick & Reliable</span>
                <span className="wl">Warehousing</span> <br />
                <span className="and">and</span>
                <span className="wl">Logistics</span>
                <span className="solution"> Solution.</span>
              </h2>
              <p className="upperLeftPara list-group-item">
                ShipUp delivers an unparalleled customer service through
                dedicated customer teams, engaged <br /> people working in an
                agile culture, and a global footprint
              </p>
            </div>

            <div className="upperLeftButton list-group-flush">
              <div className="joinNow">
                <button className="buttonJoinNow list-group-item">
                  Join Now
                </button>
              </div>
              <div className="videoIcon">
                <button
                  onClick={openModal}
                  id="videolink"
                  className="videoIcon list-group-item"
                >
                  <i class="bi bi-camera-reels-fill"></i>
                  {modal ? (
                    <div className="modal_div">
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <button
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                >Close</button>
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                     Spinning
                    </div>
                  ) : null}
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/HUozIpTODZQ?si=9uAUCzONhklreGtI"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
          </div>
        ) : null}
                </button>
              </div>

              
              
              <span className="playDemo list-group-item">Play Demo</span>
            </div>
          </div>
          <div className="upperRight col-md">
            <img src={image} alt="image" className="img-fluid" />
          </div>
        </div>
        <div className="form">
          <div className="box">
            <div className="input">
              <span>Origin</span>
              <input
                type="text"
                className="icon1"
                placeholder="Enter Location"
              />
              <i class="bi bi-geo-alt-fill"></i>
            </div>
            <div className="input">
            <span>Destination</span>

              <input
                type="text"
                className="icon1"
                placeholder="Enter Location"
              />
              <i class="bi bi-geo-alt-fill"></i>
            </div>
            <div className="input">
            <span>Weight</span>
              <input type="text" className="icon1" placeholder="Weight(KG0)" />
              <i class="bi bi-handbag-fill"></i>
            </div>
            <div className="inputButton">
              <button className="inputButtonInner">Check Price</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
