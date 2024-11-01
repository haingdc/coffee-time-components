import React from 'react'
import './gallery.css'
import clsx from 'clsx/lite'

export type GalleryContainerProps = React.DetailsHTMLAttributes<HTMLElement> &
  React.PropsWithChildren

const GalleryContainer: React.FC<GalleryContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx('gallery-container', className)} {...props}>
      {children}
    </div>
  )
}

export default GalleryContainer
