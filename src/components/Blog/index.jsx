import React,{useState,useEffect} from 'react'
import {
    Section,
    Content,
    Slide,
    SlideWrapper,
    SliderCard,
    Slide_Overlay,
} from './style'
import img1 from '../../img/blog.png'
import img2 from '../../img/blog1.png'
import img3 from '../../img/blog2.png'

const Blog = () => {
    const data = [
        { title: "Bootsland Perfect Performance landing Page", image: img1, desc: "Businesses need access to development" },
        { title: "The most powerfull template that make you.", image: img2, desc: "Businesses need access to development " },
        { title: "A brand for a company is like a reputation person.", image: img3, desc: "Businesses need access to development" },
    ] 
    const [current, setCurrent] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)
    let timeOut = null
    useEffect(() => {
        timeOut = autoPlay && setTimeout(() => {
              PlaySlide()
        },3000)    
    })
    const PlaySlide = () => {
        setCurrent(current === data.length - 1? 0 :  current + 1)
    }
  return (
      <Section id="blog">
          <Content>
              <h1>From Our Blog List Latest Feed</h1>
              <p>All types of businesses need access<br />
                  to development resources,so we give you the option to<br />
                decide how much you need to use.</p>
          </Content>
          <Slide onMouseEnter={() => {
              setAutoPlay(false)
              clearImmediate(timeOut)
          }}
              onMouseLeave={() => {
                  setAutoPlay(true)
           }}
          >
              <SlideWrapper>
                  {data.map((data, index) => {
                      return (
                          <SliderCard key={index} className={index == current ? "carosuel_card active" :"carosuel_card "}>
                              <img src={data.image} alt="" />
                             
                              <Slide_Overlay>
                                  <h2>{data.title}</h2>
                                  <p>{data.desc}</p>
                              </Slide_Overlay>
                          </SliderCard>
                       )
                   })}
              </SlideWrapper>
          </Slide>
    </Section>
  )
}

export default Blog