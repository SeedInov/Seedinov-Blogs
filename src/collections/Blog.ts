import { CollectionConfig } from "payload/types";

const Blog: CollectionConfig = {
  slug: 'blogs',
  admin: {
    'useAsTitle': 'Blogs',
    'description': 'help'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'content',
      type: 'richText',
      required: true
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true
    },
    {
      name: 'author',
      type: 'text',
      required: true
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false
    }
  ]
}

export default Blog