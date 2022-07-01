import React from 'react';
import './styles.css'
import Header from '../components/Header'
import Posts from '../components/Posts';


const RightSection = () =>{
    return(
        <div></div>
    );
}

function HomePage() {
    return (
        <div>
            <Header />
            <div className='container'>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active"><u>All Posts(32)</u></li>
                        <li class="breadcrumb-item">Article</li>
                        <li class="breadcrumb-item">Education</li>
                        <li class="breadcrumb-item">Job</li>
                    </ol>
                    <hr className='mt-n2' />
                </nav>
                <div className='row'>
                    <div className='col-12 col-md-8'>
                        <Posts />
                        <Posts />
                        <Posts />
                        <Posts />
                    </div>
                    <div className='col-md-4'>
                        <RightSection />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;