import React from 'react';
import Accordion from './components/compose/Accordion';
import { Meta, StoryFn } from '@storybook/react';

// Định nghĩa metadata cho story
const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
};
export default meta;


const Template: StoryFn<typeof Accordion> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  summary: 'Click to expand', // Văn bản tiêu đề cho accordion
  children: <div>This is the content inside the accordion.</div>, // Nội dung accordion
};