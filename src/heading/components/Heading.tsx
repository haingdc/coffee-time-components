import clsx from 'clsx/lite'
import React from 'react'
import './heading.css'

export type HeadingProps = React.DetailsHTMLAttributes<HTMLElement> &
  React.PropsWithChildren

const Heading: React.FC<HeadingProps> = ({ className, ...props }) => {
  return <h2 {...props} className={clsx('heading', className)} />
}

export default Heading
