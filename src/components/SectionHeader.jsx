function SectionHeader (props) {
	return (
		<div className="flex flex-col items-center">
			<h2 className={`relative f-bold leading-tight text-3xl lg:text-6xl ${props.titleClass}`}>
				{props.title}
				{
					props.vector ?
						(<img src={props.vector} alt="vector" />)
					:
						''
				}
			</h2>
			{
				props.subtitle ?
					(<p> {props.subtitle} </p>)
				:
					''
			}
		</div>
	)
}

export default SectionHeader