import React, { Component } from 'react';
import { view } from 'react-stax';
import styled from 'styled-components';

const Container = styled.div`
  text-align: left;
  padding: 4vw;  
  h1{
    margin: 0;
    padding-top: 3vh;
  }
  label{
    font-weight: bold;
  }
  input{
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid gray;
    background-color: transparent;
    padding: 1vh;
    font-size: 1.2rem;
  }
  input[type='submit']{
    width: 40%;
    background-color: #8a90fc;
    color: white;
    border: none;
    margin: 4vh auto;
  }
  label[for='check']{
    font-weight: normal;
    display: block;
    p{
      display: inline-block;
    }
    input[type='checkbox']{
      margin: 0;
      width: 20vw;
      
    }
  }
  
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    const { email, password } = this.state
    console.log(`A form was submitted: \n Email:  ${email} \n PS: ${password}`);
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <h1>Bejelentkezés</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            <p>Email</p>
            <input onChange={this.handleChangeEmail} id="email" name="email" type="email" placeholder="Email Address" />
          </label>
          <label htmlFor="password">
            <p>Jelszó</p>
            <input onChange={this.handleChangePassword} id="password" name="password" type="password" placeholder="Password" />
          </label>
          <label htmlFor="check">
            <input id="password" name="check" type="checkbox" />
            <p>ÁSZF</p>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Container>
    );
  }
}

export default view(Login);
