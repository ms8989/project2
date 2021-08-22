import React from 'react'
import './styles.css';
import emptyCartImg from './emptycart.png'
import { useHistory } from 'react-router';

const EmptyCart = () => {
    const history=useHistory();
    return (
        <div className='emptyCart'>
            <img src={emptyCartImg} alt='empty'/>
         <button onClick={()=>history.push('/')}><i className="fa fa-arrow-left" aria-hidden="true"></i>
         Shop Now</button>
        </div>
    )
}

export default EmptyCart
