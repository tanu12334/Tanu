import React from "react";
function Cart({cart}){
    return(
        <div>
            {
                cart.map((cartItem, cartindex)=>{
                    return(
                        <div>
                            <img src={cartItem.url} width="10%"/>
                            <span>{
                                cartItem.name
                            }
                            </span>
                            <span>
                            Rs{
                                cartItem.price
                                } /-

                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Cart
