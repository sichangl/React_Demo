import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export class StateFulComponent extends React.Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      age: 1
    };
  }
  componentWillUnmount() {
    console.log("will unmount");
  }

  componentDidUpdate() {
    console.log("did update");
  }
  componentDidMount() {
    console.log("did mount");
  }
  render() {
    console.log("render");
    return <button onClick={this.handleClick}>Welcome</button>;
  }

  handleClick = () => {
    this.setState({
      age: 2
    });
  };
}
