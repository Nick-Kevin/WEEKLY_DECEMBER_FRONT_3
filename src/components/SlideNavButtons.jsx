import { useSwiper } from 'swiper/react'
import arrowLeft from '../assets/testimonials/arrow-left.svg'
import arrowRight from '../assets/testimonials/arrow-right.svg'

function SlideNavButtons () {
	const swiper = useSwiper()
	return (
		<div className="flex justify-start gap-x-4 mt-5 lg:mt-14">
			<button className="bg-transparent hover:border-transparent p-0" onClick={() => swiper.slidePrev()}>
				<img src={arrowLeft} alt="previous" />
			</button>
			<button className="bg-transparent hover:border-transparent p-0" onClick={() => swiper.slideNext()}>
				<img src={arrowRight} alt="next" />
			</button>
		</div>
	)
}

export default SlideNavButtons