import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skill from "./skill";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{ textAlign: "center" }}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img
                src="https://svgsilh.com/svg/2027366.svg"
                atl="avatar"
                style={{ height: "200px", borderRadius: "10em" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Portable SAM</h2>
            <h4 style={{ color: "gray" }}>Beginner Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "80%" }} />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "80%" }} />
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 0987-2344</p>
            <h5>Email</h5>
            <p>Someone@example.com</p>
            <h5>Web</h5>
            <p>sywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "80%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2
              style={{
                color: "#30336b",
                fontFamily: "Allan",
                fontWeight: "bold",
                paddingLeft: ".5em"
              }}
            >
              Education
            </h2>
            <Education
              startYear={2004}
              endYear={2007}
              schoolName={"Technical High School"}
              schoolDepartment={"Electron department"}
            />
            <hr style={{ borderTop: "3px solid #e29947" }} />
            <h2
              style={{
                color: "#30336b",
                fontFamily: "Allan",
                fontWeight: "bold",
                paddingLeft: ".5em"
              }}
            >
              Experience
            </h2>
            <Experience
              startYear={2008}
              endYear={2016}
              jobName={"Republic of Korea, Army"}
              jobDesctiption={
                "Field Artillery.(Last rank: Sergeant First Class)"
              }
            />
            <Experience
              startYear={2018}
              endYear={2019}
              jobName={"J.H Technology"}
              jobDesctiption={
                "Gas scrubber Maintenance and Vacuum pump Maintenance"
              }
            />
            <hr style={{ borderTop: "3px solid #e29947" }} />
            <Skill skill={"HTML/CSS"} progress={35} />
            <Skill skill={"JavaScript"} progress={30} />
            <Skill skill={"React"} progress={20} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
