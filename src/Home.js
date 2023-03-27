//class component

import React from "react";
class Home extends React.Component {
  //state defining
  constructor() {
    super();
    this.state = {
      name: "peter",
      email: "jain.bhavy@gmail.com",
      count: 0,
    };
  }
  updateState() {
    this.setState({
      name: "bruce",
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <h2>Count {this.state.count}</h2>
        hello {this.state.name}
        <h2>{this.state.email}</h2>
        <button
          onClick={() => {
            this.updateState();
          }}
        >
          Update name
        </button>
      </div>
    );
  }
}

export default Home;

//defined with class keyword
//have return method inside render
