import { Block } from 'payload';
import { SubheadingBlock } from './subheading';

export const SectionBlock: Block = {
  fields: [
    {
      blocks: [SubheadingBlock],

      name: 'subheadingBlock',
      type: 'blocks',
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
  slug: 'section-block',
};
