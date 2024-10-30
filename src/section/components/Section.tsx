import clsx from 'clsx/lite'
import React from 'react'
import './section.css'

export type SectionProps = React.DetailsHTMLAttributes<HTMLElement> &
  React.PropsWithChildren

const Section: React.FC<SectionProps> = ({ className, ...props }) => {
  return <section {...props} className={clsx('section', className)} />
}

export default Section
