import React, {useState} from 'react';

const Login = () => {
    const [input, setInput] = useState({})
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
                                    <input type={'email'} id="form3Example3" className="form-control form-control-lg"
                                           placeholder="Enter a valid email address" name={'email'} value={input.email} onChange={handleInput}/>
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                </div>

                                {/*Password input*/}
                                <div className="form-outline mb-3">
                                    <input type={'password'} id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" name={'password'} value={input.password} onChange={handleInput}/>
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
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
                                    <button type="button" className="btn btn-primary btn-lg" id="my-login-btn"
                                            >Login
                                    </button>

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