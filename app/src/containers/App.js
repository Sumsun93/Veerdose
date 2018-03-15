/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import App from 'src/components/App';


import { changeInputUsername, setUsername } from 'src/store/reducer';


/**
 * Code
 */
// State
// 2 paramètres (state, ownProps) sont dispo
// Si je ne veux pas renvoyer de props
// `const mapStateToProps = null;`
const mapStateToProps = (state, ownProps) => ({
  username: state.username,
  inputUsername: state.inputUsername,
});

// Actions
// 2 paramètres (dispatch, ownProps) sont dispo
// Si je ne veux pas renvoyer de props
// const mapDispatchToProps = {};
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeInputUsername: (username) => {
    dispatch(changeInputUsername(username));
  },
  setUsername: () => {
    dispatch(setUsername());
  },
});

/*
 * Container
 */
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);


/**
 * Export
 */
export default AppContainer;
