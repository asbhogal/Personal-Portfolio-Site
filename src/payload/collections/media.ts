import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      label: 'Alt Text',
      name: 'altText',
      required: true,
      type: 'text',
    },
  ],
  slug: 'media',
  upload: {
    imageSizes: [
      {
        crop: 'center',
        height: 1080,
        name: 'desktop',
        position: 'centre',
        width: 1920,
        withoutEnlargement: false,
      },
      {
        crop: 'center',
        height: 300,
        name: 'mobile',
        position: 'centre',
        width: 400,
      },
      {
        crop: 'center',
        height: 1024,
        name: 'tablet',
        position: 'centre',
        width: 768,
      },
    ],
  },
};
