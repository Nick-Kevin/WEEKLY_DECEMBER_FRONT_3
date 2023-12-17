function SectionHeader (props) {
	return (
		<div className="flex flex-col mx-4 items-center">
			<h2 className={`relative f-bold !leading-tight text-3xl lg:text-6xl ${props.titleClass}`}>
				{props.title}
				{
					props.vector ?
						(<img src={props.vector} className={`absolute ${props.vectorClass}`} alt="vector" />)
					:
						''
				}
			</h2>
			{
				props.subtitle ?
					(<p className="mt-5 text-md lg:text-xl"> {props.subtitle} </p>)
				:
					''
			}
		</div>
	)
}

export default SectionHeader