import React from 'react';
import { useNavigate } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, name, price, title, qualification, des, img } = course;
    const navigate = useNavigate();
    const navigateToCourseDetail = id => {
        navigate(`/course/${id}`);
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">Tittle: {title}</h5>
                    <p className='card-text'>Qualification: {qualification}</p>
                    <p className="card-text">Description: {des}</p>
                    <p className='card-text'>Price: ${price}</p>
                    {/* <a href="#" className="btn btn-primary">Checkout</a> */}
                    <button onClick={() => navigateToCourseDetail(id)} className='btn btn-primary'>Checkout: {title}</button>
                </div>
            </div>
        </div>
    );
};

export default Course;