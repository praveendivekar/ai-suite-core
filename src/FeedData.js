import React, { Component } from "react";
import SelectWrapper from "./SelectWrapper";
import "./FeedData.css";

class FeedData extends Component {
  constructor(props) {
    super(props);

    this.state = {
        options: [          
            { value: "one", label: "One" },
            { value: "two", label: "Two" }
        ]        
    }
  }

  onChange = val => {
    console.log("selected", val);
  };

  render() {
    return (
      <div className="feedData-container">
        <SelectWrapper onChange={this.onChange} options={this.state.options} />
      </div>
    );
  }
}

export default FeedData;
