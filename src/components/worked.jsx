import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import data from "../assets/data.json"

function Work() {
  return (
    <div id='work'>
        <h2>WORK</h2>
        <section>
          <article>
            <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={1800}
            infiniteLoop={true}
            autoPlay={true}
            >
                  {
                    data.projects.map(i=>(
                      <div key={i.title} className='workItems'>
                        <img src={i.imgSrc} alt={i.title} />
                        <aside>
                          <h3>{i.title}</h3>
                          <p>{i.description}</p>
                          <a  target={"Blank"}  href={i.url}>Veiw demo</a>
                        </aside>
                      </div>
                    ))
                  }
            </Carousel>
          </article>
        </section>
    </div>
  )
}

export default Work
