import React, { Component } from 'react';
import '../CSS/Login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      password: '',
      pathDashboard: '',
    }
  }

  onHandleChange =(event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }

  onHandleSubmit = (event) => {
    if(this.setState.userName === 'admin@123' && this.state.password === 'admin'){
      this.setState({
        pathDashboard: '/Dashboard',
      });
      console.log(event.target.value);
    }
  }

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
        <div className="login-form" >
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
                          <input name="userName" type="email" className="validate"  onChange={this.onHandleChange}/>
                          <label>Email</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input name="password" type="password" className="validate" onChange={this.onHandleChange}/>
                          <label>Password</label>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-action">
                  <a className="waves-effect waves-light btn" onSubmit ={this.onHandleSubmit} href='/Dashboard'>Submit</a>
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
