import React from 'react'
import {motion} from "framer-motion"
import {AiFillIeCircle,AiFillAndroid,AiFillWindows} from "react-icons/ai"


function Services() {
  return (
    <div id='services'>
     <h2>Services</h2>

     <section>
      <motion.div className='serviceBox1'>
        <h3>2+</h3>
        <p>Years Experience</p>
      </motion.div>

      <motion.div className='serviceBox2'>
        <AiFillIeCircle />
        <span>Web development</span>
      </motion.div>

      <motion.div className='serviceBox3'>
        <AiFillAndroid />
        <span>App development</span>
      </motion.div>
      
      <motion.div className='serviceBox4'>
        <AiFillWindows />
        <span>Desktop development</span>
      </motion.div>

     </section>
      
    </div>
  )
}

export default Services
