import React, { useRef } from 'react'
import { animate, motion } from "framer-motion"
import  Typewriter  from 'typewriter-effect'
import {BsArrowUpRight} from "react-icons/bs"
import Me from "../assets/logo3.png"


function Home() {


    const clientCounts = useRef(null);

    const animationClientsCount = ()=>{
        animate(0,50,{
            duration:1.2,
            onUpdate:(v) => (clientCounts.current.textContent = v.toFixed()),
        })
    }

    const projectCount = useRef(null);

    const animationProjectsCount = ()=>{
        animate(0,100,{
            duration:1.2,
            onUpdate:(m) => (projectCount.current.textContent = m.toFixed()),
        })
    }

    const animations ={
       h1:{
        initial:{
            x:"-100%",
            opacity:0,
    
        },
        whileInView:{
            x:0 , opacity:1,
        },
       },

       button:{
        initial:{
            y:"-100%",
            opacity:0,
    
        },
        whileInView:{
            y:0 , opacity:1,
        },
       },
    }

  return (
    <div id='home'> 
      
      <section>
            <div>
                <motion.h1  {...animations.h1}>
                    Hi, I Am <br />Fareed Sheikh
                </motion.h1>


                <Typewriter options={{
                strings:["A Developer" ,"A Designer", "A Creator" ],
                autoStart:true,
                loop:true,
                cursor:"",
                wrapperClassName:"typewriterpara",
            }}
                />

                <div>
                <a href="mailto:fareedmateen0078@gmail.com">Hire Me</a>
                <a href="#work">Projects <BsArrowUpRight/> </a>
                </div>

                <article data-2>
                    <p>+<motion.span whileInView={animationClientsCount} ref={clientCounts}></motion.span></p>
                    <span>Clients Wordwide</span>
                </article>

                <aside>

                <article>                                                         
                    <p>+<motion.span whileInView={animationProjectsCount} ref={projectCount}></motion.span></p>
                    <span>Projects Done</span>
                </article>
               
                <article data-special >
                    <p>Contact</p>
                    <span>fareedmateen0078@gmail.com</span>
                </article>
                
                </aside>
            </div>
      </section>

      <section>
        <img src={Me} alt="Fareed Sheikh" />
      </section>
    </div>
  )
}

export default Home
