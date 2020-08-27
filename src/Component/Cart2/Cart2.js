import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Cart2.css';

const Cart2 = (props) => {
    const cart = props.cart;
    let total = cart.reduce((total,product) => total + product.amount, 0);
    const total1 = Math.round(total);
    return (
        <div className="total"> 
            <h1 className="text-center">Summery</h1>           
            <div className="cart2">
                <div className="col-md-2">
                    <h4>Select-Course:{cart.length}</h4>
                </div>                     
                <div className="col-md-5">                    
                    <h4>Name:</h4>
                    <br/>
                    <ul>
                    {cart.map(cart =><li> {cart.name}</li>)}
                    <hr/>
                    </ul>                    
                </div>
                <div class="col-md-3">
                    <h4>Price</h4>
                    <br/>
                    <ul>
                    {cart.map(cart=>  <li>${cart.amount}</li>)}
                    <hr/>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h5>total = ${total1}</h5>
                </div>               
                
            </div>     
        </div>
    );
};

export default Cart2;