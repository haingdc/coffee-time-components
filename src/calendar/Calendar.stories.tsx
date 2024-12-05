import React from 'react'
import Calendar from './components/Calendar'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Calendar> = {
  title: 'Calendar',
  component: Calendar,
}
export default meta

const Template: StoryFn<typeof Calendar> = (args) => (
  <Calendar {...args} />
)

export const Default = Template.bind({})
Default.args = {
  index: 5,
}
