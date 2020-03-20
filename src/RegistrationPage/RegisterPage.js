import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './RegisterPage.css'
import * as MainAction from '../Action/Action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const init = {
    Name: '',
    Address: '',
    Email: '',
    Birth_Date: '',
    Gender: '',
    Age: '',
    Mobile_Number: '',
    Password: '',
    Confirm_Password: '',
    NameErr: '',
    AddressErr: '',
    EmailErr: '',
    Birth_DateErr: '',
    GenderErr: '',
    AgeErr: '',
    Mobile_NumberErr: '',
    PasswordErr: '',
    Confirm_PasswordErr: ''
}
class RegisterPage extends Component {
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
        let NameErr = '';
        let AddressErr = '';
        let EmailErr = '';
        let Birth_DateErr = '';
        let GenderErr = '';
        let AgeErr = '';
        let Mobile_NumberErr = '';
        let PasswordErr = '';
        let Confirm_PasswordErr = '';
        if (!this.state.Name) {
            NameErr = "Name cannot be blank";
        } else if (!isNaN(this.state.Name)) {
            NameErr = "Name must be written in string";
        }

        if (!this.state.Address) {
            AddressErr = "Address cannot be blank";
        } else if (this.state.Address.includes('@', '!', '%')) {
            AddressErr = "Address not contain symbols";
        }

        if (!this.state.Email) {
            EmailErr = "Email cannot be blank";
        } else if ((!this.state.Email.includes('@')) && (!this.state.Email.includes('.'))) {
            EmailErr = "Email is not valide please enter valid email";
        }

        if (!this.state.Birth_Date) {
            Birth_DateErr = "please Select Date_of_Birth";
        }

        if (!this.state.Gender) {
            GenderErr = "please Select Gender";
        }

        if (!this.state.Age) {
            AgeErr = "Age must be require";
        } else if (isNaN(this.state.Age)) {
            AgeErr = "Age must be written in number";
        } else if ((this.state.Age).length > 2) {
            AgeErr = "Invalide Age number";
        }

        if (!this.state.Mobile_Number) {
            Mobile_NumberErr = "Mobile_Number must be require";
        } else if (isNaN(this.state.Mobile_Number)) {
            Mobile_NumberErr = "Mobile_Number must be written in number";
        } else if ((this.state.Mobile_Number).length > 10 || (this.state.Mobile_Number).length < 10)
            Mobile_NumberErr = "Mobile_Number must be enter in 10 digit";

        if (!this.state.Password) {
            PasswordErr = "Password must be require";
        } else if ((this.state.Password).length < 8) {
            PasswordErr = "password must be enter 8 or more characters";
        }

        if (!this.state.Confirm_Password) {
            Confirm_PasswordErr = "Confirm_Password must be require";
        } else if (this.state.Confirm_Password !== this.state.Password) {
            Confirm_PasswordErr = "Confirm_Password is not match with Password"
        }

        if (NameErr || AddressErr || EmailErr || Birth_DateErr || GenderErr || AgeErr || Mobile_NumberErr || PasswordErr || Confirm_PasswordErr) {
            this.setState({ NameErr, AddressErr, EmailErr, Birth_DateErr, GenderErr, AgeErr, Mobile_NumberErr, PasswordErr, Confirm_PasswordErr });
            return false;
        }
        return true;
    }
    sendRegisterData = (event) => {
        event.preventDefault();
        const isValide = this.validate()
        if (isValide) {
            const Obj = {
                Name: this.state.Name,
                Address: this.state.Address,
                Email: this.state.Email,
                Birth_Date: this.state.Birth_Date,
                Gender: this.state.Gender,
                Age: this.state.Age,
                Mobile_Number: this.state.Mobile_Number,
                Password: this.state.Password,
                Confirm_Password: this.state.Confirm_Password
            }
            this.props.action.Reducer.Register_Insert(Obj);
            this.setState(init);
            
        }
    }

    render() {
        return (
            <div>
                <div className="login-form">
                    <h1><span className="font-weight-boid">Registration Page</span></h1></div>
                    <br />
                    <Form className="login-form">
                    <FormGroup>
                        <Label for="NameId" className="login-label">Name</Label>
                        <Input type='text' placeholder="Enter Name" id="NameId" name="Name" onChange={this.handleChange}></Input>
                        <h3 style={{ fontSize: 12, color: "red" }}>{this.state.NameErr}</h3>
                    </FormGroup>

                    <FormGroup>
                        <Label for="AddressId">Address</Label>
                        <Input type="textarea" name="Address" id="AddressId" placeholder="Enter Address" onChange={this.handleChange} />
                        <h3 style={{ fontSize: 12, color: "red" }}>{this.state.AddressErr}</h3>
                    </FormGroup>
                    <FormGroup>
                        <Label for="EmailId">Email</Label>
                        <Input type="email" name="Email" id="EmailId" placeholder="Enter Email" onChange={this.handleChange} />
                        <h3 style={{ fontSize: 12, color: "red" }}>{this.state.EmailErr}</h3>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Birth_DateId">Birth_Date</Label>
                        <Input type="date" name="Birth_Date" id="Birth_DateId" placeholder="Enter Birth_Date" onChange={this.handleChange} />
                        <h3 style={{ fontSize: 12, color: "red" }}>{this.state.Birth_DateErr}</h3>
                    </FormGroup>
                    <FormGroup tag="fieldset" style={{ display: 'flex', alignItems: 'center' }}>
                        <Label>Gender</Label>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="Gender" className="Gender" value="Female" onChange={this.handleChange} />Female
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="Gender" className="Gender" value="Male" onChange={this.handleChange} />Male
                            </Label>
                        </FormGroup>
                        <h3 style={{ fontSize: 12, color: "red" }}>{this.state.GenderErr}</h3>
                    </FormGroup>
                    <FormGroup>
                        <Label for="AgeId">Age</Label>
                        <Input type="number" name="Age" id="AgeId" size="2" placeholder="Enter Age" onChange={this.handleChange} />
                        <h3 style={{ fontSize: 12, color: "red" }}>{this.state.AgeErr}</h3>
                    </FormGroup>
                    <FormGroup>
                        <Label for="NumberId">Mobile_Number</Label>
                        <Input type="number" name="Mobile_Number" id="NumberId" placeholder="Enter Mobile_Number" onChange={this.handleChange} />
                        <h3 style={{ fontSize: 12, color: "red" }}>{this.state.Mobile_NumberErr}</h3>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="Password" id="examplePassword" placeholder="Enter password" onChange={this.handleChange} pattern=".{8,}" />
                        <h3 style={{ fontSize: 12, color: "red" }}>{this.state.PasswordErr}</h3>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Confirm_passwordId">Confirm Password</Label>
                        <Input type="password" name="Confirm_Password" id="Confirm_passwordId" placeholder="Enter Confirm_password " onChange={this.handleChange} />
                        <h3 style={{ fontSize: 12, color: "red" }}>{this.state.Confirm_PasswordErr}</h3>
                    </FormGroup>
                    <Button className="btn-lg btn-dark btn-block" onClick={this.sendRegisterData}>Sign Up</Button>
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
export default connect(mapStoreToProps, mapdispatchToProps)(RegisterPage);