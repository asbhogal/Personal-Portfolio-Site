import { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      label: 'Alt Text',
      name: 'altText',
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
