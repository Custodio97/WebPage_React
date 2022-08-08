import React from 'react'
import { Section, Container,GrupoButtons } from './style'
import home from '../../img/home.png'

const Home = () => {
  return (
      <Section id='home'>
          
          <Container>
              <h1>Let's Work With Bootsland</h1>
              <p>Build a Beautiful, Clean & Modern Design<br/>
                  website with flexible Bootstrap components.</p>
              <GrupoButtons>
                  <button className='btn1'>Learn More</button>
                  <button className='btn2'>Get Started</button>
              </GrupoButtons>
          </Container>
          <img src={home} alt="home image" />
    </Section>
  )
}

export default Home