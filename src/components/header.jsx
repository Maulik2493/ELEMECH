import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll"
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                    e.target.style.boxShadow =
                      "0 5px 15px rgba(255, 255, 255, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
