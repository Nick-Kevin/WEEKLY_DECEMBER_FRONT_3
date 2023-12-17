export default function FlexColThreeRows (props) {
    return (
        <div className={`flex flex-col content-center ${props.otherClass}`}>
            <div className="flex justify-center">{ props.firstRow }</div>
            <div className="flex justify-center">{ props.secondRow }</div>
            <div className="flex justify-center">{ props.thirdRow }</div>
        </div>
    )
}