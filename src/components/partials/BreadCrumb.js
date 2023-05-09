import React from 'react';
import {Helmet} from "react-helmet";

const BreadCrumb = (props) => {
    return (
        <>
            <Helmet>
                {/*<meta charSet="utf-8" />*/}
                <title>{props.title} | Boi Ghar</title>
                {/*<link rel="canonical" href="http://mysite.com/example" />*/}
            </Helmet>
            {/*
                <h3 className="mt-4">Dashboard</h3>
             */}
            <ol className="breadcrumb mb-4 my-4">
                <li className="breadcrumb-item ">Dashboard</li>
                <li className="breadcrumb-item active">{props.title}</li>
            </ol>
        </>
    );
};

export default BreadCrumb;