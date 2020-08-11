import React from 'react';

import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { username, password } = this.state;

    axios
      .get(
        `http://localhost:4000/login/${this.state.username}/${this.state.password}`,
        {
          user: {
            username: username,
            password: password,
          },
        },
        
      )
      .then((response) => {
        console.log(response);
        if (response.data === true) {
          this.props.setUserAuth(true);
          this.props.history.push('/');
        } else {
          alert('LogIn faild . . Make sure the information is correct');
        }
      })
      .catch((error) => {
        console.log('login error', error);
        this.props.setUserAuth(false);
      });
    event.preventDefault();
  }

  render() {
    return (
        <div>
      <div className='inner-container'>
        <div className='h1'>
          <h1 id='header'>
            <span id='spanw'> Dairy product Milk and cheese </span> <span id='finde'>APP</span>{' '}
          </h1>
        </div>

        <form onSubmit={this.handleSubmit}>
          <h1 className='header'>Account Login</h1>
          <hr className='hr' />
          <input
            className='login-input'
            name='username'
            placeholder='username'
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            className='login-input'
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <br />
          <button>
            <Link to="/">Log In</Link>
            </button>
          <br />
          Dont have an account ?{' '}
          <Link to="/Registeration" className='link'>
            {' '}
            register now
          </Link>{' '}
        </form>
      </div>
      </div>
    );
  }
}
export default Login;