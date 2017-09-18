import { connect } from 'react-redux';

import { signup, login} from '../../actions/session_actions.js';
import SessionForm from './session_form.jsx';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  formType: ownProps.match.path.slice(1)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(
    ownProps.match.path.slice(1) === 'signup' ?
    signup(user) :
    login(user)
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
