import React from 'react'
import clsx from 'clsx/lite'

export type GalleryParentsProps = React.DetailsHTMLAttributes<HTMLElement> &
  React.PropsWithChildren

const GalleryParents: React.FC<GalleryParentsProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx('gallery-parents', className)} {...props}>
      {children}
    </div>
  )
}

export default GalleryParents
