import React from 'react';

const Course = ({ course }) => {
    console.log(course);
    const { id, name, price, title, qualification, des, img } = course;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">Tittle: {title}</h5>
                    <p className='card-text'>Qualitfication: {qualification}</p>
                    <p className="card-text">Description: {des}</p>
                    <p className='card-text'>Price: ${price}</p>
                    <a href="#" className="btn btn-primary">Checkout</a>
                </div>
            </div>
        </div>
    );
};

export default Course;