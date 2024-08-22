import { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  fields: [
    {
      name: "text",
      type: "text",
    },
    {
      name: "alt text",
      type: "text",
    },
  ],
  slug: "media",
  upload: true,
};
