import React, { Component } from 'react';
import './stype.scss';
import * as actions from './../../../../redux/actions';
import { connect } from 'react-redux';
import firebaseConnect from './../../../../firebaseConnect';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          isSingup: false,
        };
      }

    //Listener when input text, due time. 
    onHandChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
        [name]: value
        });
        //console.log(value);
    }

      //save state submit form.
    onHandleSubmit = (event) => {
        //console.log("check State:",this.state);
        event.preventDefault();
        this.props.onCheckAuthentication(this.state)
        // firebaseConnect.auth().createUserWithEmailAndPassword(this.state.email, 
        //     this.state.password).then((u)=>{
        // }).then((u)=>{console.log(u)})
        // .catch((error) => {
        //     console.log(error);
        // });
        console.log(this.state);
    }

    onHandleSingup = (event) =>{
        console.log(this.state.email);
        event.preventDefault();
        // firebaseConnect.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        // }).then((u)=>{console.log(u)})
        // .catch((error) => {
        //     console.log(error);
        // })
        this.props.onSingupReminder(this.state)
    }


    render() {
        return (
            <div className="login-form">
                <div className="get-out">
                    <div className="right-mid">
                        <div className="container-login">
                            <div className="card-container">
                                <div className="title-login">
                                    <h3>LOGIN</h3>
                                </div>
                                <div className="row">
                                    <form className="col s12"  onSubmit={this.onHandleSubmit}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="userName" type="email" className="validate" 
                                                value={this.state.email}
                                                name = 'email'
                                                onChange={this.onHandChange}/>
                                                <label>Email</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="password" type="password" className="validate"
                                                name = 'password' 
                                                value={this.state.password} onChange={this.onHandChange}/>
                                                <label>Password</label>
                                            </div>
                                        </div>
                                        <div className="card-action">
                                            <button  type="submit" className="waves-effect waves-light btn">Submit</button>
                                            <a href="" className="right text-lighten">FORGOT PASSWORD </a>
                                        </div>
                                    </form>
                                    <button  type="submit" className="waves-effect waves-light btn blue darken-2"
                                    onClick={this.onHandleSingup}>Singup</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
  }
  const mapDispatchToProps = (dispatch, props) => {
    return {
      onCheckAuthentication: (userName) => {
        dispatch(actions.authencationReminder(userName));
      },
      onSingupReminder: (userName) => {
        dispatch(actions.singupReminder(userName));
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (LoginForm);
