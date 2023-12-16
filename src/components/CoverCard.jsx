import Spotify from '../assets/header/covers-plateforms/spotify.svg'
import Youtube from '../assets/header/covers-plateforms/youtube.svg'
import Google from '../assets/header/covers-plateforms/google-podcast.svg'

function CoverCard (props) {
    return (
        <div
            className="relative rounded-xl flex flex-col justify-between p-6 h-[200px] w-[200px] lg:h-[360px] lg:w-[360px] overflow-hidden"
            style={{backgroundImage: `url("${props.bgUrl}")`}}
        >
            <div className="flex w-full gap-x-3 justify-end">
                <img src={Google} className="cursor-pointer" alt="google"/>                
                <img src={Spotify} className="cursor-pointer" alt="spotify"/>
                <img src={Youtube} className="cursor-pointer" alt="youtube"/>
            </div>
            <img src={props.vector} alt="vector" />
            <h2 className="w-full text-start pointer pewter-blue-text text-4xl f-bold tracking-tighter">{props.title}</h2>
        </div>
    )
}

export default CoverCard