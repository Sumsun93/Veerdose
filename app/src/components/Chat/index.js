/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Local import
 */


/**
 * Code
 */
class Chat extends React.Component {
  static propTypes = {
    changeInputMessage: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
    inputMessage: PropTypes.string.isRequired,
    socketId: PropTypes.string.isRequired,
  }

  state = {}

  handleInputChange = (evt) => {
    this.props.changeInputMessage(evt.target.value);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.sendMessage();
  }

  render() {
    const { messages, inputMessage, socketId } = this.props;
    return (
      <div id="chat">
        <h1>Le chat des Babtous !</h1>
        <div id="messages-list">
          {messages.map((msg, index) => (
            <div className={classnames('messages', { own: socketId === msg.userSocketID })}>
              <p className="username">{msg.username}</p>
              <p className="msg">{msg.message}</p>
            </div>
          ))}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={inputMessage} onChange={this.handleInputChange} />
          <button>Envoyer</button>
        </form>
      </div>
    );
  }
}
/**
 * Export
 */
export default Chat;
