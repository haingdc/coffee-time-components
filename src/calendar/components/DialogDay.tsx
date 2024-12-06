import React from 'react'
import './dialog_day.css'

export interface DialogDayProps
  extends React.DetailsHTMLAttributes<HTMLElement>,
    React.PropsWithChildren {
  canOpen: boolean
}

export type Ref = HTMLDialogElement

export const DialogDay = React.forwardRef<Ref, DialogDayProps>(
  ({ canOpen }, ref) => {
    return (
      <>
        <dialog className='dialog-day' ref={ref}>
          {canOpen ? (
            <p>Chocolate for you in a cozy day</p>
          ) : (
            <p>Waiting until reaching that day</p>
          )}
          {canOpen ? (
            <img
              className='content-photo'
              src='./images/calendar/gifts/chocolate.jpg'
              alt='gift'
            />
          ) : (
            <img
              className='content-photo'
              src='./images/calendar/gifts/box.png'
              alt='gift'
            />
          )}
        </dialog>
      </>
    )
  }
)

export default DialogDay
