import React from 'react'
import clsx from 'clsx/lite'
import './calendar.css'

export interface CalendarProps
  extends React.DetailsHTMLAttributes<HTMLElement>,
    React.PropsWithChildren {
  index: number
}

const Calendar: React.FC<CalendarProps> = ({
  className,
  children,
  index,
  ...props
}) => {
  return (
    <div className='calendar-root'>
      <div className='ribbon'>
        <div className='content'>Merry Christmas</div>
      </div>
      <img
        className='calendar-photo'
        src='./images/calendar/christmas.jpg'
        alt='calendar'
      />
      <div
        id='calendar'
        className={clsx('calendar-container', className)}
        {...props}
      >
        {new Array(24).fill(null).map((_, i) => (
          <li
            className={clsx(
              'calendar-box',
              i === index ? 'calendar-box-today' : ''
            )}
            key={i}
          >
            <p>{i + 1}</p>
            <i className='fas fa-gift'></i>
            {/* <p>Open me!</p> */}
          </li>
        ))}
      </div>
    </div>
  )
}

export default Calendar
