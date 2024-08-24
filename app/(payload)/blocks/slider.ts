import { Block } from 'payload';

export const SliderBlock: Block = {
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'image',
          relationTo: 'media',
          type: 'upload',
        },
        {
          name: 'subheading',
          type: 'text',
        },
      ],
      name: 'cards',
      type: 'array',
    },
  ],
  slug: 'slider-block',
};
