import React, {useEffect, useState} from 'react';
import axios from "axios";
import Constants from "../../../Constants";


const Login = () => {

    const [input, setInput] = useState({})
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = () => {
        setIsLoading(true)
      axios.post(`${Constants.BASE_URL}/login`,input).then(res=>{
          // console.log(res.data);
          localStorage.name = res.data.name
          localStorage.email = res.data.email
          localStorage.phone = res.data.phone
          localStorage.photo = res.data.photo
          localStorage.token = res.data.token
          setIsLoading(false)
          window.location.reload()
      }).catch(errors =>{
          setIsLoading(false)
            if (errors.response.status == 422){
                setErrors(errors.response.data.errors)
            }
      })
    }

    const handleInput = (e) => {
      setInput(prevState => ({...prevState,[e.target.name] : e.target.value}))

    }

    return (
        <>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                 className="img-fluid" alt="Sample image"/>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                {/*<div*/}
                                {/*    className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">*/}
                                {/*    <p className="lead fw-normal ms-auto mb-0   ">Login Here</p>*/}

                                {/*    <button type="button" className="btn btn-primary btn-floating mx-1">*/}
                                {/*        <i className="fab fa-facebook-f"></i>*/}
                                {/*    </button>*/}

                                {/*    <button type="button" className="btn btn-primary btn-floating mx-1">*/}
                                {/*        <i className="fab fa-twitter"></i>*/}
                                {/*    </button>*/}

                                {/*    <button type="button" className="btn btn-primary btn-floating mx-1">*/}
                                {/*        <i className="fab fa-linkedin-in"></i>*/}
                                {/*    </button>*/}
                                {/*</div>*/}

                                <div className="divider d-flex align-items-center my-4">
                                    <h2 className="text-center fw-bold mx-3 mb-0">Login Here</h2>
                                </div>

                                  {/*Email input*/}

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                    <input type={'text'} id="form3Example3" className={errors.email != undefined ? 'form-control form-control-lg is-invalid' : 'form-control form-control-lg'}
                                           placeholder="Enter a valid email address" name={'email'} value={input.email} onChange={handleInput}/>
                                    <span className="form-label text-danger" htmlFor="form3Example3">{errors.email != undefined ? errors.email[0] : null}</span>
                                </div>

                                {/*Password input*/}
                                <div className="form-outline mb-3">
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                    <input type={'password'} id="form3Example4" className={ errors.password != undefined ? 'form-control form-control-lg is-invalid' : 'form-control form-control-lg'} placeholder="Enter password" name={'password'} value={input.password} onChange={handleInput}/>
                                    <span className="form-label text-danger" htmlFor="form3Example4">{errors.password != undefined ? errors.password[0] : null}</span>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                  {/*Checkbox */}
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value=""
                                               id="form2Example3"/>
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button onClick={handleLogin} type="button" className="btn btn-primary btn-lg" id="my-login-btn"
                                       dangerouslySetInnerHTML={{__html: isLoading ? '  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...'
                                               : 'Login'} }     />

                                </div>

                            </form>
                        </div>
                    </div>
                </div>

                {/*<div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">*/}
                {/*     /!*Copyright*!/*/}
                {/*    <div className="text-white mb-3 mb-md-0">*/}
                {/*        Copyright © 2020. All rights reserved.*/}
                {/*    </div>*/}
                {/*     /!*Copyright*!/*/}

                {/*     /!*Right*!/*/}

                {/*    <div>*/}
                {/*        <a href="#" className="text-white me-4">*/}
                {/*            <i className="fab fa-facebook-f"></i>*/}
                {/*        </a>*/}
                {/*        <a href="#" className="text-white me-4">*/}
                {/*            <i className="fab fa-twitter"></i>*/}
                {/*        </a>*/}
                {/*        <a href="#" className="text-white me-4">*/}
                {/*            <i className="fab fa-google"></i>*/}
                {/*        </a>*/}
                {/*        <a href="#" className="text-white">*/}
                {/*            <i className="fab fa-linkedin-in"></i>*/}
                {/*        </a>*/}
                {/*    </div>*/}

                {/*     /!*Right*!/*/}
                {/*</div>*/}

            </section>
        </>
    );
};

export default Login;