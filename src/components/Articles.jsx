import podcast from '../assets/articles/podcast.png'
import doodle from '../assets/articles/doodle.png'

function Articles () {
	const articles = [
		{ image: podcast, subtitle: 'PODCAST', title:'Setup your own podcast', btn1: 'business', btn2: 'startup', date: '14'},
		{ image: doodle, subtitle: 'TIPS & TRICKS', title: 'Doodle artwork 101', btn1: 'art', btn2: 'creative', btn3: 'tips and trick', date: '12'},
	]
	return (
		<div className="grid lg:grid-cols-2 mx-4 gap-y-5 lg:gap-y-0 lg:gap-x-5 lg:mx-32">
			{
				articles.map((article, index) => (
					<>
						<div className={`p-4 relative z-10 bg-white lg:p-3 text-start rounded-lg border-black border-2 ${
							index === 0 ? 'black-shadow' : ''
						}`}>
							<img src={article.image} alt="article"/>
							<p className="mt-2 lg:mt-9 f-bold text-sm">{article.subtitle}</p>
							<h3 className={`text-lg mt-3 f-bold lg:text-3xl ${
								index === 0 ? 'red-text' : ''
							}`}>{article.title}</h3>
							<p className="mt-5 text-sm bb-1 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...</p>
							<div className="flex flex-col mt-5 lg:flex-row justify-between">
								<div className="flex items-center gap-x-2">
									<button className="bg-transparent text-xs border-black hover:border-black hover:bg-black hover:text-white rounded-md lg:mr-2">
										{article.btn1}
									</button>
									<button className="bg-transparent text-xs border-black hover:border-black hover:bg-black hover:text-white rounded-md lg:mr-2">
										{article.btn2}
									</button>
									{
										article.btn3 ?
											(
												<>
													<button className="bg-transparent text-xs border-black hover:border-black hover:bg-black hover:text-white rounded-md lg:mr-2">
														{article.btn3}
													</button>
												</>
											)
										:
											''
									}
								</div>
								<p className="text-sm f-bold mt-3 lg:mt-0">Sep {article.date}, 2021</p>
							</div>
						</div>
					</>
				))
			}
		</div>
	)
}

export default Articles