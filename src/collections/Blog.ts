import { CollectionConfig } from "payload/types";

const Blog: CollectionConfig = {
  slug: "blogs",
  admin: {
    useAsTitle: "Blogs",
    description: "help",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "Summary",
      type: "textarea",
      required: true,
    },
    {
      name: "tags",
      type: "array",
      labels: {
        singular: "Tag",
        plural: "Tags",
      },
      minRows: 1, // Optional: Ensures at least one tag is required
      fields: [
        {
          name: "tag",
          type: "text",
          required: true,
        },
      ],
    },
    // {
    //   name: "content",
    //   type: "richText",
    //   required: true,
    // },
    {
      name: "contentPage",
      type: "relationship",
      relationTo: "pages", // Linking to the Pages collection
      required: false,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "author",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: false,
    },
  ],
  access: {
    read: () => true,
  },
};

export default Blog;
