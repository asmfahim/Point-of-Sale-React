import React from 'react';
import Nav from "../partials/Nav";
import Sidebar from "../partials/Sidebar";
import Footer from "../partials/Footer";
import {Outlet} from "react-router-dom";

const Master = () => {
    return (
        <>
            <Nav/>
            <div id="layoutSidenav">
                <Sidebar/>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <Outlet/>

                            {/*
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-chart-area me-1"></i>
                                        Area Chart Example
                                    </div>
                                    <div className="card-body">
                                        <canvas id="myAreaChart" width="100%" height="40"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-chart-bar me-1"></i>
                                        Bar Chart Example
                                    </div>
                                    <div className="card-body">
                                        <canvas id="myBarChart" width="100%" height="40"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>

                        */}

                        </div>
                    </main>
                    <Footer/>

                </div>
            </div>

        </>
    );
};

export default Master;