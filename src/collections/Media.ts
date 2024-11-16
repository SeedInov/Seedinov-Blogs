import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  upload: true,
  slug: 'media',
  fields: [
    {
      name: 'text',
      type: 'text'
    }
  ]
}

export default Media