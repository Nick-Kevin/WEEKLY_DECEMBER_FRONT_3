import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/free-mode"

import { FreeMode, Pagination } from "swiper/modules"
import CoverCard from "./CoverCard"
import Tesla from '../assets/header/covers/tesla-autopilot/cover.png'
import TeslaVector from '../assets/header/covers/tesla-autopilot/vector.png'

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
                        title="Tesla Autopilot"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[200px] w-[200px] lg:h-[360px] lg:w-[360px] overflow-hidden">
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
                    <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[200px] w-[200px] lg:h-[360px] lg:w-[360px] overflow-hidden cursor-pointer">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ background: 'red' }}
                        />
                        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                        <div className="relative flex flex-col gap-3">
                            <h1 className="text-xl lg:text-2xl">red </h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ background: 'yellow' }}
                        />
                        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                        <div className="relative flex flex-col gap-3">
                            <h1 className="text-xl lg:text-2xl">yellow </h1>
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