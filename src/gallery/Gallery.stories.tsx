import React from 'react'
import GalleryChild from './components/GalleryChild'
import GalleryParents from './components/GalleryParents'
import GalleryContainer from './components/GalleryContainer'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof GalleryContainer> = {
  title: 'Gallery',
  component: GalleryContainer,
}
export default meta

const Template: StoryFn<typeof GalleryContainer> = (args) => (
  <GalleryContainer {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <GalleryParents>
      <GalleryChild
        key='1'
        largeUrl='https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg'
        thumbnailUrl='https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg'
        width={1170}
        height={750}
      />
      <GalleryChild
        key='2'
        largeUrl='https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg'
        thumbnailUrl='https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg'
        width={1170}
        height={750}
      />
      <GalleryChild
        key='3'
        largeUrl='https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg'
        thumbnailUrl='https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg'
        width={1170}
        height={750}
      />
      <GalleryChild
        key='4'
        largeUrl='https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg'
        thumbnailUrl='https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg'
        width={1170}
        height={750}
      />
      <GalleryChild
        key='5'
        largeUrl='https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg'
        thumbnailUrl='https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg'
        width={1170}
        height={750}
      />
      <GalleryChild
        key='6'
        largeUrl='https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-2500.jpg'
        thumbnailUrl='https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-2500.jpg'
        width={1170}
        height={750}
      />
      <GalleryChild
        key='7'
        largeUrl='https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-2500.jpg'
        thumbnailUrl='https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-2500.jpg'
        width={1170}
        height={750}
      />
    </GalleryParents>
  ),
}
