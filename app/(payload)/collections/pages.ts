import { CollectionConfig } from 'payload';
import { ContentBlock } from '../blocks/content';
import { SubheadingBlock } from '../blocks/subheading';
import { SliderBlock } from '../blocks/slider';

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
      blocks: [ContentBlock, SliderBlock, SubheadingBlock],
      label: 'Page Layout',
      minRows: 1,
      name: 'layout',
      type: 'blocks',
    },
  ],
  slug: 'pages',
};
