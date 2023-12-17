import FlexColThreeRows from './FlexColThreeRows'

import star from '../assets/features/star.svg'
import vector from '../assets/features/vector.svg'
import shiningStars from '../assets/features/shining-stars.svg'
import fire from '../assets/features/fire.svg'
import face1 from '../assets/features/face-1.svg'
import face2 from '../assets/features/face-2.svg'

function Features () {
	const features = [
		{ image: vector, title: 'Topic by Request'},
		{ image: shiningStars, title: 'Exclusive Content'},
		{ image: face1, title: 'Join the Community'},
		{ image: face2, title: 'Livestreaming Access'},
		{ image: fire, title: 'Exclusive Episodes & Merch'},
		{ image: star, title: 'And much more!'}
	]

	const loremIspum = 'Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.'

	return (
		<div className="grid lg:grid-cols-3 content-center gap-x-10 mx-4 lg:mx-32 gap-y-10 lg:gap-y-20">
			{
				features.map((feature, index) => (
					<>
						<FlexColThreeRows
							otherClass = {index === 0 ? 'justify-end' : '' }
							firstRow = {(<img src={feature.image} className={index === 0 ? 'mb-10 mt-4': 'mb-4 lg:mb-7'} alt="image"/>)}
					        secondRow = {(<h3 className="f-bold text-xl mb-3">{feature.title}</h3>)}
					        thirdRow = {loremIspum}
						/>
					</>
				))
			}
		</div>
	)
}

export default Features