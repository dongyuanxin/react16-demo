import React from "react";
import { addNum, subNum, addNumAsync } from "./index.redux";

class App extends React.Component {
  render() {
    const { store } = this.props;
    const num = store.getState();
    return (
      <div>
        <h1>Number is: {num}</h1>
        {/* 点击那么就出发状态更新 dispatch */}
        <button onClick={() => store.dispatch(addNum())}>加1</button>
        <button onClick={() => store.dispatch(subNum())}>减1</button>
        <button onClick={() => store.dispatch(addNumAsync())}>延迟加1</button>
      </div>
    );
  }
}

export default App;
