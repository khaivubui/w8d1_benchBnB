import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  componentWillUnmount () {
    console.log('unmounting');
  }

  update (e, fieldType) {
    this.setState({
      [fieldType]: e.target.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render () {
    const label = (this.props.formType === 'signup') ?
                  'Sign Up' :
                  'Log In';
    let otherLink;
    if (this.props.formType === 'signup') {
      otherLink = <Link to='/login'>Already have an account?</Link>;
    } else {
      otherLink = <Link to='signup'>Need a new account?</Link>;
    }
    return (
      <div>
        <h1>
          {label}
        </h1>
        {otherLink}
        <br/>
        <ul className='errors'>
          {this.props.errors.map(error =>
            <li>{error}</li>
          )}
        </ul>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Username:
            <input type='text'
              value={this.state.username}
              onChange={e => this.update(e, 'username')}/>
            <input type='password'
              value={this.state.password}
              onChange={e => this.update(e, 'password')}/>
            <input type='submit' value={label}/>
          </label>
        </form>
      </div>
    );
  }
}

export default SessionForm;
