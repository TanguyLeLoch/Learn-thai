import ReactAudioPlayer from "react-audio-player";

interface props {
    source: string
}

function SoundPlayer({source}: props) {
   return <ReactAudioPlayer
        src={source}
        autoPlay
        controls
    />
}

export default SoundPlayer