/*
 * Initial State
 */
const initialState = {
  socketId: '',
  inputUsername: '',
  username: '',
  inputMessage: '',
  messages: [],
};


const SET_SOCKET_ID = 'SET_SOCKET_ID';
const SET_MESSAGES = 'SET_MESSAGES';
const SET_USERNAME = 'SET_USERNAME';
const INPUT_MESSAGE_CHANGE = 'INPUT_MESSAGE_CHANGE';
const INPUT_USERNAME_CHANGE = 'INPUT_USERNAME_CHANGE';
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SOCKET_ID:
      return {
        ...state,
        socketId: action.socketId,
      };

    case SET_USERNAME:
      return {
        ...state,
        username: state.inputUsername,
      };

    case SET_MESSAGES:
      return {
        ...state,
        messages: action.msgs,
      };

    case INPUT_USERNAME_CHANGE:
      return {
        ...state,
        inputUsername: action.username,
      };

    case INPUT_MESSAGE_CHANGE:
      return {
        ...state,
        inputMessage: action.msg,
      };

    case ADD_NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.msg],
      };

    default:
      return state;
  }
};

/*
 * Action creators
 */
export const setSocketId = socketId => ({
  type: SET_SOCKET_ID,
  socketId,
});

export const setUsername = () => ({
  type: SET_USERNAME,
});

export const setMessages = msgs => ({
  type: SET_MESSAGES,
  msgs,
});

export const changeInputMessage = msg => ({
  type: INPUT_MESSAGE_CHANGE,
  msg,
});

export const changeInputUsername = username => ({
  type: INPUT_USERNAME_CHANGE,
  username,
});

export const addNewMessage = msg => ({
  type: ADD_NEW_MESSAGE,
  msg,
});
