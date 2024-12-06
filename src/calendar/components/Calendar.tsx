import React, { type MouseEventHandler } from 'react'
import clsx from 'clsx/lite'
import './calendar.css'
import DialogDay from './DialogDay'

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
  const currentDate = React.useRef<Date>(new Date())
  const dateIndex = currentDate.current.getDate() - 1
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null)
  const ref = React.useRef<HTMLDialogElement>(null)
  const openDay: MouseEventHandler<HTMLLIElement> = (event) => {
    if (!ref.current) throw Error('ref is not assigned')
    console.log('inspect', event.currentTarget.dataset.dateIndex)
    setSelectedDate(
      new Date(
        currentDate.current.getFullYear(),
        currentDate.current.getMonth(),
        Number(event.currentTarget.dataset.dateIndex)
      )
    )
    ref.current.showModal()
  }

  if (!isCountdownToChristmas(currentDate.current)) {
    return 'It is not the relevant time for Christmas Countdown'
  }
  return (
    <>
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
                i === dateIndex ? 'calendar-box-today' : ''
              )}
              key={i}
              data-date-index={i + 1}
              onClick={openDay}
            >
              <p>{i + 1}</p>
              <i className='fas fa-gift'></i>
            </li>
          ))}
        </div>
      </div>
      <DialogDay
        ref={ref}
        canOpen={
          selectedDate instanceof Date && selectedDate <= currentDate.current
        }
      />
    </>
  )
}

function isCountdownToChristmas(date: Date) {
  const year = date.getFullYear()

  // Tạo đối tượng Date cho ngày 1 tháng 12
  const startOfCountdown = new Date(year, 11, 1) // Tháng 11 là tháng 12 do tháng đếm từ 0

  // Tạo đối tượng Date cho ngày 24 tháng 12
  const endOfCountdown = new Date(year, 11, 24)

  // Kiểm tra nếu ngày hiện tại nằm trong khoảng từ ngày 1 đến ngày 24 tháng 12
  return date >= startOfCountdown && date <= endOfCountdown
}

export default Calendar
