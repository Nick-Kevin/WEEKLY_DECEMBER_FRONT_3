import { Swiper, SwiperSlide } from "swiper/react"
import SlideNavButtons from './SlideNavButtons'

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/free-mode"

import { Pagination, Navigation } from "swiper/modules"

import luna from '../assets/testimonials/luna-lovegood.png'
import emily from '../assets/testimonials/emily-blunt.png'
import mia from '../assets/testimonials/mia-winters.png'
import spotifyLogo from '../assets/header/logos/Spotify.svg'
import googlePodcastLogo from '../assets/header/logos/Google-Podcast.svg'
import youtubeLogo from '../assets/header/logos/Youtube.svg'

function ControledSlider () {
    const listeners = [
        { id: 0, avatar: luna, alias: 'Luna lovegood', podcast: spotifyLogo, podcastClass: 'w-20 ml-2' },
        { id: 1, avatar: emily, alias: 'Emily Blunt', podcast: googlePodcastLogo, podcastClass: 'w-40 ml-2' },
        { id: 2, avatar: mia, alias: 'Mia Winters', podcast: youtubeLogo, podcastClass: 'w-16 ml-2' },
    ]
    return (
        <div className="flex items-center justify-center mt-12 lg:mt-28 flex-col">
            <Swiper
                slidesPerView={1}
                spaceBetween={15}
                breakpoints={{
                    1080: { slidesPerView: 2},
                }}
                modules={[ Pagination, Navigation]}
                className="max-w-[100%] lg:max-w-[100%] px-4 lg:px-32"
            >
                { listeners.map((listener) => (
                    <>
                        <SwiperSlide key={listener.id}>
                            <div className="p-10 rounded-lg bg-white">
                                <h3 className="lg:text-7xl f-bold text-start text-6xl red-text">“</h3>
                                <h3 className="text-start text-lg lg:text-xl leading-relaxed">
                                    Lorem ipsum dolor sit amet consectet 
                                    piscing elit, sed do eiusmod tempor incidi ut labore
                                    et dolore magna aliqua.
                                </h3>
                                <div className="flex items-center mt-6">
                                    <img src={listener.avatar} alt="avatar"/>
                                    <p className="ml-2">{listener.alias},</p>
                                    <img
                                        src={listener.podcast}
                                        className={listener.podcastClass}
                                        alt="podcast"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    </>
                    ))
                }
                <SlideNavButtons/>
            </Swiper>
        </div>
    )
}

export default ControledSlider