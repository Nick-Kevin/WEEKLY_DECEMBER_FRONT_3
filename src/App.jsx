import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StickyNavbar from './components/StickyNavbar'

import FlexColThreeRows from './components/FlexColThreeRows'
import Button from './components/Button'
import ShapeWirl from './assets/header/shape-swirl.svg'
import Star1 from './assets/header/star.svg'
import StarsGroup from './assets/header/group.png'

import ActiveSlider from './components/ActiveSlider'

function App() {
  const [count, setCount] = useState(0)

  const firstRowInHeader = () => {
    return (
      <>
        <h1 className="f-bold text-5xl tracking-tight md:text-6xl lg:text-8xl">
          Your Daily <br />
          <span className="red-text">Podcast</span>
        </h1>
      </>
    )
  }

  const secondRowInHeader = () => {
    return (
      <p className="w-80 px-1">
        We cover all kinds of categories and
        a weekly special guest.
      </p>
    )
  }

  const thirdRowInHeader = () => {
    return (
      <Button 
        className="f-bold text-sm border-black border-2 mt-4 px-7 lg:px-10 py-3 lg:py-5 guide-shadow-2 border-solid text-white bg-black lg:inline-block hover:bg-transparent hover:text-black hover:border-black"
        label="SUBSCRIBE"
      />
    )
  }

  return (
    <>
      <div className="relative">
        <StickyNavbar/>
        <FlexColThreeRows
          otherClass = "mt-6 lg:mt-8 lg:mt-11 gap-y-7 relative z-20 lg:gap-y-10"
          firstRow = {firstRowInHeader()}
          secondRow = {secondRowInHeader()}
          thirdRow = {thirdRowInHeader()}
        />
        <img
          src = {ShapeWirl}
          className = "absolute w-52 opacity-5 lg:opacity-100 lg:w-auto top-14 lg:top-32"
          alt = "shape swirl"
        />
        <img
          src = {Star1}
          className = "absolute top-80 w-10 opacity-50 lg:opacity-100 lg:w-auto left-4 lg:left-64 lg:mt-4"
          alt = "star"
        />
        <img
          src = {StarsGroup}
          className = "absolute opacity-20 lg:opacity-100 z-0 w-20 lg:w-auto top-52 right-4 lg:right-14"
          alt = "stars group"
        />     
      </div>
      <ActiveSlider/>
    </>
  )
}

export default App
