import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { BsFillShareFill, BsPenFill } from 'react-icons/bs';
import { GrView } from 'react-icons/gr';

function Posts() {
    return (
        <div className='card m-2'>
            <img src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="creator"/>
            <div className='card-body'>
                <h6 className='card-text'><BsPenFill className='me-1' />Article</h6>
                <div className='row'>
                    <div className='d-flex flex-row-reverse'>
                        <div className='col-2 pt-2 top-0 end-0'>
                            <FaEllipsisV />
                        </div>
                        <div className='col-10'>
                            <h4 className='card-title'>What if famous brands had regular fonts meet? RegularBrands!</h4>
                        </div>
                    </div>
                </div>
                <h5 className='card-text text-secondary py-1'>I've worked in UX for the better part of a decade. From now on, I plan to rei...</h5>
                <div className='row'>
                    <div className='col-7'>
                        <div className='d-flex flex-row'>
                                <img src='/assets/avatar.png' className='col-6' id='avatar' alt='creator avatar' />
                                <h5 className='p-2'>Sarthak Kamra</h5>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='d-flex flex-row-reverse'>
                            <div class="p-2"><BsFillShareFill className='bg-secondary fs-2 p-2'/></div>
                            <div class="p-2 text-secondary"><GrView className='me-2' />1.4k Views</div>
                        </div>
                    </div>
                </div>        
            </div>
        </div>
    );
}

export default Posts;