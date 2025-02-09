import type { CollectionConfig } from 'payload';
import { ContentBlock } from '../blocks/content';
import { SubheadingBlock } from '../blocks/subheading';
import { SliderBlock } from '../blocks/slider';
import { AccoladesBlock } from '../blocks/accolades';
import { SectionBlock } from '../blocks/section';
import { ImageGridBlock } from '../blocks/image-grid';
import { AboutBlock } from '../blocks/about';

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
      name: 'headerImage',
      relationTo: 'media',
      type: 'upload',
    },
    {
      admin: {
        position: 'sidebar',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
      name: 'SEO',
      type: 'group',
    },
    {
      blocks: [
        AboutBlock,
        AccoladesBlock,
        ContentBlock,
        SectionBlock,
        SliderBlock,
        SubheadingBlock,
        ImageGridBlock,
      ],
      label: 'Page Layout',
      minRows: 1,
      name: 'layout',
      type: 'blocks',
    },
  ],
  slug: 'pages',
};
