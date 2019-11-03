import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Portable SAM</h2>
            <img src="https://svgsilh.com/svg/2027366.svg" alt="avatar" />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              The European languages are members of the same family. Their
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent className="contact-list-1">
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (123) 7890-3456
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="contact-list-2">
                    <i className="fa fa-at" aria-hidden="true" />
                    Someone@example.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="contact-list-3">
                    <i className="fa fa-facebook-square" aria-hidden="true" />
                    Example
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
