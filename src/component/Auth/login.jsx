import React ,{ useState } from 'react'
import { Redirect } from 'react-router-dom'
import {BUTTON ,Input , Checkbox} from './../reusable'
import './styles.css'


export default function Login(props) {
    const [redirectState, setRedirectState] = useState(false)
    const [formData , setFormData ] = useState({
        email : 'sahumegha096@gmail.com',
        password : 'abc123'
    })
    const [errors ,setError] = useState({
        email : '' ,
        password : ''
    })

    const handleChange=(e)=>{
        setFormData({
            ...formData , 
            [e.target.name]  : e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();  
        if(formData.email == "sahumegha096@gmail.com" && formData.password == "abc123"){
            props.loginHandler()
            setRedirectState(true)
            // props.history.push('/dashboard')
        }else{
            setError({
                email : 'You have entered a wrong Email' ,
                password : 'Either email or password is wrong'
            })
        }

    }

    const {from} = props.location.state || { from : {pathname : '/' }}
    if(redirectState){
        return <Redirect  to={from} />
    }

    return (
        <div className="container">
        <div className='wrapper' id="login-img">
        <video src="/vidioes/video-1.mp4" autoPlay loop muted/>
    <h1 id="h-1"><span>Wel</span>Come<span>To</span> Vintage<span>Food</span><span>Area</span><span>!</span></h1>
          
            <h1 className="text-dark"id="h-1">Login Form</h1>
          
           <div><br/>
            <form onSubmit={handleSubmit} >
                <div>
            <Input 
             name = 'email' 
             placeholder = "Enter Email"
             value={formData.email}                
             label = "Email"
             type = "email"
             onChange = {(e) => handleChange(e)}
             error={errors.email}
            />
            
            </div>
            <br/>
            <div>
            <Input 
             name = 'password' 
             placeholder = "Enter password"
             value={formData.password}                
             label = "Password"
             type = "password"
             onChange = {(e) => handleChange(e)}
             error={errors.password}
            />
            </div>
            <div>
            <Checkbox 
                label="Remember the sign details."
                onChange={(e) => handleChange(e)}
            />
            <div>
            <BUTTON type="submit" text="Login"  color="primary" />
            </div>
 </div>

 
            </form>           
</div>
 </div>
        </div>
    )
}