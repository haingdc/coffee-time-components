import React from 'react';
import Accordion from '../../dist/accordion/components/compose/Accordion'
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
};
export default meta;


const Template: StoryFn<typeof Accordion> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  summary: 'Click to expand',
  children: <div>This is the content inside the accordion.</div>, // Nội dung accordion
};