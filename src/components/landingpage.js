/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div className="landing-body">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://svgsilh.com/svg/2027366.svg"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Beginner Front-End Developer</h1>
              <hr />
              <p>HTML/CSS | JS | React</p>

              <div className="social-links">
                {/* FaceBook */}
                <a
                  href="https://www.facebook.com/hanSaemLicht"
                  rel="developer facebook"
                  target="_blank"
                >
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/PortableSAM"
                  rel="developer facebook"
                  target="_blank"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
