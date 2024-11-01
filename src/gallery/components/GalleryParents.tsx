import React from 'react'
import './gallery.css'
import clsx from 'clsx/lite'

export type GalleryParentsProps = React.DetailsHTMLAttributes<HTMLElement> &
  React.PropsWithChildren

const GalleryParents: React.FC<GalleryParentsProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx('gallery-container', className)} {...props}>
      <div className='gallery-parents'>{children}</div>
    </div>
  )
}

export default GalleryParents
