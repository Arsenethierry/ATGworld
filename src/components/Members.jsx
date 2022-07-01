import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { BsFillShareFill, BsPenFill } from 'react-icons/bs';
import { GrView } from 'react-icons/gr';


function Members() {
    return (
        <div className='card m-2'>
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
                <div class="d-grid gap-2">
                    <button class="btn btn-outline-dark" type="button">View my website</button>
                </div>
            </div>        
        </div>
    );
}

export default Members;