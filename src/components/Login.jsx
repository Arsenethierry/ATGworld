import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';




function Login() {
    const [isSignin,setIsSignin] = useState(true)
    let navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        navigate('/')
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6 m-2'>
                    <div className='gap2'>
                        {
                        isSignin? <h3 className='fw-bolder'>Sign In</h3> : <h3 className='fw-bolder'>Create Account</h3>
                        }
                        <form onSubmit={handleSubmit} className='d-grid gap-2'>
                            {
                                isSignin? <div></div>:(
                                    <div className='row'>
                                        <div className='col'>
                                            <input type='text' className='form-control' placeholder='First Name'/>
                                        </div>
                                        <div className='col'>
                                            <input type='text' className='form-control' placeholder='Last Name'/>
                                        </div>
                                    </div>
                                )
                            }
                            <input type='text' className="form-control" placeholder="Email" />
                            <input type='password' className="form-control" placeholder="Password" />
                            <button type="submit" class="form-control btn btn-primary rounded-pill">
                                {isSignin? 'Sign In' : 'Create Account'}
                            </button>
                            <button type='button' className='form-control btn btn-light m-2'>
                                <FaFacebook className='text-primary' />
                                    {
                                        isSignin? "Sign in with Facebook" : (
                                        "Sign up with Facebook" 
                                        )
                                    }
                            </button>
                            <button type='button' className='form-control btn btn-light'>
                                    <FcGoogle />
                                        {
                                            isSignin? "Sign in with Google" : (
                                            "Sign up with Google" 
                                            )
                                        }
                            </button>
                            <button type='button' className='form-control btn btn-light fw-bold m-1'>Forgot Password?</button>
                        </form>
                    </div>
                    <div className='d-md-none'>
                        {
                            isSignin?
                            <p>Already Have account? <button onClick={()=>setIsSignin(!isSignin)} className='btn btn-light text-primary'>Sign In</button></p>:
                            (<p>Don't have account yet? <button onClick={()=>setIsSignin(!isSignin)} className='btn btn-light text-primary'>Create new for free</button></p>)
                        }
                    </div>
                </div>
                <div className='d-none d-md-block col-md-4'>
                    {
                        isSignin?
                        <p>Already Have account? <button onClick={()=>setIsSignin(!isSignin)} className='btn btn-light text-primary'>Sign In</button></p>:
                        (<p>Don't have account yet? <button onClick={()=>setIsSignin(!isSignin)} className='btn btn-light text-primary'>Create new for free</button></p>)
                    }
                    <img src={'/assets/loginsvg.png'} alt="logi in" />
                </div>
            </div>
        </div>
    );
}

export default Login;