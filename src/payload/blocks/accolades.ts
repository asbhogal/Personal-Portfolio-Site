import { Block } from 'payload';

export const AccoladesBlock: Block = {
  fields: [
    {
      fields: [
        {
          name: 'award',
          type: 'text',
        },
        {
          name: 'awardingBody',
          type: 'text',
        },
        {
          name: 'date',
          type: 'date',
        },
      ],
      label: 'Accolade',
      maxRows: 2,
      minRows: 1,
      name: 'accolade',
      type: 'array',
    },
  ],
  slug: 'accolades-block',
};
