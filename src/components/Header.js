import React from 'react';
import './styles.css';


function Header() {
    return (
        <div className='jumbotron p-5 mb-4'>
            <div className='container'>
                <div className='row row-header pt-5'>
                    <div className='col-12 col-sm-6 pt-5 text-white'>
                        <h1>Computer Engineering</h1>
                        <p>142,765 Computer engineers follow this</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;