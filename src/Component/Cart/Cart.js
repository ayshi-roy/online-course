import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Cart = (props) => {
    const cart = props.cart;    
    // const total = cart.reduce((total,product) => total + product.amount, 0);  
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.amount; 
        
     }    
    
    return (
        <div className="col-md-3">
           <div className="main-cart">    
                          
               <h3>Summery</h3>
               <p>Select-Course:{cart.length}</p>
              <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name:</th>
                                                <th scope="col">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                {cart.map(cart=>
                                                <td>{cart.name}</td>)
                                                }
                                                {cart.map(cart=>
                                                <td>{cart.amount}</td>)
                                                }
                                                
                                            </tr>
                                        </tbody>
                                    </table>
               
               {/* <h5>total ={total}</h5>               */}
                   
               
               
            </div> 
        </div>
    );
};

export default Cart;