import React from 'react'
import * as MainAction from '../Action/Action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Table } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
//import Register from '../RegistrationPage/RegisterPage'
import './Display.css'
import {
    Button
} from 'reactstrap';


class Display extends React.Component {
    componentDidMount() {
        console.log("hi", this.props.action.Reducer.Display_Data())
    }

    handleEdit = (event) => {
        return (
            <Redirect to='/Register'></Redirect>
            
        )
    }
    render() {
        console.log("show data", this.props.Display_list);

        return (
            <div>
                <br />
                
                <div align="center"><Link to='/Register'><Button type="button" class="btn btn-default btn-circle btn-xl btn1"><i class="fa fa-check"></i>+
            </Button></Link></div>
                <br />
                <Table>
                    <tr align="center">
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Birth_Date</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Mobile_Number</th>
                        <th>Password</th>
                        <th>Confirm_Password</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>

                    {

                        // console.log(Display_list);
                        this.props.Display_list.map((val) => {
                            return (
                                <tr key={val.id} align="center">
                                    <td>{val.Name}</td>
                                    <td>{val.Address}</td>
                                    <td>{val.Email}</td>
                                    <td>{val.Birth_Date}</td>
                                    <td>{val.Gender}</td>
                                    <td>{val.Age}</td>
                                    <td>{val.Mobile_Number}</td>
                                    <td>{val.Password}</td>
                                    <td>{val.Confirm_Password}</td>
                                    <td><Link ><Button onClick={this.handleEdit}>Edit</Button></Link></td>
                                    <td><Link><Button>Delete</Button></Link></td>
                                </tr>
                            )
                        })
                    }
                </Table>

            </div>
        )
    }
}

const mapStoreToProps = (state) => {
    console.log(state);
    const { Display_list } = state
    return {
        Display_list
    }
}

const mapdispatchToProps = (dispatch) => ({
    action: {
        Reducer: bindActionCreators(MainAction, dispatch)
    }
})


export default connect(mapStoreToProps, mapdispatchToProps)(Display);