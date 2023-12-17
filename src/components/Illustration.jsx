function Illustration (props) {
	return (
		<div className="flex flex-col items-center">
			<img src={props.img} alt="Illustration" />
			<p className="lg:mt-10">{props.paragraph}</p>
		</div>
	)
}

export default Illustration
