import React from "react";
import styled from "styled-components";
import Logo from './Group 3608.png'

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
`;


function App() {
  return (
    <Wrapper>
      <img src={Logo} alt="Login" />
      <form>
        <h2>Login</h2>
        <label htmlFor="loginID">Login ID</label>
        <br />
        <input type="email" placeholder="Enter Login ID" name="loginID" />
        <br />
        <label htmlFor="Password">Password</label>
        <br />
        <input type="password" placeholder="Enter Password" name="Password" />
        <br />
        <input type="checkbox" name="Remember" />
        <label htmlFor="Remeber">Remember Me</label>
         <br />
        <input type="checkbox" name="Agree" />
        <label htmlFor="Agree">Agree to Terms & conditions</label>
        <br />
        <button>Login</button>
        <p>Don’t have an account? Register Here</p>
      </form>
    </Wrapper>
  );
}

export default App;
