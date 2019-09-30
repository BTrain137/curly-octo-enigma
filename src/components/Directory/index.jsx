import React, { Component } from "react";
import MenuItem from "../MenuItem";
import "./Directory.styles.scss";

import sections from "./directory.data.js";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: sections
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
