import React from 'react'
import clsx from 'clsx/lite'
import './calendar.css'

export type CalendarProps = React.DetailsHTMLAttributes<HTMLElement> &
  React.PropsWithChildren

const Calendar: React.FC<CalendarProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      id='calendar'
      className={clsx('calendar-container', className)}
      {...props}
    >
      {new Array(24).fill(null).map((_, i) => (
        <li className='calendar-box' key={i}>
          <p>{i + 1}</p>
          <i className='fas fa-gift'></i>
          <p>Open me!</p>
        </li>
      ))}
    </div>
  )
}

export default Calendar
