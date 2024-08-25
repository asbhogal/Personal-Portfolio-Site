import { CollectionConfig } from 'payload';
import { ListBlock } from '../blocks/list';
import { ContentBlock } from '../blocks/content';
import { ImageGridBlock } from '../blocks/image-grid';

export const Projects: CollectionConfig = {
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: 'heroImage',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      blocks: [ListBlock],
      name: 'stacks',
      type: 'blocks',
    },
    {
      blocks: [ContentBlock],
      name: 'description',
      type: 'blocks',
    },
    {
      admin: {
        position: 'sidebar',
      },
      label: 'Slug',
      name: 'slug',
      type: 'text',
    },
    {
      blocks: [ContentBlock],
      name: 'typeface',
      type: 'blocks',
    },
    {
      blocks: [ListBlock],
      name: 'layout',
      type: 'blocks',
    },
    {
      blocks: [ImageGridBlock],
      name: 'showcase',
      type: 'blocks',
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
  ],
  slug: 'projects',
};
