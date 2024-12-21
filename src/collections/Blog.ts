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
      name: "featured",
      type: "checkbox",
      label: "Featured",
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
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "authors",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: false,
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, req }) => {
        if (doc.featured) {
          const { payload } = req;
          try {
            const existingFeatured = await payload.find({
              collection: "blogs",
              where: {
                featured: {
                  equals: true,
                },
                id: {
                  not_equals: doc.id,
                },
              },
              limit: 1,
            });
            if (existingFeatured.docs.length > 0) {
              await payload.update({
                collection: "blogs",
                id: existingFeatured.docs[0].id,
                data: { featured: false },
              });
            }
          } catch (error) {
            console.error("Error clearing previous featured blog:", error);
          }
        }
      },
    ],
  },
  access: {
    read: () => true,
  },
};

export default Blog;
