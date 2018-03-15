/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Chat from 'src/components/Chat';

// Action creators
import { changeInputMessage } from 'src/store/reducer';
import { sendMessage, getAllMessages } from 'src/store/socket';

/**
 * Code
 */
// State
// 2 paramètres (state, ownProps) sont dispo
// Si je ne veux pas renvoyer de props
// `const mapStateToProps = null;`
const mapStateToProps = (state, ownProps) => ({
  messages: state.messages,
  inputMessage: state.inputMessage,
  socketId: state.socketId,
});

// Actions
// 2 paramètres (dispatch, ownProps) sont dispo
// Si je ne veux pas renvoyer de props
// const mapDispatchToProps = {};
const mapDispatchToProps = (dispatch, ownProps) => ({
  sendMessage: () => {
    dispatch(sendMessage());
  },
  changeInputMessage: (msg) => {
    dispatch(changeInputMessage(msg));
  },
});

/*
 * Container
 */
const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);


/**
 * Export
 */
export default ChatContainer;
