import React from 'react';
import './H.css'
function Header(props){
    return(
        <div className='flex flex1'>
            <div onClick={()=>props.handelshow(false)}>Mobile Shoping</div>
            <div onClick={()=>props.handelshow(true)}>Cart<sup>{props.count}</sup></div>
        </div>
    )
}
export default Header
