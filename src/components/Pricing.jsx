function Pricing () {
	const pricing = [
		{
			title: 'Member',
			price: '$9.99',
			include: [
				'• Exclusive Content',
				'• 5% Discount on Merch',
				'• Join the Community',
				'• Join the Community'
			]
		},
		{
			title: 'Family',
			price: '$14.99',
			include: [
				'• Everything in Tier 1',
				'• Free tickets to Events',
				'• Limited Edition Merch',
				'• Promote your Product',
				'• Request Topic'
			]
		},
		{
			title: 'Official',
			price: '$29.99',
			include: [
				'• Everything in Tier 2',
				'• Exclusive Badge on Livestreaming',
				'• Become an Official Sponsor',
				'• Early Access to All Episodes',
				'• Free Stikers and Merch'
			]
		},
	]
	return (
		<div className="grid lg:grid-cols-3 mx-4 lg:mx-32 lg:gap-x-5">
				{
					pricing.map((priceItem, indexPrice) => (
						<div key={indexPrice} className="text-start mt-8 lg:mt-0">
							<div className={`flex flex-col justify-between border-black lg:mt-5 lg:h-80 rounded-lg p-6 lg:p-7 ${
								indexPrice === 1 ? 'border-second bg-second-beta' : 'border-black border-2'
							}`}>
								<div>
									<div className="flex items-center justify-between">
									<h2 className="text-2xl lg:text-4xl f-bold">{priceItem.title}</h2>
										{
											indexPrice === 1 ?
												(
													<>
														<button className="text-white bg-second text-xs lg:h-7 rounded-md hover:border-transparent p-1">
															MOST POPULAR
														</button>
													</>
												)
											:
												''
										}
									</div>
									<p className="text-sm mt-6">Lorem ipsum dolor sit amet consectet elitsed do eiusmod tempor.</p>
								</div>
								<div className="flex justify-between items-center">
									<button className="f-bold text-sm border-black border-2 mt-4 px-5 lg:px-10 py-2 lg:py-5 guide-shadow-2 border-solid text-white bg-black lg:inline-block hover:bg-transparent hover:text-black hover:border-black">
										SUBCRIBE
									</button>
									<div>
										<h3 className="red-text text-xl f-bold">{priceItem.price}</h3>
										<p className="text-xs f-bold">/month</p>
									</div>
								</div>
							</div>
							<div className={`border-black mt-3 lg:mt-5 lg:h-80 rounded-lg p-6 lg:p-7 ${
								indexPrice === 1 ? 'border-second bg-second-beta' : 'border-black border-2'
							}`}>
								<p className="mb-2 lg:mb-5 text-sm f-bold">What' included:</p>
								<ul>
									{
										priceItem.include.map((item, indexList) => (
											<li
												key={indexList}
												className={`lg:mb-3 ${
													indexPrice !== 0 && indexList === 0 ? 'f-bold' : '' 
												}`}
											>
												{item}
											</li>
										))
									}
								</ul>
							</div>
						</div>
					))
				}
		</div>
	)
}

export default Pricing