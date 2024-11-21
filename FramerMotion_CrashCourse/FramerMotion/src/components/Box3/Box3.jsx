// // Framer Motion: Variants

// import React from 'react'
// import './Box3'
// import {motion} from 'framer-motion'

// const Box3 = () => {
//     const boxVariant ={
//         lion: {
//             x: 100,
//             scale: 1.5,
//             backgroundColor: "yellow"
//         },
//         eliphant: {
//             x: 900,
//             scale: 0.5,
//             backgroundColor: "green"
//         }
//     }
//   return (
//     <div className='box-container'>
//         <motion.div 
//         className='box'
//         // animate={{x: 0}}
//         // initial={{x: -1000}}

//         variants={boxVariant}
//         // animate="lion"
//         initial="lion"
//         animate="eliphant"
//         >

//         </motion.div>
//     </div>
//   )
// }

// export default Box3

// ...........................................................................................................
// ...........................................................................................................

import React from 'react'
import './Box3.css'
import {motion} from 'framer-motion'

const Box3 = () => {
    const boxVariant = {
        hidden: {
            x: "-100vw"
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.5,
                when:"beforChildren"
            }
        }
    }
    const listVariant = {
        hidden:{
            x: -10,
            opacity: 0
        },
        visible:{
            x:0,
            opacity: 1,
            // transition:{
            //     delay: 1
            // }
            staggerChildren: 0.2
        }
    }
   
  return (
    <div className='box-container'>
        <motion.div 
          className='box'
          variants={boxVariant}
          animate="visible"
          initial="hidden"
        >
            {
                [1,2,3].map(box => {
                    return (
                    <motion.li
                       className='boxItem'
                       variants={listVariant}
                    //    animate="visible"
                    //    initial="hidden"
                       
                       >

                       </motion.li>
                ) })
            }

        </motion.div>
    </div>
  )
}

export default Box3