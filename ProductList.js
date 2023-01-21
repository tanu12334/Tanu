import React from "react";
import './H.css'
function Services({product ,Addtocart}){
    return(
        <div className="flex">
            {
                product.map((productItem, productindex)=>{
                    return(
                        <div className="product">
                            <img src={productItem.url}  />
                            <p>{productItem.name}</p>
                            <p>
                                {
                                    productItem.provider
                                }  
                              </p>
                            <p>
                                {
                                    productItem.price
                                }
                            </p>
                            <button type="button" onClick={()=>Addtocart(productItem)}>Add to Cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Services
