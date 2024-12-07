import React, { forwardRef } from 'react'
import './dialog_day.css'

export interface DialogDayProps
  extends React.DetailsHTMLAttributes<HTMLElement>,
    React.PropsWithChildren {
  canOpen: boolean
}

export type Ref = HTMLDialogElement

export const DialogDay = forwardRef<Ref, DialogDayProps>(({ canOpen }, ref) => {
  const variants = {
    canOpen: {
      text: 'Chocolate for you in a cozy day',
      image: './images/calendar/gifts/chocolate.jpg',
    },
    cannotOpen: {
      text: 'Waiting until reaching that day',
      image: './images/calendar/gifts/box.png',
    },
  }
  const { text, image } = variants[canOpen ? 'canOpen' : 'cannotOpen']
  return (
    <>
      <dialog className='dialog-day' ref={ref}>
        <img src='/images/icons/cross.svg' alt='close' className='close-icon' />
        <p>{text}</p>
        <img className='content-photo' src={image} alt='gift' />
      </dialog>
    </>
  )
})

export default DialogDay
