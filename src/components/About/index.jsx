import React from 'react'
import { Section, Content,Box } from './style'
import img1 from '../../img/box.svg'
import img2 from '../../img/box1.svg'
import img3 from '../../img/box2.svg'
import img4 from '../../img/box3.svg'
import img5 from '../../img/box4.svg'
const About = () => {
    const data = [
        { title: "App Development",image: img1  ,desc: "Serspiciatis unde omnis iste natus laudantium, totam rem aperiam." },
        { title: "Clean Code", image: img2, desc: "Serspiciatis unde omnis iste natus laudantium, totam rem aperiam." },
        { title: "Software Development", image: img3, desc: "Serspiciatis unde omnis iste natus laudantium, totam rem aperiam" },
        { title: "Easy to customize", image: img4, desc: "Serspiciatis unde omnis iste natus laudantium, totam rem aperiam." },
        { title: "24/7 Support", image: img5, desc: "Serspiciatis unde omnis iste natus laudantium, totam rem aperiam." },
   ]
  return (
      <Section id="about">
          <h1>One Platform, Deep Insight Why Choose Bootsland</h1>
          <Content>
              {data.map((data, index) => {
                  return (
                      <Box key={index}>
                          <div>
                              <img src={data.image} alt="image " />
                              <h3>{data.title}</h3>
                          </div>
                          <p>{data.desc}</p>
                      </Box>  
                  )
                  
              })}
          </Content>
    </Section>
  )
}

export default About