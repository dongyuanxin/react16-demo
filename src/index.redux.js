// type：单独定义
const ADD_NUM = "ADD_NUM";
const SUB_NUM = "SUB_NUM";

// reducer: 一定要有default，声明state
// 根据action.type，来更新state
export const counter = (state = 0, action) => {
  switch (action.type) {
    case ADD_NUM:
      return state + 1;
    case SUB_NUM:
      return state - 1;
    default:
      return state;
  }
};

export const addNum = () => ({
  type: ADD_NUM
});

export const subNum = () => ({
  type: SUB_NUM
});

export const addNumAsync = (wait = 1000) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(addNum());
    }, wait);
  };
};
