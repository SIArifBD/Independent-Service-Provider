import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CourseDetails = () => {
    const { courseId } = useParams();
    return (
        <div>
            <h2>Welcome to detail: {courseId}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default CourseDetails;