import React from 'react'
import { AiOutlineMenu } from "react-icons/ai"

const header = ({ setMenuOpen, menuOpen }) => {
    return (
        <>

            <nav>
                <NavContant setMenuOpen={setMenuOpen} />
            </nav>



            <button className='navBtn' onClick={() => setMenuOpen(!menuOpen)}
            ><AiOutlineMenu /></button>
        </>
    )
}


export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`navPhone  ${menuOpen ? "navPhoneComes" : " "}`}>
            <NavContant setMenuOpen={setMenuOpen} />
        </div>
    )
}

const NavContant = ({ setMenuOpen }) => (
    <>
        <h2>Fareed.</h2>
        <div>
            <a onClick={() => setMenuOpen(false)} href="#home">Home</a>
            <a onClick={() => setMenuOpen(false)} href="#work">Work</a>
            <a onClick={() => setMenuOpen(false)} href="#timeline">Experince</a>
            <a onClick={() => setMenuOpen(false)} href="#services">Services</a>
            <a onClick={() => setMenuOpen(false)} href="#testimonial">Testimonial</a>
            <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
        </div>
        <a href="mailto:fareedmateen0078@gmail.com"><button>Email</button>
        </a>

    </>

)

export default header
