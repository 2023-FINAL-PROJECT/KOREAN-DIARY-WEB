import Calendar from 'react-calendar'
import * as S from './Calendar.style'
import format from 'date-fns/format'
import { getScoreColor } from 'utils/get-score-color'
import { DiaryType } from 'hooks/query/useDiaryListQuery'

interface DiaryCalendarProps {
  diaryList: DiaryType[]
}

const markDate = (date: Date, markedDateList: DiaryType[]) => {
  const formattedDate = format(date, 'yyyy-MM-dd')
  const dateList = markedDateList.map(({ date }) => date)
  const diaryIndex = dateList.findIndex((d) => d == formattedDate)
  if (diaryIndex > -1) {
    const { speaking, writing } = markedDateList[diaryIndex]
    const score = (speaking + writing) / 2
    return getScoreColor(score)
  }
}

const DiaryCalendar = ({ diaryList }: DiaryCalendarProps) => {
  return (
    <S.CalendarWrapper>
      <Calendar
        calendarType="Hebrew"
        formatDay={(locale, date) => format(date, 'd')}
        locale="ko"
        goToRangeStartOnSelect={false}
        tileClassName={({ date }) =>
          markDate(date, diaryList)
            ? 'highlight ' + markDate(date, diaryList)
            : ''
        }
      />
    </S.CalendarWrapper>
  )
}

export default DiaryCalendar
