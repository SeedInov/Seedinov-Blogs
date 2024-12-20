import { CollectionConfig } from "payload/types";

const Authors: CollectionConfig = {
  slug: "authors",
  admin: {
    useAsTitle: "name",
    description: "Blog Authors",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "bio",
      type: "textarea",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
      unique: true,
    },
  ],
  access: {
    read: () => true,
  },
};

export default Authors;
