import { ADD_LOGIN_DATA ,ADD_REGISTER_DATA,DISPLAY_DATA,AUTH_DATA,EDIT_DATA} from '../Reducer/Reducer';
import axios from 'axios';

export function Login_Insert(Login_Data) {
    return (dispatch) => {
        axios.post("http://localhost:3030/Login/Login_Insert", Login_Data)
            .then((res) => {
                if (res.status === 200)
                {
                    dispatch({
                        type:ADD_LOGIN_DATA,
                        data:res.data
                    })
                    console.log("data",res.data)
                }
        }).catch((error)=>{
            if(error){
                console.log("error in insert_data Action")
            }
        })
    }
}

export function Register_Insert(Register_Data) {
    return (dispatch) => {
        axios.post("http://localhost:3030/Register/Register_Insert", Register_Data)
            .then((res) => {
                if (res.status === 200)
                {
                    dispatch({
                        type:ADD_REGISTER_DATA,
                        data:res.data
                    })
                    console.log("data",res.data)
                }
        }).catch((error)=>{
            if(error){
                console.log("error in insert_data Action")
            }
        })
    }
}


export function Display_Data(){
    return(dispatch)=>{
        axios.get("http://localhost:3030/Register/DisplayData")
        .then((res)=>{
            if(res.status===200){
                dispatch({
                    type:DISPLAY_DATA,
                    data:res.data
                })
            }
        }).catch((error)=>{
            if(error){
                console.log("error show in get data action")
            }
        })
    }
}



export function Authenticate_User(AuthUser_Data) {
    return (dispatch) => {
        return new Promise((resolve,reject)=>{
            axios.post("http://localhost:3030/Register/authenticateUser", AuthUser_Data)
            .then((res) => {
                if (res.status === 200)
                {
                    dispatch({
                        type:AUTH_DATA,
                        data:res.data
                    })
                    var token=res.data;
                    var token_serialized=JSON.stringify(token);
                    localStorage.setItem('token',token_serialized);
                    console.log(localStorage)
                     resolve(res);
                    
                }
        }).catch((error)=>{
            if(error){
                console.log("error in Auto_Data Action")
                 reject(error)
            }
        })
        })        
    }
}


export function edit_data(id){
    return(dispatch)=>
    {
        axios.put(`http://localhost:3030/Register/update/${id}`)
        .then((res)=>{
            if(res.status===200)
            {
                dispatch({
                    type:EDIT_DATA,
                    id:res._id
                })
         
            }
        })
        // .then(()=>{
        //     history.push(`/Register/${id}`)
        
        // })
        .catch((error)=>{
            if(error){
                console.log("error in update_Data Action");
            }
        })
    }
}




