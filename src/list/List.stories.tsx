import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import ListItem from './components/ListItem';
import UnOrderList from './components/UnOrderList';

const meta: Meta<typeof UnOrderList> = {
  title: 'List',
  component: UnOrderList,
};
export default meta;


const Template: StoryFn<typeof UnOrderList> = (args) => <UnOrderList {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: (
    <>
      <ListItem>List item 1</ListItem>
      <ListItem>List item 2</ListItem>
      <ListItem>List item 3</ListItem>
    </>
  )
};