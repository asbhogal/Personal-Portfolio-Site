import type { Block } from 'payload';

export const TypefaceBlock: Block = {
  fields: [
    {
      name: 'typeface',
      type: 'text',
    },
    {
      name: 'image',
      relationTo: 'media',
      type: 'upload',
    },
  ],
  slug: 'typeface',
};
