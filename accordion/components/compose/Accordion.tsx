import React from 'react'
import Summary from '../Summary.tsx'
import Content from '../Content.tsx'
import Details from '../Details.tsx'

interface AccordionProps
  extends React.DetailsHTMLAttributes<HTMLDetailsElement>,
    React.PropsWithChildren {
  summary: string
}

const Accordion: React.FC<AccordionProps> = ({ summary, children, ...htmlDetailsProps }) => {
  return (
    <Details {...htmlDetailsProps}>
      <Summary>{summary}</Summary>
      <Content>{children}</Content>
    </Details>
  )
}

export default Accordion
