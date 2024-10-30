import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import Section from './components/Section'
import ListItem from '../list/components/ListItem'
import UnOrderList from '../list/components/UnOrderList'
import Heading from '../heading/components/Heading'

const meta: Meta<typeof Section> = {
  title: 'Section',
  component: Section,
}
export default meta

const Template: StoryFn<typeof Section> = (args) => <Section {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <Heading>Ingredient</Heading>
      <UnOrderList>
        <ListItem>3 cups self-raising flour</ListItem>
        <ListItem>225g butter, melted</ListItem>
        <ListItem>1 cup caster sugar</ListItem>
        <ListItem>3 eggs</ListItem>
        <ListItem>1 cup water</ListItem>
        <ListItem>2 tsp vanilla essence</ListItem>
        <ListItem>125g fresh raspberries</ListItem>
        <ListItem>180g block white chocolate, finely chopped</ListItem>
      </UnOrderList>
    </>
  ),
}
