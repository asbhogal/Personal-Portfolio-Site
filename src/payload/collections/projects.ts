import type { CollectionConfig } from 'payload';
import { ListBlock } from '../blocks/list';
import { ContentBlock } from '../blocks/content';
import { ImageGridBlock } from '../blocks/image-grid';
import { TypefaceBlock } from '../blocks/typeface';

export const Projects: CollectionConfig = {
  access: {
    create: (): boolean => true,
    read: (): boolean => true,
  },
  admin: {
    useAsTitle: 'title',
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
      required: true,
      type: 'text',
    },
    {
      admin: {
        date: {
          displayFormat: 'dd MM yyyy',
        },
      },
      name: 'date',
      type: 'date',
    },
    {
      blocks: [ListBlock],
      name: 'stacks',
      type: 'blocks',
    },
    {
      blocks: [ContentBlock],
      name: 'description',
      required: true,
      type: 'blocks',
    },
    {
      blocks: [TypefaceBlock],
      name: 'typeface',
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
