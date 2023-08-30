import React from 'react'
import User from "../assets/149071.png"


function Testimonial() {
  return (
    <div id='testimonial'>
      <h2>Testimonial</h2> 
      <section>
              <TestimonialCard name={"Fareed"}  para={"Every game is not for everyone."} />
              <TestimonialCard name={"Hamza"}  para={"Remeber, every day is a chance to be better."} />
              <TestimonialCard name={"Haris"}  para={"Nobody got rich with a salary remeber."} />
      </section>
    </div>
  )
}

const TestimonialCard = ({ name, para })=>(
  <article>
    <img src={User} alt=""/>
    <h4>{name}</h4>
    <p>{para}</p>
  </article>
)

export default Testimonial;
