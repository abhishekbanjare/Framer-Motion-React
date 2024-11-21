import React, { useState } from 'react'
import "./Box1.css"
import { motion} from "framer-motion"

const Box1 = () => {
    const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div className='box-container'>
        <motion.div
            className='box'
            // style={{opacity: 0.2}}
            animate={{
                x: isAnimating ? 1000 : 0,
                // y: 900,
                opacity: isAnimating ? 1 : 0.5,
                rotate: isAnimating ? 360 : 0
                // backgroundColor: "blue",
                // scale: 2
            }}
            initial={{
                opacity: 0.1
            }}
            transition={{
                // type: "tween",
                // duration: 2,

                type: "spring",
                stiffness: 60,
                damping: 20
            }}
            onClick={() => setIsAnimating(!isAnimating)}
        >
        
        </motion.div>
    </div>
  )
}

export default Box1