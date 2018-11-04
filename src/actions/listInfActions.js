export const DELETE_INFO = "DELETE_INFO";
export const ADD_INFO = "ADD_INFO";
export const UPDATE_DATA = "UPDATE_INFO";

export function deleteInfo(index) {
  return dispatch => {
    dispatch({
      type: DELETE_INFO,
      payload: index
    });
  };
}

export function addUser(userInfo) {
  return dispatch => {
    dispatch({
      type: ADD_INFO,
      payload: userInfo
    });
  };
}

export function updateData(userInfo, index) {
  return dispatch => {
    dispatch({
      type: UPDATE_DATA,
      id: index,
      payload: userInfo
    });
  };
}
