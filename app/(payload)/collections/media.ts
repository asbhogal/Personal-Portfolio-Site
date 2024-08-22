import { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  fields: [
    {
      name: "text",
      type: "text",
    },
    {
      label: "Alt Text",
      name: "altText",
      type: "text",
    },
  ],
  slug: "media",
  upload: true,
};
