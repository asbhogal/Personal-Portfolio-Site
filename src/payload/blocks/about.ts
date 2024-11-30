import { Block } from 'payload';

export const AboutBlock: Block = {
  fields: [
    {
      fields: [
        {
          name: 'date',
          type: 'date',
        },
        {
          name: 'position',
          type: 'text',
        },
        {
          name: 'company',
          type: 'text',
        },
        {
          fields: [
            {
              name: 'stack',
              type: 'text',
            },
          ],
          name: 'stacks',
          type: 'array',
        },
        {
          fields: [
            {
              name: 'responsibility',
              type: 'text',
            },
          ],
          name: 'responsibilities',
          type: 'array',
        },
      ],
      name: 'about',
      type: 'array',
    },
  ],
  slug: 'about-block',
};
