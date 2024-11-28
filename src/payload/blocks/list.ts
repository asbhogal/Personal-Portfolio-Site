import { Block } from 'payload';

export const ListBlock: Block = {
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
      name: 'items',
      type: 'array',
    },
  ],
  slug: 'list-block',
};
