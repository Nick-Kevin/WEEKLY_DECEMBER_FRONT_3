import Spotify from '../assets/header/covers-plateforms/spotify.svg'
import Youtube from '../assets/header/covers-plateforms/youtube.svg'
import Google from '../assets/header/covers-plateforms/google-podcast.svg'

function CoverCard (props) {
    return (
        <div
            className="relative rounded-xl flex bg-cover flex-col justify-between p-3 lg:p-6 h-[200px] w-[200px] lg:h-[360px] lg:w-[360px] overflow-hidden"
            style={{backgroundImage: `url("${props.bgUrl}")`}}
        >
            <div className="flex z-20 w-full gap-x-3 justify-end">
                <img src={Google} className=" w-4 lg:w-auto cursor-pointer" alt="google"/>                
                <img src={Spotify} className="w-4 lg:w-auto cursor-pointer" alt="spotify"/>
                <img src={Youtube} className="w-4 lg:w-auto cursor-pointer" alt="youtube"/>
            </div>
            <img src={props.vector} className={`${props.vectorWidth}`} alt="vector" />
            <h2 className="w-full z-20 text-start pointer pewter-blue-text text-xl lg:text-4xl f-bold tracking-tighter">{props.title}</h2>
        </div>
    )
}

export default CoverCard