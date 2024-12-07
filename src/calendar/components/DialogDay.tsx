import { Cross1Icon, WidthIcon } from '@radix-ui/react-icons'
import React, { forwardRef } from 'react'
import './dialog_day.css'

export interface DialogDayProps
  extends React.DialogHTMLAttributes<HTMLElement>,
    React.PropsWithChildren {
  canOpen: boolean
}

export type Ref = HTMLDialogElement

export const DialogDay = forwardRef<Ref, DialogDayProps>(
  ({ canOpen, onClose }, ref) => {
    const variants = {
      canOpen: {
        text: 'Chocolate for you in a cozy day',
        image: {
          src: './images/calendar/gifts/chocolate.jpg',
          width: 376,
          height: 350,
        }
      },
      cannotOpen: {
        text: 'Waiting until reaching that day',
        image: {
          src: './images/calendar/gifts/box.png',
          width: 640,
          height: 480,
        }
      },
    }
    const { text, image } = variants[canOpen ? 'canOpen' : 'cannotOpen']
    return (
      <>
        <dialog className='dialog-day' ref={ref}>
          <header>
            <button className='btn-close' onClick={onClose}>
              <Cross1Icon />
            </button>
          </header>
          <div className='content'>
            <p>{text}</p>
            <img
              className='content-photo'
              src={image.src}
              alt='gift'
              width={image.width}
              height={image.height}
            />
          </div>
        </dialog>
      </>
    )
  }
)

export default DialogDay
