import React from "react";

class Counter extends React.Component {
  constructor(props) {
    /**
     * Constructor is a special method of a class which will be used to initiate the object or state of the component
     */
    console.log("Constructor");
    super(props);

    this.state = {
      counter: 0,
      seed: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  static getDerivedStateFromProps(props, state) {
    /**
     * This is the method where it will execute at first before any other lifecycle methods
     * It can be used to copy the required props values to state
     */
    console.log("getDerivedStateFromProps");
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  render() {
    /**
     *
     */
    console.log("Render");
    return (
      <>
        <button
          className="btnStyle"
          disabled={!this.state.counter < 0}
          onClick={this.increment}
        >
          Increment
        </button>
        <button
          className="btnStyle"
          disabled={this.state.counter < 1}
          onClick={this.decrement}
        >
          Decrement
        </button>
        <div className="counter">Counter: {this.state.counter}</div>
      </>
    );
  }

  componentDidMount() {
    console.log("ComponentDIdMount");
    console.log("------------------------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log({ nextProps, nextState, props: this.props.ignoreProp });
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("shouldComponentUpdate - DO NOT RENDER");
      return false;
    }

    // if (nextState.counter === this.state.counter) {
    //   console.log("shouldComponentUpdate - DO NOT RENDER");
    //   return false;
    // }

    console.log("shouldComponentUpdate -  RENDER");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", { prevProps, prevState });
    /**
     * The getSnapshotBeforeUpdate() method is invoked just before the DOM is being rendered.
     * It is used to store the previous values of the state after the DOM is updated.
     * Any value returned by getSnapshotBeforeUpdate() method will be used as a parameter for componentDidUpdate() method.
     * This function is always used along with the componentDidUpdate() method but vice-versa isn’t true.
     * prevProps and prevState will give the data that which was there before updating
     * In below returning the previous state, that will be handled in the componentDidUpdate
     */
    return { counter: prevState.counter };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    /**
     * snapshot will get the data that was passed or returned form the getSnapshotBeforeUpdate method
     */
    console.log("componentDidUpdate", { prevProps, prevState, snapshot });
    console.log("------------------------------");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    console.log("------------------------------");
  }

  componentDidCatch(error, info) {
    /**
     * This method will prevents from breaking if any errors occurs
     * It receives two arguments those are error, info
     */
    console.log("componentDidCatch");
  }
}

export default Counter;
