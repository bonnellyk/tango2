// ------------------------------------
// Constants
// ------------------------------------
export const GET_MEMBER_INFO = "GET_MEMBER_INFO";

// ------------------------------------
// Actions
// ------------------------------------



export function getMemberInfo() {
   return (dispatch) => {
    fetch('http://127.0.0.1:8080/CrunchifyTutorials/api/getMemberInfo').then(response => {
        return response.json();
      }).then(information => {
        dispatch({
          type    : GET_MEMBER_INFO,
          payload : information
        })
      })
      .catch(error => {
        return error;
      });
    }
}

export const actions = {
  getMemberInfo
}
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_MEMBER_INFO]: (state,action) => {
    const newState =  Object.assign(state, { memberInfo: action.payload });
    return newState;
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  memberInfo: null
};
export default function memberInfoReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
