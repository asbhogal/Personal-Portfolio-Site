import { Block } from 'payload';

export const ImageGridBlock: Block = {
  fields: [
    {
      fields: [
        {
          name: 'image',
          relationTo: 'media',
          type: 'upload',
        },
      ],
      name: 'images',
      type: 'array',
    },
  ],
  slug: 'image-grid-block',
};
