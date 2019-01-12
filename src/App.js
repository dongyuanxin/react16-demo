import React from "react";
import { connect } from "react-redux";
import { addNum, subNum, addNumAsync } from "./index.redux";

class App extends React.Component {
  render() {
    const { num, addNum, subNum, addNumAsync } = this.props;
    return (
      <div>
        <h1>Number is: {num}</h1>
        {/* 点击那么就出发状态更新 dispatch */}
        <button onClick={() => addNum()}>加1</button>
        <button onClick={() => subNum()}>减1</button>
        <button onClick={() => addNumAsync()}>延迟加1</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    num: state
  };
};

const actionCreators = { addNum, subNum, addNumAsync };

App = connect(
  mapStateToProps,
  actionCreators
)(App);

export default App;
