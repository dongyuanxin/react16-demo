import React from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./App";
import { counter } from "./index.redux";

// 初始化state
// 默认状态没有type，返回10
const store = createStore(counter, applyMiddleware(thunk));

function render() {
  ReactDom.render(<App store={store} />, document.querySelector("#root"));
}

render();
// state更新的时候，调用render函数，刷新试图
store.subscribe(render);
