import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategoris() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <h1>This is React</h1>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is JavaScript</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
        </Tabs>

        <section className="projects-grid">{this.toggleCategoris()}</section>
      </div>
    );
  }
}

export default Project;
