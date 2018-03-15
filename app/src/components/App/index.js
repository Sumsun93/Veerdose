/**
 * Npm import
 */
import React from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import NavBar from 'src/components/NavBar';
import Videos from 'src/components/Videos';
import Chat from 'src/containers/Chat';

/**
 * Code
 */
class App extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    inputUsername: PropTypes.string.isRequired,
    setUsername: PropTypes.func.isRequired,
    changeInputUsername: PropTypes.func.isRequired,
  }

  state = {}

  handleChangeUsername = (evt) => {
    this.props.changeInputUsername(evt.target.value);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.setUsername();
  }

  render() {
    const { username, inputUsername } = this.props;
    return (
      <div id="app">
        {username === '' && (
          <div className="static-modal">
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>Bienvenue sur le site officiel de Veerdose !</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>Merci d'indiquer ton pseudo !</p>
                <form onSubmit={this.handleSubmit}>
                  <FormControl
                    type="text"
                    value={inputUsername}
                    placeholder="Ton pseudo"
                    onChange={this.handleChangeUsername}
                  />
                  <Button type="submit">Valider</Button>
                </form>
              </Modal.Body>
            </Modal.Dialog>
          </div>
      )}
        <img src="./images/logo.jpg" alt="" />
        <NavBar />
        <Videos />
        <Chat />
      </div>
    );
  }
}

/**
 * Export
 */
export default App;
