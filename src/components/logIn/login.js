import React from 'react';

import { Link ,withRouter } from 'react-router-dom';
import { Form,Button } from 'react-bootstrap';

import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  
  handleSubmit(event) {
   event.preventDefault();
    const { username, password } = this.state;
    //localStorage.setItem('userId',JSON.stringify(this.state));
   console.log('username, password',username, password)
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
        console.log('heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',response);
        if (response) {
          // this.props.setUserAuth(true);
          // TODO: SAVE USER ID TO LOCAL STORAGE 
           localStorage.setItem('user_id',response.data[0]._id );
          // const user_id = localStorage.getItem('userID');
          this.props.history.push('/Cart');
        } else {
          alert('LogIn faild . . Make sure the information is correct');

        }
      })
      .catch((error) => {
        console.log('login error', error);
        this.props.setUserAuth(false);
      });
      
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
        <h1 className='header'>Account Login</h1>
        <Form  onSubmit={this.handleSubmit.bind(this)} >
  <Form.Group controlId="formGroupEmail">
    <Form.Label>User Name</Form.Label>
    <Form.Control name='username'
            placeholder='username'
            value={this.state.username}
            onChange={this.handleChange}
            required />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control   type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
            required />
  </Form.Group>
  <Button className="safa" type="submit">
    Log In
  </Button>
</Form>
{/* 
        <form onSubmit={this.handleSubmit.bind(this)}>
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
          <button> Login</button>
          <br />
          Dont have an account ?{' '}
          <Link to="/Registeration" className='link'>
            {' '}
            register now
          </Link>{' '}
        </form> */}
      </div>
      </div>
    );
  }
}
export default withRouter(Login);