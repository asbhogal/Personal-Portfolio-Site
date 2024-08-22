import { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "content",
      type: "richText",
    },
  ],
  slug: "pages",
};
