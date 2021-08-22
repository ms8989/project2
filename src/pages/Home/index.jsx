import React from 'react'
import Footer from '../../component/common/Footer'
import Menu from '../../component/common/Menu'
import CartCountButton from '../../component/common/CartCountButton'
import Banner from '../../component/Home/Banner'
import { menuItemsData } from '../../component/common/Menu/data'

const Home = () => {
    return (
        <div>
          <Banner/> 
          <CartCountButton/>
          <Menu list={menuItemsData}/>
         
          <Footer/> 
          
       
        </div>
    )
}

export default Home
