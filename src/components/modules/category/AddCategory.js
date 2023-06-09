import React, {useState} from 'react';
import BreadCrumb from "../../partials/BreadCrumb";
import axios from "axios";
import Constants from "../../../Constants";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCategory = () => {
    const navigate =useNavigate();
    const [input, setInput] = useState({status:1})
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleInput = (e) => {

        if(e.target.name='name'){
            let slug = e.target.value
            slug = slug.toLowerCase()
            slug = slug.replaceAll(' ','-')
            setInput(prevState => ({...prevState,slug : slug}))

        }
        setInput(prevState => ({...prevState,[e.target.name] : e.target.value}))

    }



    const handleCategoryCreate = () => {
        setIsLoading(true)
        axios.post(`${Constants.BASE_URL}/category`,input).then(res=>{
            setIsLoading(false)
            // console.log(res.data);
            Swal.fire({
                position: 'top-end',
                icon: res.data.cls,
                title: res.data.msg,
                showConfirmButton: false,
                toast:true,
                timer: 1500
            })
            navigate('/category')
        }).catch(errors =>{
            setIsLoading(false)
            if (errors.response.status == 422){
                setErrors(errors.response.data.errors)

            }
        })

    }

    return (
        <>
            <BreadCrumb title={'Category-Create'} />

            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex align-items-center">
                                <h4>Category List</h4>
                            </div>
                        </div>
                        <div className="card-body">



                            <table className="table table-hover table-bordered" id="datatablesSimple">
                                <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name &<br/> Slug</th>
                                    <th>Status</th>
                                    <th>Created by</th>
                                    <th>Created at &<br/> Updated at</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                {/*<tfoot>*/}
                                {/*<tr>*/}
                                {/*    <th>Name</th>*/}
                                {/*    <th>Position</th>*/}
                                {/*    <th>Office</th>*/}
                                {/*    <th>Age</th>*/}
                                {/*    <th>Start date</th>*/}
                                {/*    <th>Salary</th>*/}
                                {/*</tr>*/}
                                {/*</tfoot>*/}
                                <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,800</td>
                                </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                {/*Add Category*/}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex align-items-center">
                                <h4>Add Category</h4>
                            </div>
                            {/*<div className="d-flex justify-content-between align-items-center">*/}
                            {/*    <h4>Add Category</h4>*/}
                            {/*    <button className="btn btn-dark">*/}
                            {/*        <Link className="btn text-info" to="" ><i className={'fa-solid fa-list'}></i> List</Link>*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                        </div>
                        <div className="card-body">

                            <div className="form-group col-md-12">
                                <label for="formGroupExampleInput" class="form-label">Category Name</label>
                                <input type="text" className={'form-control mt-1'} id="formGroupExampleInput" placeholder="Category Name"
                                       name={'name'}
                                       value={input.name}
                                       onChange={handleInput}
                                />
                                {/*<span id="formGroupExampleInput01Feedback" className=" invalid-feedback" for="form3Example3">{errors.name != undefined ? errors.name[0] : null}</span>*/}
                            </div>
                                <span className=" text-danger" htmlFor="form3Example4">{errors.name != undefined ? errors.name[0] : null}</span>
                            <div className="form-group col-md-12 mt-2">
                                <label for="formGroupExampleInput2" class="form-label">Category Slug</label>
                                <input type="text" className={'form-control mt-1'} id="formGroupExampleInput2" placeholder="Category Slug"
                                       name={'slug'}
                                       value={input.slug}
                                       onChange={handleInput}
                                />
                                {/*<span id="formGroupExampleInput01Feedback" className=" invalid-feedback" for="form3Example3">{errors.slug != undefined ? errors.slug[0] : null}</span>*/}
                            </div>
                                <span className=" text-danger" htmlFor="form3Example4">{errors.slug != undefined ? errors.slug[0] : null}</span>
                            <div className="form-group col-md-12 mt-2">
                                <label for="formGroupExampleInput3" class="form-label">Category Status</label>
                                <select className={'form-select mt-1'} id={'formGroupExampleInput3'}
                                        name={'status'}
                                        value={input.status}
                                        onChange={handleInput}
                                >
                                    <option disabled={true}>Active Status</option>
                                    <option value={1}>Active</option>
                                    <option value={0}>Inactive</option>
                                </select>

                                {/*<span id="formGroupExampleInput01Feedback" className=" invalid-feedback" for="form3Example3">{errors.status != undefined ? errors.status[0] : null}</span>*/}
                            </div>
                                <span className=" text-danger" htmlFor="form3Example4">{errors.status != undefined ? errors.status[0] : null}</span>

                            <div className="col-md-12 mt-2">
                                <div className="row justify-content-center">
                                    <div className="col-md-6">
                                        <div className="d-grid mt-4">
                                            <button onClick={handleCategoryCreate} className={'btn btn-outline-dark text-primary'}
                                                    dangerouslySetInnerHTML={{__html: isLoading ? '  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...'
                                                            : 'Add Category'} }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default AddCategory;