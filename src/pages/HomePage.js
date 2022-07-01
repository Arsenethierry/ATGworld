import React, { useState } from 'react';
import './styles.css'
import Header from '../components/Header'
import Posts from '../components/Posts';
import Login from '../components/Login';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { MdGroup } from 'react-icons/md';
import Modal from 'react-bootstrap/Modal';
import RightSection from '../components/RightSection';
import Members from '../components/Members';
import Navbar from '../components/Navbar';




function HomePage() {
const [isModalOpen, setIsModalOpen] = useState(false);

const closeModal = () => setIsModalOpen(false);
const toggleModal = () => setIsModalOpen(true);

    return (
        <div>
            <Navbar />
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
                        <button type="button" onClick={ toggleModal } class="btn btn-outline-secondary"><MdGroup className='me-2 fs-5'/>Join Group</button>
                        <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle" role="button" id="writePost" data-bs-toggle="dropdown" aria-expanded="false">
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
                        <Members />
                    </div>
                    <div className='col-md-4'>
                        <RightSection />
                    </div>
                </div>
            </div>

            <Modal show={isModalOpen} onHide={closeModal} dialogClassName="modal-90w">
                <Modal.Header closeButton>
                    <p className='text-success w-75'>Let's learn, share &amp; inspire each other with our passion for computer engeneering. Signup now</p>
                </Modal.Header>
                <Modal.Body>
                    <Login />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default HomePage;