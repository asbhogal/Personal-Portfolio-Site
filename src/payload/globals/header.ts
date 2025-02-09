import type { GlobalConfig } from 'payload';

export const Header: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      fields: [
        {
          label: 'Link Text',
          name: 'linkText',
          type: 'text',
        },
        {
          label: 'Link URL',
          name: 'linkUrl',
          type: 'text',
        },
      ],
      label: 'Header Menu',
      name: 'headerMenu',
      type: 'array',
    },
  ],
  slug: 'header-menu',
};
