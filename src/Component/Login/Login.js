import React, { Component } from 'react';
import '../../CSS/Login.css';

class Login extends Component {
  render() {
    return (
      <div className="login-layout">
        {/* Left Login layout */}
        <div className="left-layout">
          <div className="get-out">
            <div className="leftmid">
              <div className="center-align">
                <img src="/assets/pill-white-trans.png" alt="logo" className="cicle" />
              </div>
              <div className="center-align">
                <img src="/assets/wordmark-white.png" alt="mark" className="medly" />
              </div>
              <h5 className="info">Prescriptions Made Easy</h5>
            </div>
          </div>
        </div>
        {/* rifht Login layout */}
        <div className="login-form">
          <div className="get-out">
            <div className="right-mid">
              <div className="container-login">
                <div className="card-container">
                  <div className="title-login">
                    <h3>LOGIN</h3>
                  </div>
                  <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="email" type="email" className="validate" />
                          <label>Email</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="password" type="password" className="validate" />
                          <label>Password</label>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-action">
                  <a className="waves-effect waves-light btn" href="Dashboard">Submit</a>
                  <a href="" className="right text-lighten">FORGOT PASSWORD </a>
        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <h5 className="center-align">© 2017 Lindenwood Health, Inc</h5>
        </div>
      </div>
    );
  }
}

export default Login;
