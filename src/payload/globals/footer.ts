import type { GlobalConfig } from 'payload';

export const Footer: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      fields: [
        {
          fields: [
            {
              label: 'Footer Menu Item Text',
              name: 'footerMenuItemText',
              type: 'text',
            },
            {
              fields: [
                {
                  label: 'Footer Link',
                  name: 'footerLink',
                  type: 'text',
                },
                {
                  label: 'Footer Link URL',
                  name: 'footerLinkUrl',
                  type: 'text',
                },
              ],
              label: 'Footer Links',
              name: 'footerLinks',
              type: 'array',
            },
          ],
          label: 'Footer Menu Item',
          name: 'footerMenuItem',
          type: 'group',
        },
      ],
      label: 'Footer Menu',
      name: 'footerMenu',
      type: 'array',
    },
  ],
  slug: 'footer-menu',
};
