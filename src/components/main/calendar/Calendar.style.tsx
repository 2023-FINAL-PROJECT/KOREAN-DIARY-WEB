import styled from '@emotion/styled'

export const CalendarWrapper = styled.div`
  .highlight {
    position: relative;
    &::after {
      position: absolute;
      content: ' ';
      display: block;
      width: 2rem;
      padding-bottom: 2rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 100%;
      z-index: -1;
    }
  }
  .red {
    &::after {
      background-color: var(--red);
    }
  }
  .orange {
    &::after {
      background-color: var(--orange);
    }
  }
  .yellow {
    &::after {
      background-color: var(--yellow);
    }
  }
  .green {
    &::after {
      background-color: var(--green);
    }
  }
  .sky-blue {
    &::after {
      background-color: var(--sky-blue);
    }
  }

  abbr {
    text-decoration: none;
    color: #000000;
  }

  .react-calendar {
    width: 100%;
    line-height: 1.125em;
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
    button {
      color: #000000;
    }
  }
  .react-calendar__navigation__label {
    font-weight: bold;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }
  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    max-width: 100%;
    padding: 10px;
    text-align: center;
    line-height: 16px;
  }
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__tile--now {
    abbr {
      color: var(--red) !important;
    }
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    font-weight: bold;
  }
  .react-calendar__tile--hasActive {
    background: #76baff;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
  }
  .react-calendar__tile--active {
    font-weight: bold;
    position: relative;
    &::before {
      position: absolute;
      content: ' ';
      border-bottom: 2px solid;
      display: block;
      width: 1rem;
      padding-bottom: 1.25rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    font-weight: bold;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    /* background-color: #e6e6e6; */
  }
`
