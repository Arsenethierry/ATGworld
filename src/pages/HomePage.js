import React from 'react';
import './styles.css'
import Header from '../components/Header'
import Posts from '../components/Posts';
import Login from '../components/Login';
import { BsBoxArrowInRight } from 'react-icons/bs';


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
                <div className='row'>
                    <div className='col-8'>
                        <nav>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active"><u>All Posts(32)</u></li>
                                <li class="breadcrumb-item">Article</li>
                                <li class="breadcrumb-item">Education</li>
                                <li class="breadcrumb-item">Job</li>
                            </ol>
                        </nav>   
                    </div>
                    <div className='d-inline-flex flex-row-reverse col-4 gap-2'>
                        <button type="button" class="btn btn-outline-secondary"><BsBoxArrowInRight className='me-2 fs-5' />Leave Group</button>
                        <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="writePost" data-bs-toggle="dropdown" aria-expanded="false">
                                Write Post
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="writePost">
                                <li><a class="dropdown-item" href="#">Article</a></li>
                                <li><a class="dropdown-item" href="#">Education</a></li>
                                <li><a class="dropdown-item" href="#">Job</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className='mt-n2' />
                </div>
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