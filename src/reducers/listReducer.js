import { ADD_INFO, DELETE_INFO } from "../actions/listInfActions";

export function listReducer(state = [], action) {
  switch (action.type) {
    case ADD_INFO:
      return [...state, action.payload];
    case DELETE_INFO:{
      return state.filter((item, index) => index !== action.payload)  //  <---решено с помощью добавления item, иначе фильтер не проходил
    }
    default:
      return state;
  }
}
