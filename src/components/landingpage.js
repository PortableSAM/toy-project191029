import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Beginner Front-End Developer</h1>
              <hr />
              <p>HTML/CSS | JavaScript | React | React Native</p>

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
