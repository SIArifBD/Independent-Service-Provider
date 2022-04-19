// import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CourseDetails = () => {
    const { courseId } = useParams();
    // const [courses, setCourses] = useState({});
    // useEffect(() => {
    //     if (courseId != undefined) {
    //         fetch('courses.json')
    //             .then(res => res.json())
    //             .then(data => setCourses(data));
    //     }
    // }, [courseId])
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