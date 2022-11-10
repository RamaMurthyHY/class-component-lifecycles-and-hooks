import React from "react";
import Counter from "./Counter";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 50,
    };

    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
    this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });
    this.seedGenerator = () =>
      this.setState({ seed: Number.parseInt(Math.random() * 100) });
  }

  render() {
    return (
      <div>
        <button
          className="btnStyle"
          disabled={this.state.mount}
          onClick={this.mountCounter}
        >
          Mount
        </button>
        <button
          className="btnStyle"
          disabled={!this.state.mount}
          onClick={this.unmountCounter}
        >
          Un-Mount
        </button>
        <button className="btnStyle" onClick={this.ignoreProp}>
          Ignore Props
        </button>

        <button className="btnStyle" onClick={this.seedGenerator}>
          Generate seed
        </button>
        <div>{this.state.ignoreProp}</div>
        <br />
        {this.state.mount ? (
          <Counter ignoreProp={this.state.ignoreProp} seed={this.state.seed} />
        ) : null}
      </div>
    );
  }
}

export default ClassComponent;
