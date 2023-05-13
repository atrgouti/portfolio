import { useState } from 'react'
import NavBar from './NavBar'
import MainSection from './mainSection'
import AboutMe from './AboutMe'
import MySkills from './MySkills'
import Projects from './projects'
import Contact from './Contact'
import "./AppStyle.css"
export default function App() {
  return(
    <>
    <nav>
      <NavBar></NavBar>
    </nav>
      <MainSection></MainSection>
    <section>
      <AboutMe></AboutMe>
      <MySkills></MySkills>
      <Projects></Projects>
      <Contact></Contact>
    </section>
    </>
  )
}