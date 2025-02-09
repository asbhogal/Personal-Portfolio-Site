import type { Block } from 'payload';

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
          name: 'image',
          relationTo: 'media',
          type: 'upload',
        },
        {
          name: 'link',
          type: 'text',
        },
      ],
      name: 'cards',
      type: 'array',
    },
  ],
  slug: 'slider-block',
};
