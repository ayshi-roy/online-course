import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Header.css'
import Cart from '../Cart/Cart';

const Header = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <nav class="nav">
                    <a class="nav-link active" href="#">Development</a>
                    <a class="nav-link" href="#">Web Development</a>
                    <a class="nav-link" href="#">Data Science</a>
                    <a class="nav-link " href="#">Mobile Apps</a>
                </nav>
            </div>   
            
        </div>
    );
};

export default Header;