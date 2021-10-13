import React, {useState, useEffect} from 'react'
import axios from "axios";
function Registerscreen() {
    const[name, setname] = useState('')
    const[email, setemail] = useState('')
    const[password, setpassword] = useState('')
    const[cpassword, setcpassword] = useState('')

async function register(){
    
    if(password==cpassword)
    {
        const user={
            name,
            email,
            password,
            cpassword
        }

        try {
            const result = await axios.post('api/users/register' , user).data
        } catch (error) {
            console.log(error);
        }
    }
    else{
        alert('Passwords do not match')
    }

}

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                
                    <div className="boxshadow">
                        <h2 className="h2-register">Register</h2>
                        <input style={{fontSize:'1.6rem'}} type="text" className="form-control" placeholder="Name" 
                        value={name} onChange={(e)=>{setname(e.target.value)}}
                        />
                        <input style={{fontSize:'1.6rem'}} type="email" className="form-control" placeholder="Email"
                        value={email} onChange={(e)=>{setemail(e.target.value)}}
                        />
                        <input style={{fontSize:'1.6rem'}} type="password" className="form-control" placeholder="Password"
                        value={password} onChange={(e)=>{setpassword(e.target.value)}}
                        />
                        <input style={{fontSize:'1.6rem'}} type="password" className="form-control" placeholder="Confirm Password"
                        value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}
                        />
                    <button className="register-btn btn-gradient mt-5" onClick={register}>
                        Register
                    </button>
                    </div>
                    
                </div>    
            </div> 
        </div>
    )
}

export default Registerscreen