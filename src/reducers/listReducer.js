import { ADD_INFO, DELETE_INFO, UPDATE_DATA } from "../actions/listInfActions";

export function listReducer(state = [], action) {
  switch (action.type) {
    case ADD_INFO:
      return [...state, action.payload];
    case DELETE_INFO: {
      return state.filter((item, index) => index !== action.payload); //  <---решено с помощью добавления item, иначе фильтер не проходил
    }
    case UPDATE_DATA: {
      let tempArray = state.slice();
      // Доделать
      tempArray.splice(action.payload) 
    }
    default:
      return state;
  }
}
