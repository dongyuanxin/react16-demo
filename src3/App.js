import React from "react";
import { addGUN, addGUNAsync } from "./index.redux";

class App extends React.Component {
  render() {
    const { store } = this.props;
    const num = store.getState();
    return (
      <div>
        <h1>现在有{num}机枪</h1>
        {/* 点击那么就出发状态更新 dispatch */}
        <button onClick={() => store.dispatch(addGUN())}>+</button>
        <button onClick={() => store.dispatch(addGUNAsync())}>拖两天</button>
      </div>
    );
  }
}

export default App;
