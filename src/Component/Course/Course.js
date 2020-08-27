import React from 'react';
import coursedata from '../../fakeData/coursedata';
import { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CourseItem from '../CourseItem/CourseItem';
import './Course.css';
import Cart2 from '../Cart2/Cart2';


const Course = () => {
    const courseValue = coursedata.slice(0,12);
    const [item, setItem] = useState(courseValue);

    const [cart, setCart] = useState([]);
    
    const handleAddCourse = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }

    return (
        <div className="main">
            <div className="col-md-12">                 
                    <Cart2 cart={cart}></Cart2>                    
            </div>
            <div className="container">                
                <div className="col-md-12">
                    <div className="row">                        
                        {
                        item.map(product => <CourseItem product={product} handleAddCourse={handleAddCourse}></CourseItem>)
                        }
                    </div>
                    {/* <div className="col-md-6">                 
                    <Cart cart={cart}></Cart>                    
                    </div>               */}
                </div>            
                             
            </div>
        </div>
        
    );
};

export default Course;