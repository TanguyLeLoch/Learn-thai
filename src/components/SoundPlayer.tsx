interface props {
    source: string
}

function SoundPlayer({source}: props) {

    return <audio controls autoPlay={true} key={source}>
        <source src={source} type="audio/mpeg"/>
    </audio>

}

export default SoundPlayer