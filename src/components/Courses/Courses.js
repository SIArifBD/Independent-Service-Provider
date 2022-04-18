import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div id="services" className='container'>
            <h1 className='text-primary text-center mt-5'>All Courses</h1>
            <div className="row">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;