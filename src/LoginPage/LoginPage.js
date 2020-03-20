import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './LoginPage.css';
import * as MainAction from '../Action/Action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

const init = {
    Email: '',
    Password: '',
    EmailErr: '',
    PasswordErr: ''
    //toLoginPage: false
}
class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = init;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validate = () => {
        let EmailErr = '';
        let PasswordErr = '';

        if (!this.state.Email) {
            EmailErr = "Email cannot be blank";
        } else if ((!this.state.Email.includes('@')) && (!this.state.Email.includes('.'))) {
            EmailErr = "Email is not valide please enter valid email";
        }

        if (!this.state.Password) {
            PasswordErr = "Password must be require";
        } else if ((this.state.Password).length < 8) {
            PasswordErr = "password must be enter 8 or more characters";
        }

        if (EmailErr || PasswordErr) {
            this.setState({ EmailErr, PasswordErr })
            return false;
        }
        return true;
    }

    sendLoginData = () => {
        debugger
        const isValide = this.validate()
        if (isValide) {
            
            console.log("abcd", this.props.Display_Data)
            const Obj = {
                Email: this.state.Email,
                Password: this.state.Password
            }
            // this.props.action.Reducer.Login_Insert(Obj);

            this.props.action.Reducer.Authenticate_User(Obj).then((res)=>{
                
                this.props.history.push("/Display")
                // window.location.reload(false);
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
    render() {

        // if (this.state.toLoginPage === true) {
        //     return <Redirect to='/Display' />
        // }
        return (
            <div>
                <Form className="login-form">
                    <h1><span className="font-weight-boid">Login Page</span></h1>
                    <br />
                    <FormGroup>
                        <Label className="login-label" >Email</Label>
                        <Input type='email' placeholder="Email" name="Email" onChange={this.handleChange}></Input>
                        <h3 style={{ fontSize: 12, color: "red" }}>{this.state.EmailErr}</h3>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type='password' placeholder="Password" name="Password" onChange={this.handleChange}></Input>
                        <h3 style={{ fontSize: 12, color: "red" }}>{this.state.PasswordErr}</h3>
                    </FormGroup>
                    <Button className="btn-lg btn-dark btn-block" onClick={this.sendLoginData}>Log In</Button>
                </Form>
            </div>

        );
    }
}

const mapStoreToProps = (state) => {
    const { Reducer } = state
    return {
        Reducer: Reducer
    }
}

const mapdispatchToProps = (dispatch) => ({
    action: {
        Reducer: bindActionCreators(MainAction, dispatch)
    }
})

export default connect(mapStoreToProps, mapdispatchToProps)(LoginPage);