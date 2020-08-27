import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './CourseItem.css';

const CourseItem = (props) => {
    const {name,amount,img,teacher} = props.product;
    // const handleAddCourse = props.handleAddCourse;
    return (
        <div className="col-md-3">
            <div class="card"> 
                <img src={img} alt=""/> 
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h4>${amount}</h4>
                    <p class="card-text">{teacher}</p>
                    <a onClick={() => props.handleAddCourse(props.product)} className="btn btn-primary">Enroll Now</a>
                </div>
            </div>            
        </div>
    );
};

export default CourseItem;