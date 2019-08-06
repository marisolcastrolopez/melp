import React from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import '../style/login.css'

const Login = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form className="form-padding">
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                // icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Type your password"
                // icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center btn-login">
              <Link className="link-login" to="/app">
                Login
              </Link>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
