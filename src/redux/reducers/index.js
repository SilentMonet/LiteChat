import { combineReducers } from 'redux';
let p1 = require("../../assets/data.json");
function contacts(state = [p1], action) {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.data]
    default:
      return state
  }
}
function chats(state = [], action) {
  switch (action.type) {
    case "ADD_CHAT":
      return [...state, action.data]
    default:
      return state
  }
}
export default combineReducers({ contacts,chats });