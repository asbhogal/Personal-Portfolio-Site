import { CollectionConfig } from 'payload';
import { ContentBlock } from '../blocks/content';
import { SubheadingBlock } from '../blocks/subheading';

export const Pages: CollectionConfig = {
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'text',
        },
      ],
      name: 'SEO',
      type: 'group',
    },
    {
      blocks: [ContentBlock, SubheadingBlock],
      label: 'Page Layout',
      minRows: 1,
      name: 'layout',
      type: 'blocks',
    },
  ],
  slug: 'pages',
};
