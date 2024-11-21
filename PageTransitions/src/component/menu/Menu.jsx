import React from 'react'
import './Menu.css'
import { motion } from "framer-motion"
const Menu = () => {
  return (
<div className='menu_wrapper'>

      {/* <h1>Our Menu</h1> */}
      <div className='container'>
         <motion.div className='cart-box'
        //  whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.4 }}
            // animate={{ opacity: 0.2 }} // Animate opacity to 1
            // initial={{ opacity: 0, scale: 0.5 }} // Set initial opacity to 0 and scale to 0.5
            // animate={{ opacity: 1, scale: 1 }} // Animate opacity to 1 and scale to 1
            initial={{ opacity: 0, filter: "blur(1px)" }} // Set initial opacity to 0 and apply blur filter
      animate={{ opacity: 1, filter: "blur(0)" }} // Animate opacity to 1 and remove blur filter
            transition={{ type: "tween", duration: 0.2 }}
            
            
         >
            <div className='A' >
                <img src='src/assets/FoodImag/img2.jpg' alt=''/>
            </div>
            <div className='B'>
               <h3>Papperoni Pizza 1</h3>
               <p>$15.99</p>
            </div>         
         </motion.div>
        <motion.div className='cart-box'
            whileTap={{ scale: 0.9 }}
        >
            <div className='A'>
               <img src='src/assets/FoodImag/img4.jpg' alt=''/>
            </div>
            <div className='B'>
                <h3>Papperoni Pizza 2</h3>
                <p>$15.99</p>
            </div>
            
       </motion.div>
        <motion.div className='cart-box'
            whileTap={{ scale: 0.4 }}
            transition={{ type: "tween", duration: 0.9 }}
           
        >
            <div className='A'>
              <img src='src/assets/FoodImag/img5.jpg' alt=''/>
            </div>
            <div className='B'>
                <h3>Papperoni Pizza 3</h3>
                <p>$15.99</p>
            </div>
            
        </motion.div>
        <motion.div className='cart-box'
            whileTap={{ scale: 0.9 }}
        >
            <div className='A'>
               <img src='src/assets/FoodImag/img6.jpg' alt=''/>
            </div>
            <div className='B'>
                <h3>Papperoni Pizza 4</h3>
                <p>$15.99</p>
            </div>
            
        </motion.div>
        <motion.div className='cart-box'
            whileTap={{ scale: 0.4 }}
            transition={{
                type: "tween",
                duration: 0.7
            }}
        >
            <div className='A'>
               <img src='src/assets/FoodImag/img8.jpg' alt=''/>
            </div>
            <div className='B'>
                <h3>Papperoni Pizza 5</h3>
                <p>$15.99</p>
            </div>
        </motion.div>
        <motion.div className='cart-box'
            whileTap={{ scale: 0.9 }}
        >
            <div className='A'>
                <img src='src/assets/FoodImag/img3.jpg' alt=''/>
            </div>
            <div className='B'>
               <h3>Papperoni Pizza 6</h3>
               <p>$15.99</p>
            </div>
              
        </motion.div>

        <motion.div className='cart-box'
            whileTap={{ scale: 0.4 }}
            transition={{
                type: "tween",
                duration: 0.7
            }}
        >
            <div className='A'>
                <img src='src/assets/FoodImag/img2.jpg' alt=''/>
            </div>
            <div className='B'>
               <h3>Papperoni Pizza 7</h3>
               <p>$15.99</p>
            </div>
            
         </motion.div>
        <motion.div className='cart-box'
            whileTap={{ scale: 0.9 }}
        >
            <div className='A'>
               <img src='src/assets/FoodImag/img4.jpg' alt=''/>
            </div>
            <div className='B'>
                <h3>Papperoni Pizza 8</h3>
                <p>$15.99</p>
            </div>
            
       </motion.div>
        <motion.div className='cart-box'
            whileTap={{ scale: 0.4 }}
            transition={{
                type: "tween",
                duration: 0.7
            }}
        >
            <div className='A'>
              <img src='src/assets/FoodImag/img5.jpg' alt=''/>
            </div>
            <div className='B'>
                <h3>Papperoni Pizza 9</h3>
                <p>$15.99</p>
            </div>
            
        </motion.div>
        <motion.div className='cart-box'
            whileTap={{ scale: 0.9 }}
        >
            <div className='A'>
               <img src='src/assets/FoodImag/img6.jpg' alt=''/>
            </div>
            <div className='B'>
                <h3>Papperoni Pizza 10</h3>
                <p>$15.99</p>
            </div>
            
        </motion.div>
        </div>
    </div>
  )
}

export default Menu