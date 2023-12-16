import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StickyNavbar from './components/StickyNavbar'
import FlexColThreeRows from './components/FlexColThreeRows'
import Button from './components/Button'

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
        className="f-bold text-sm border-black border-2 mt-2 px-10 py-5 guide-shadow-2 border-solid text-white bg-black lg:inline-block hover:bg-transparent hover:text-black hover:border-black"
        label="SUBSCRIBE"
      />
    )
  }

  return (
    <>
      <StickyNavbar/>
      <FlexColThreeRows
        otherClass = "mt-8 lg:mt-11 gap-y-10"
        firstRow = {firstRowInHeader()}
        secondRow = {secondRowInHeader()}
        thirdRow = {thirdRowInHeader()}
      />
    </>
  )
}

export default App
