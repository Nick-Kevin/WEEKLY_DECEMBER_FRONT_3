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

import youtubeLogo from './assets/header/logos/Youtube.svg'
import spotifyLogo from './assets/header/logos/Spotify.svg'
import googlePodcastLogo from './assets/header/logos/Google-Podcast.svg'
import curlVector from './assets/utils/vector.svg'

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
        <div className="flex flex-col lg:flex-row bb-1 bt-1 justify-between py-4 my-12 lg:my-32 lg:py-11 mx-4 lg:mx-32">
          <h3 class="f-bold text-xl">Supported by:</h3>
          <div className="flex justify-between mt-6 lg:mt-0 lg:gap-x-28 border-top-black border-top-solid boder-top-1">          
            <img src={spotifyLogo} className="w-16 lg:w-auto" alt="logo spotify" />
            <img src={googlePodcastLogo} className="w-24 lg:w-auto" alt="logo spotify" />
            <img src={youtubeLogo} className="w-16 lg:w-auto" alt="logo youtube" />
          </div>        
        </div>
        <img src={curlVector} className="absolute bottom-[-75px] left-[47%] lg:bottom-[-205px] lg:left-[49%] w-4 lg:w-auto" alt="vector" />
      </div>
      <div className="h-96 bg-white">

      </div>
    </>
  )
}

export default App
