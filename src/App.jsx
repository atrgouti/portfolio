import { useState } from 'react'
import NavBar from './NavBar'
import MainSection from './MainSection'
import AboutMe from './AboutMe'
import MySkills from './MySkills'
import Projects from './Projects'
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