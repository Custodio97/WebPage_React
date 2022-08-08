import React from 'react'
import { Section, Container, Content,DivProfile} from './style'
import profile from '../../img/profile2.png'
import profile1 from '../../img/profile.jpg'
const Service = () => {
  return (
      <Section id="service">
          <Container>
              <Content>
                  <h2>Bootsland Focus on your success</h2>
                  <p>We use the latest technologies it voluptatem<br/>
                      accusantium doloremque laudantium, totam rem aperiam.</p>
                  <DivProfile>
                      <img src={profile1} alt="" />
                      <h3>
                          Kendra Law
                          <span>Web Developer</span>
                      </h3>
                  </DivProfile>
              </Content>
              <img src={profile} alt="" />
          </Container>
    </Section>
  )
}

export default Service