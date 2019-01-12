const ADD_GUN = "加机关枪";
const REMOVE_GUN = "机关枪";

// reducer: 根据老的state和action，生成新的state
export function counter(state = 0, action) {
  switch (action.type) {
    case ADD_GUN:
      return state + 1;
    case REMOVE_GUN:
      return state - 1;
    default:
      return 10;
  }
}

// action creator
export function addGUN() {
  return { type: ADD_GUN };
}

export function removeGUN() {
  return { type: REMOVE_GUN };
}

export function addGUNAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(addGUN());
    }, 2000);
  };
}
