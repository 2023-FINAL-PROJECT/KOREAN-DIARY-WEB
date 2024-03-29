import { useDiaryContext } from 'hooks/context/useDiaryContext'
import AudioPlayer from '../audio-player/AudioPlayer'
import * as S from './Listening.style'

const Listening = () => {
  const {
    diary: { content },
  } = useDiaryContext()
  return (
    <S.ListeningWrapper>
      <div>{content}</div>
      <S.HorizontalLine />
      <AudioPlayer text={content} size="2.5rem" />
    </S.ListeningWrapper>
  )
}

export default Listening
