import React from 'react'
import clsx from 'clsx/lite'

export interface GalleryChildProps
  extends React.DetailsHTMLAttributes<HTMLElement> {
  largeUrl: string
  thumbnailUrl: string
  width: number
  height: number
}

const GalleryChild: React.FC<GalleryChildProps> = ({ className, ...props }) => {
  return (
    <a
      className={clsx('gallery-child', className)}
      href={props.largeUrl}
      data-pswp-width={props.width}
      data-pswp-height={props.height}
      target='_blank'
      rel='noreferrer'
    >
      <img src={props.thumbnailUrl} alt='' />
    </a>
  )
}

export default GalleryChild
