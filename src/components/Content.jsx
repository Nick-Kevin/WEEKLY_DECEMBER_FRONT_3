import CoverCard from "./CoverCard"

import tesla from '../assets/contents/tesla.png'
import self from '../assets/contents/self-confidence.png'
import pMind from '../assets/contents/perplexed-mind.png'
import womens from '../assets/contents/womens.png'
import social from '../assets/contents/social-class.png'
import covid from '../assets/contents/covid19.png'
import host from '../assets/contents/host.png'

function Content () {
	const card = [
		{
			image: covid,
			eps: 'Eps. 6',
			title: 'Pandemic Becoming Endemic',
			btn1: 'covid-19',
			btn2: 'health',
			lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.'
		},
		{
			image: tesla,
			eps: 'Eps. 5',
			title: 'Tesla Autopilot Controversy',
			btn1: 'automation',
			btn2: 'tech',
			lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.'
		},
		{
			image: womens,
			eps: 'Eps. 4',
			title: 'Women\'s Rights? Is it alright?',
			btn1: 'womens\'rights',
			btn2: '',
			lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.'
		},
		{
			image: self,
			eps: 'Eps. 3',
			title: 'How to Deal with Self–Confidence',
			btn1: 'self-esteem',
			btn2: 'health',
			lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.'
		},				
		{
			image: social,
			eps: 'Eps. 2',
			title: 'Type of Social Classes of People',
			btn1: 'social class',
			btn2: 'wealth',
			lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			image: pMind,
			eps: 'Eps. 1',
			title: 'Are you a Perplexed Mind Person?',
			btn1: 'mind-behaviour',
			btn2: 'health',
			lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.'
		},		
	]
	return (
		<div className="grid lg:grid-cols-2 lg:mx-32 lg:gap-x-8 lg:gap-y-8">
			{
				card.map((item, index) => (
					<>
						<div className="bg-white p-5 rounded-xl border-3">
							<div className="flex flex-col lg:gap-x-5 items-center lg:flex-row lg:justify-between">
								<img src={item.image} alt="content"/>
			                    <div className="flex flex-col gap-y-2">
			                    	<p className="text-start text-sm f-bold red-text">{item.eps}</p>
			                    	<h3
			                    		className={`bb-1 f-bold text-lg text-start ${
			                    			index === 0 || index === 4 || index === 3 ? 'red-text' : 'text-black'
			                    		}`}
			                    	>
			                    		{item.title}
			                    	</h3>
			                    	<p className="text-start text-sm">{item.lorem}</p>
			                    </div>
							</div>
							<div className="flex justify-between mt-6">
								<div className="flex">
									<button>
										{item.btn1}
									</button>
									{
										item.btn2 ?
											(
												<>
													<button>
														{item.btn1}
													</button>
												</>
											)
										:
											''
									}
								</div>
								<div  className="flex">
									<p>Hosted by:</p>
									<img src={host} alt="hosted"/>
								</div>
							</div>
						</div>
					</>
				))
			}
		</div>
	)
}

export default Content