import React,{useState} from 'react'
import axios from 'axios';

export default function Form() {
    const [formData,setFormData]=useState({});
    const login=(e)=>{
        console.log(e);
        e.preventDefault();
        axios.post("https://reqres.in/api/users/",formData)
        .then(res=>{
            console.log(res.data.firstName);
        })
    }
    const changed=(e)=>{
        //console.log(e.target.value);
        var obj={
            ...formData,
            [e.target.name]:e.target.value
        }
        setFormData(obj);
        console.log(formData);
    }
    
    return (
        <div className="container">
            <form>
            <div className="row my-2">
                <div className="col-12 text-uppercase text-center"><h1>Fill Up the form</h1></div>
                <div className="form-group col-6">
                    <input id="firstName" name="firstName" type="text" className="form-control" placeholder="First_Name" onChange={changed} />
                </div>
                <div className="form-group col-6">
                    <input name="lastName" type="text" className="form-control" placeholder="Last_Name" onChange={changed}/>
                </div>
            </div>
            <div className="row my-2">
                <div className="form-group col-6">
                    <input name="email" type="email" className="form-control" placeholder="Email" onChange={changed}/>
                </div>
                <div className="col-6">
                    <input className="form-control" type="file" name="file" id="" />
                </div>
                <div className="col-5 my-3">
                    <button onClick={login} className="btn btn-success">Send Now</button>
                </div>
            </div>
            </form>
        </div>
    )
}
