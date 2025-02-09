import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  access: {
    delete: () => false,
    update: () => false,
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  slug: 'users',
};
