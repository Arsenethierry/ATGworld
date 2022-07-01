import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import {ImNotification } from 'react-icons/im';
import { BiLike } from 'react-icons/bi'



function RightSection() {
    return (
        <div className='container mx-3'>
            <div className='row'>
                <div class="input-group my-3">
                    <MdLocationPin className='fs-2' id="button-addon2" />
                    <input type="text" class="form-control" placeholder="Enter your location" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                    <GrClose className='fs-4 mt-1' id="button-addon2" />
                </div>
            </div>
            <div className='d-inline-flex flex-row py-3'>
                <ImNotification className='fw-light fs-4 mx-2' />
                <p className='text-secondary fs-6 fw-light'>Your location will help us serve better and extend a personalised experience.</p>   
            </div>
            <div className='d-inline-flex flex-row pt-3'>
                <BiLike className='fw-light fs-4 mx-2' />
                <h5>RECOMMENDED GROUPS</h5>
            </div>
            <div className='row py-2'>
                <div className='col-7'>
                    <div className='d-flex flex-row'>
                        <img src='/assets/avatar.png' className='col-6' id='avatar' alt='creator avatar' />
                        <h5 className='p-2'>Leisure</h5>
                    </div>
                </div>
                <div className='col-5'>
                    <div className='d-flex flex-row-reverse'>
                    <button type="button" class=" btn btn-dark rounded-pill">Follow</button>
                    </div>
                </div>
            </div>
            <div className='row py-2'>
                <div className='col-7'>
                    <div className='d-flex flex-row'>
                        <img src='/assets/avatar.png' className='col-6' id='avatar' alt='creator avatar' />
                        <h5 className='p-2'>Activism</h5>
                    </div>
                </div>
                <div className='col-5'>
                    <div className='d-flex flex-row-reverse'>
                    <button type="button" class=" btn btn-secondary btn-sm rounded-pill">Follow</button>
                    </div>
                </div>
            </div>
            <div className='row py-2'>
                <div className='col-7'>
                    <div className='d-flex flex-row'>
                        <img src='/assets/avatar.png' className='col-6' id='avatar' alt='creator avatar' />
                        <h5 className='p-2'>MBA</h5>
                    </div>
                </div>
                <div className='col-5'>
                    <div className='d-flex flex-row-reverse'>
                    <button type="button" class=" btn btn-secondary btn-sm rounded-pill">Follow</button>
                    </div>
                </div>
            </div>
            <div className='row py-2'>
                <div className='col-7'>
                    <div className='d-flex flex-row'>
                        <img src='/assets/avatar.png' className='col-6' id='avatar' alt='creator avatar' />
                        <h5 className='p-2'>Phylosopy</h5>
                    </div>
                </div>
                <div className='col-5'>
                    <div className='d-flex flex-row-reverse'>
                    <button type="button" class=" btn btn-secondary btn-sm rounded-pill">Follow</button>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-row-reverse text-primary pt-5'>See more...</div>
        </div>
    );
}

export default RightSection;