import React from 'react'
import { AboutCard } from './Styles/Card.Styles'
import linkedinVH from '../Images/linkedinVH.jpeg'
import linkedinYC from '../Images/linkedinYC.jpg'
import { Header } from './Styles/Header.Styles'
import { AboutGrid, ContentInCenterColumn } from './Styles/PageGrid.Style'


function About() {
  return (
    <div>
      <Header>
        <h1>About</h1>
      </Header>
      <ContentInCenterColumn>
        <AboutGrid>
          <AboutCard>
            <img src={linkedinVH} alt="dev"/>
            <h2>Victor Haynes</h2>
            <a href="https://www.linkedin.com/in/victor-haynes/">Linkedin</a>  
            <a href="https://github.com/victorhaynes">GitHub</a>
            <h4>JavaScript / React / Ruby / Sinatra</h4>     
          </AboutCard>
          <AboutCard>
          <img src={linkedinYC} alt="Dev 2"/>
            <h2>Yoojin Cheong</h2>
            <a href="https://www.linkedin.com/in/yoojin-cheong/">Linkedin</a>
            <a href="https://github.com/cyoojin513/">GitHub</a>
            <h4>JavaScript / React / Ruby / Sinatra</h4>     
          </AboutCard>
        </AboutGrid>
      </ContentInCenterColumn>
      <h2 className='aboutPage'>IRON:</h2>
      <h2 className='aboutText'>an online marketplace for buying and selling luxury vehicles,</h2>
      <h2 className='aboutText' >A fullstack React.js app with a Ruby Sinatra API</h2>   
    </div>
    
  )
}

export default About