import React, {useEffect, useState}from 'react'
import ScoreBoard from './ScoreBoard'
import './navbar.css'
import useSound from 'use-sound'
import mySound from '../assets/main_music.mp3'
import mySound2 from '../assets/music2.mp3'
import { useParams, Link} from 'react-router-dom'

const Navbar = ( {score, username} ) => {
    const audioFiles = [mySound, mySound2]
    const [music, setMusic] = useState(0)
    const [playSound, {stop}] = useSound(audioFiles[music], {
        volume: 2, 
        loop: false, 
        onend: () => playNext()
    });
    const playNext = () => {
        if(music == 0){
            setMusic(1)
        }else{
            setMusic(0)
        }
        playSound({ sound: audioFiles[music] });
    };
    
    useEffect(() => {
        playSound();


        return () => {
            stop();
        };
    }, [playSound, stop])

  return (
    <div className='nav'>
        <button className='stop-btn' onClick = {() => stop()} >
            <img src="https://cdn-icons-png.flaticon.com/512/40/40372.png" alt="Stop Icon" style={{width: "25px", height: "25px"}}/>
        </button>
        <button className='start-btn' onClick = {() => playSound()}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png' style={{width: "25px", height: "25px"}}/>
        </button>
        <div className='score'>
            <ScoreBoard score = {score}/>
        </div>
        <div className='user'>
            <h5>Welcome <span id='user'>{username}!</span></h5>
        </div>
        <Link to="/">
            <button className='logout-btn'>Logout</button>
        </Link>
    </div>
  )
}

export default Navbar