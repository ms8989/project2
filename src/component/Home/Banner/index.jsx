import React from 'react';
import './styles.css';
import bannerImg from './banner.png';
import Logo from '../../common/Logo';
import {Link} from 'react-scroll';
import Login from '../../Auth/login';



const Banner = (props) => {
  const {auth,logoutHandler}=props;
  return(
    <>
  <header>
    <div className='header-content'>
 
      <Logo />
      {!auth ?
    <Link to='/Login'>
       <button onClick={()=>logoutHandler()} className="btn btn-outline-danger btn-sm btn-1">Logout</button>
     
    </Link>
    :
    <button  className=" btn-outline-dark btn-sm btn-2">Login</button>
    }
      <div className='content-main'>



        <h1>Delicious food for your cravings</h1>
        <p>We made fresh and healthy meals with different recipes</p>
       <button> <Link className="view menu text-white " to="menu" spy={true} smooth={true} duration={9000}>View Menu<i className="fa fa-arrow-down" aria-hidden="true"></i></Link></button>

      </div>
    </div>
    <img className='header-img' src={bannerImg} alt='banner' />
  </header>
</>
  )
}

export default Banner;