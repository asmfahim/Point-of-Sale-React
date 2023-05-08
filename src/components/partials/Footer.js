import React from 'react';

const Footer = () => {
    return (
        <footer className="py-1 bg-light mt-auto">
            <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted ">Copyright &copy; Boi Ghar year {new Date().getFullYear()} </div>
                    <div>
                        <small>Design & Developed by <a href={'https://github.com/asmfahim/'}>Asm Fahim</a></small>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;