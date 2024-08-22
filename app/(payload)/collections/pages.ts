import { lexicalEditor } from "@payloadcms/richtext-lexical";
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
      editor: lexicalEditor(),
      name: "content",
      type: "richText",
    },
    {
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "text",
        },
      ],
      name: "SEO",
      type: "group",
    },
  ],
  slug: "pages",
};
