// Framer Motion: useAnimation

import React from 'react'
import "./Box5.css"
import { motion } from "framer-motion"

const Box5 = () => {
  return (
    <div className='box-container'>
        <button>Move Right</button>
        <button>Move left</button>
        <button>Circle</button>
        <button>Square</button>
        <button>Stop</button>
        <div className='box'>

        </div>
    </div>
  )
}

export default Box5