import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/free-mode"

import { FreeMode, Pagination } from "swiper/modules"

import CoverCard from "./CoverCard"

import Tesla from '../assets/header/covers/tesla-autopilot/cover.png'
import TeslaVector from '../assets/header/covers/tesla-autopilot/vector.png'
import Self from '../assets/header/covers/self-confidence/cover.png'
import SelfVector from '../assets/header/covers/self-confidence/vector.png'
import PMind from '../assets/header/covers/preplexed-mind/cover.png'
import PMindVector from '../assets/header/covers/preplexed-mind/vector.png'
import Womens from '../assets/header/covers/womens-rights/cover.png'
import WomensVector from '../assets/header/covers/womens-rights/vector.png'

function ActiveSlider () {
    return (
        <div className="flex items-center justify-center mt-28 flex-col bg-[#6c34af]">
            <Swiper
                breakpoints={{
                    10: {
                      slidesPerView: 1.57,
                      spaceBetween: 15,
                    },
                    1024: {
                      slidesPerView: 3.2,
                      spaceBetween: 0,
                    },
                }}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                className="max-w-[100%] lg:max-w-[100%] px-4 lg:px-16"
            >
                <SwiperSlide>
                    <CoverCard
                        bgUrl={Tesla}
                        vector={TeslaVector}
                        vectorWidth="w-40 lg:w-auto"
                        title="Tesla Autopilot"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CoverCard
                        bgUrl={Self}
                        vector={SelfVector}
                        vectorWidth="w-28 z-0 lg:w-auto absolute left-14 top-4 top-0 lg:left-28 lg:top-10"
                        title="Self-confidence"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CoverCard
                        bgUrl={PMind}
                        vector={PMindVector}
                        vectorWidth="w-20 lg:w-36 ml-12 mt-2 lg:ml-[80px] lg:mt-4"
                        title="Perplexed Mind"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CoverCard
                        bgUrl={Womens}
                        vector={WomensVector}
                        vectorWidth="w-48 z-0 lg:w-auto absolute left-0 top-0"
                        title="Womens Rights"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ background: 'blue' }}
                        />
                        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                        <div className="relative flex flex-col gap-3">
                            <h1 className="text-xl lg:text-2xl">blue </h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ background: 'blue' }}
                        />
                        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                        <div className="relative flex flex-col gap-3">
                            <h1 className="text-xl lg:text-2xl">blue </h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ background: 'blue' }}
                        />
                        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                        <div className="relative flex flex-col gap-3">
                            <h1 className="text-xl lg:text-2xl">blue </h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ background: 'blue' }}
                        />
                        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                        <div className="relative flex flex-col gap-3">
                            <h1 className="text-xl lg:text-2xl">blue </h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ background: 'blue' }}
                        />
                        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                        <div className="relative flex flex-col gap-3">
                            <h1 className="text-xl lg:text-2xl">blue </h1>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ActiveSlider