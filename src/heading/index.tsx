import clsx from 'clsx/lite'
import React from 'react'
import './heading.css'

export type SectionProps = React.DetailsHTMLAttributes<HTMLElement> &
  React.PropsWithChildren

const Heading: React.FC<SectionProps> = ({ className, ...props }) => {
  return <h2 {...props} className={clsx('heading', className)} />
}

export default Heading
