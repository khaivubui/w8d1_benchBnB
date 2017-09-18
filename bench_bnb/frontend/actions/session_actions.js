import * as AuthUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERROR = 'RECEIVE_SESSION_ERROR';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveSessionError = error => ({
  type: RECEIVE_SESSION_ERROR,
  error
});

export const signup = user => dispatch => (
  AuthUtils.postUser(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
          error => dispatch(receiveSessionError(error)))
);

export const login = user => dispatch => (
  AuthUtils.postSession(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
          error => dispatch(receiveSessionError(error)))
);

export const logout = () => dispatch => (
  AuthUtils.deleteSession()
    .then(emptyUser => dispatch(receiveCurrentUser(null)),
          error => dispatch(receiveSessionError(error)))
);
