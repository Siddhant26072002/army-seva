import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        name : "",
        phone : "",
        password : "",
        cpassword :""
    })
    const [msg, setmsg] = useState("");
    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(credentials.password != credentials.cpassword){
            setmsg("Password did not matched");
            return;
        }
        const response = await fetch("https://army-seva.vercel.app/api/auth/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: credentials.name, phone: credentials.phone, password: credentials.password})
        });
        const json = await response.json()
        // console.log(json);
        if(json.success){
            navigate("/login");
        }else{
            alert("Invalid Credential");
        }
    }
    return (
        <div className="login sign" >
            {/* <img src="/img/army-seva.png" style={{position: "absolute",width:"20%", left:"200px",top:"70px"}}/> */}
            <img src="/img/Untitled Design 1.png" className='login-img'/>
            <form  onSubmit={handleSubmit} className='login-form'>
                <div >
                    <label htmlFor="email" className="form-label" >Name</label>
                    <input type="text" className="form-control" value={credentials.name} onChange={onChange} id="name" name="name" aria-describedby="emailHelp" required/>
                </div>
                <div >
                    <label htmlFor="phone" className="form-label">Contact Number</label>
                    <input type="tel" className="form-control" value={credentials.phone} onChange={onChange} id="phone" name="phone" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">We'll never share your contact with anyone else.</div>
                </div>
                <div >
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" required minLength={5}/>
                </div>
                <div>
                    <label htmlFor="password" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" value={credentials.cpassword} onChange={onChange} name="cpassword" id="cpassword" required minLength={5}/>
                </div>
                <p>{msg}</p>
                <button type="submit" className='register-btn' >Register</button>
            </form>
            
        </div>
    )
}