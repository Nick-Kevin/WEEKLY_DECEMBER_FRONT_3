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

import SectionHeader from './components/SectionHeader'
import Illustration from './components/Illustration'
import illustration1 from './assets/about/Illustration-1.svg'
import illustration2 from './assets/about/Illustration-2.svg'
import johnSmith from './assets/about/avatar.png'
import spotifyLogo2 from './assets/about/Spotify.svg'
import starInAbout from './assets/about/Star.png'
import vectorInAbout from './assets/about/vector.svg'
import ControledSlider from './components/ControledSlider'

import sparkleInTestimonials from './assets/testimonials/Sparkle.svg'
import Features from './components/Features'
import Content from './components/Content'
import vectorInContent from './assets/contents/vector.svg'
import Pricing from './components/Pricing'
import starInPricing from './assets/pricing/star.svg'
import vectorInPricing from './assets/pricing/vector.svg'
import groupInPricing from './assets/pricing/group.svg'

function App() {
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

  const firstButton = (label) => {
    return (
      <Button 
        className="f-bold text-sm border-black border-2 mt-4 px-7 lg:px-10 py-3 lg:py-5 guide-shadow-2 border-solid text-white bg-black lg:inline-block hover:bg-transparent hover:text-black hover:border-black"
        label={label}
      />
    )
  }

  const firstRowInAbout = () => {
    return (
      <>
        <SectionHeader
          title="Talk. Listen. Get inspired by every minute of it."
          titleClass="w-full lg:w-7/12"
        />
      </>
    )
  }

  const secondRowInAbout = () => {
    return (
      <div className="w-full flex justify-between gap-x-5 lg:gap-x-40 mx-4 lg:mx-32">
        <Illustration
          img={illustration1}
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. "
        />
        <Illustration
          img={illustration2}
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. "
        />
      </div>
    )
  }

  const thirdRowInAbout = () => {
    const firstRow = () => {
      return (<h3 className="lg:text-9xl text-6xl red-text">“</h3>)
    }

    const secondRow = () => {
      return (<h3 className="text-2xl lg:text-4xl !leading-tight f-bold">One of the best daily podcasts that covers every topic on Spotify.</h3>)
    }

    const thirdRow = () => {
      return (
        <div className="relative mt-6 flex flex-col lg:flex-row items-center gap-x-2 lg:mt-14">
          <p className="flex items-center gap-x-2">
            <img src={johnSmith} alt="John Smith" />
            <span>John Smith,</span>
          </p>
          <p className="flex items-center text-black f-bold gap-x-2 mt-4 lg:mt-0">
            <img src={spotifyLogo2} className="w-5" alt="spotify logo" />
            <span>Social Community Manager</span>
          </p>
          <img src={starInAbout} className="absolute w-20 opacity-75 lg:opacity-100 lg:w-auto left-60 lg:left-[665px] bottom-64 lg:bottom-[265px]" alt="star" />
          <img src={vectorInAbout} className="absolute opacity-75 lg:opacity-100 bottom-10 lg:bottom-6 w-14 lg:w-auto left-[-50px] lg:left-[-400px]" alt="vector" />         
        </div>
      )
    }

    return (
      <>
        <FlexColThreeRows
          otherClass = "mt-6 bg-main-color py-10 px-4 lg:px-40 mx-4 lg:mx-32 lg:mt-8 lg:mt-11 relative z-20"
          firstRow = {firstRow()}
          secondRow = {secondRow()}
          thirdRow = {thirdRow()}
        />
      </>
    )
  }

  const firstRowInFeatures = () => {
    return (
      <>
        <SectionHeader
          title="Membership benefits"
          vector={sparkleInTestimonials}
          vectorClass="w-8 lg:w-auto bottom-14 lg:bottom-9 left-[-15px] lg:left-[-100px]"
          subtitle="Become our sponsor and get all benefits"
        />
      </>
    )
  }

  const firstRowInContent = () => {
    return (
      <>
        <SectionHeader
          title="Recent Episodes"
          subtitle="Available on your favorite platform"
        />
      </>
    )
  }

  const firstRowInArticle = () => {
    return (
      <>
        <SectionHeader
          title="Article and News"
          subtitle="News, tips, tricks and more"
        />
      </>
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
            thirdRow = {firstButton('SUBSRCIBE')}
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
        <img src={curlVector} className="absolute z-20 bottom-[-75px] left-[47%] lg:bottom-[-205px] lg:left-[49%] w-4 lg:w-auto" alt="vector" />
      </div>
      <div className="bg-white py-10 lg:py-28 relative">
        <FlexColThreeRows
          otherClass = "mt-6 lg:mt-8 lg:mt-11 gap-y-12 relative z-20 lg:gap-y-28"
          firstRow = {firstRowInAbout()}
          secondRow = {secondRowInAbout()}
          thirdRow = {thirdRowInAbout()}
        />
          <img src={curlVector} className="absolute z-20 bottom-[-30px] left-[47%] lg:bottom-[-80px] lg:left-[49%] w-4 lg:w-auto" alt="vector" />
      </div>
      <div className="bg-alice-blue py-16 lg:py-40 relative">
        <SectionHeader
          title="What our listeners say"
          vector={sparkleInTestimonials}
          vectorClass="w-8 lg:w-auto bottom-14 lg:bottom-9 left-[-15px] lg:left-[-100px]"
          subtitle="Their experience throughout every platform"
        />
        <ControledSlider/>
        <img src={curlVector} className="absolute z-20 bottom-[-30px] left-[47%] lg:bottom-[-80px] lg:left-[49%] w-4 lg:w-auto" alt="vector" />
      </div>
      <div className="py-16 lg:py-28 relative">
        <FlexColThreeRows
          otherClass = "mt-6 lg:mt-8 lg:mt-11 gap-y-12 relative z-20 lg:gap-y-28"
          firstRow = {firstRowInFeatures()}
          secondRow = {(<Features/>)}
          thirdRow = {firstButton('SEE PRICING')}
        />
        <img src={curlVector} className="absolute z-20 bottom-[-30px] left-[47%] lg:bottom-[-80px] lg:left-[49%] w-4 lg:w-auto" alt="vector" />
      </div>
      <div className="bg-alice-blue py-16 lg:py-28 relative">
        <FlexColThreeRows
          otherClass = "mt-6 lg:mt-8 z-10 lg:mt-11 gap-y-12 relative z-20 lg:gap-y-28"
          firstRow = {firstRowInContent()}
          secondRow = {(<Content/>)}
          thirdRow = {firstButton('BROWSE ALL EPISODES')}
        />
        <img src={vectorInContent} className="absolute w-14 top-40 z-0 opacity-50 lg:opacity-100 right-0 lg:w-auto lg:top-64 lg:right-14" alt="vector" />
        <img src={curlVector} className="absolute z-20 bottom-[-30px] left-[47%] lg:bottom-[-80px] lg:left-[49%] w-4 lg:w-auto" alt="vector" />
      </div>
      <div className="bg-white py-16 lg:py-40 relative">
        <img src={starInPricing} className="absolute opacity-0 lg:opacity-100 z-0 top-80 right-10" alt="star" />
        <SectionHeader
          title="Become our sponsor"
          vector={groupInPricing}
          vectorClass="w-8 lg:w-auto bottom-14 lg:bottom-9 left-[-15px] lg:left-[-100px]"
          subtitle="Get exclusive episodes, merch and more"
        />
        <Pricing/>        
        <img src={vectorInPricing} className="absolute z-0 bottom-28 left-16" alt="star" />
        <img src={curlVector} className="absolute z-20 bottom-[-30px] left-[47%] lg:bottom-[-80px] lg:left-[49%] w-4 lg:w-auto" alt="vector" />
      </div>
      <div className="bg-white py-16 lg:py-28 relative">
        <FlexColThreeRows
          otherClass = "mt-6 lg:mt-8 z-10 lg:mt-11 gap-y-12 relative z-20 lg:gap-y-28"
          firstRow = {firstRowInArticle()}
          secondRow = {(<Content/>)}
          thirdRow = {firstButton('BROWSE ALL EPISODES')}
        />
        <img src={vectorInContent} className="absolute w-14 top-40 z-0 opacity-50 lg:opacity-100 right-0 lg:w-auto lg:top-64 lg:right-14" alt="vector" />
        <img src={curlVector} className="absolute z-20 bottom-[-30px] left-[47%] lg:bottom-[-80px] lg:left-[49%] w-4 lg:w-auto" alt="vector" />
      </div>
    </>
  )
}

export default App
