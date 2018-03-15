/*
  // done is a callback, you
 * NPM import
 */
import io from 'socket.io-client';
import React from 'react';

/*
 * Local import
 */
import { setMessages, addNewMessage, setSocketId } from 'src/store/reducer';

// Reducer


// socket
const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';

// Chat
const SEND_MESSAGE = 'SEND_MESSAGE';
const GET_ALL_MESSAGES = 'GET_ALL_MESSAGES';

/*
 * Middleware
 */
const socket = io('http://localhost:3000');
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case WEBSOCKET_CONNECT: {
      socket.on('connect', () => {
        store.dispatch(setSocketId(socket.id));
      });
      socket.on('update_all_messages', (data) => {
        store.dispatch(setMessages(data));
        const element = document.getElementById('messages-list');
        element.scrollTop = element.scrollHeight;
      });
      socket.on('receive_message', (data) => {
        store.dispatch(addNewMessage(data));
        const element = document.getElementById('messages-list');
        element.scrollTop = element.scrollHeight;
      });
      // socket.on('update_room_messages', (data) => {
      //   store.dispatch(setChatroomMessages(data));
      //   const element = document.getElementById('messages');
      //   element.scrollTop = element.scrollHeight;
      // });
      break;
    }
    case SEND_MESSAGE: {
      const { username, inputMessage } = store.getState();
      socket.emit('send_message', { username, inputMessage });
      break;
    }
    case GET_ALL_MESSAGES: {
      socket.emit('get_messages');
      break;
    }
    default:
  }
  // On passe au voisin
  next(action);
};

/*
 * Action Creator
 */
export const wsConnect = () => ({
  type: WEBSOCKET_CONNECT,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const getAllMessages = () => ({
  type: GET_ALL_MESSAGES,
});
