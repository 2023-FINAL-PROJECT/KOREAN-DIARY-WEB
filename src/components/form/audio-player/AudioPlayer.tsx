import { pause, resume, speak } from 'utils/text-to-speech'
import * as S from './AudioPlayer.style'
import { useState } from 'react'

interface AudioPlayerProps {
  text: string
  size: string
}

const AudioPlayer = ({ text, size }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const playAudio = (text: string) => {
    speak(text, window.speechSynthesis)
  }

  const handleAudio = () => {
    if (isPlaying) {
      pause(window.speechSynthesis)
    } else {
      window.speechSynthesis.speaking
        ? resume(window.speechSynthesis)
        : playAudio(text)
    }
    setIsPlaying((prev) => !prev)
  }

  return (
    <button onClick={handleAudio}>
      <S.Icon className="material-icons" style={{ fontSize: size }}>
        {isPlaying ? 'pause' : 'play_arrow'}
      </S.Icon>
    </button>
  )
}

export default AudioPlayer
