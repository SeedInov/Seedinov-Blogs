import { CollectionConfig } from "payload/types";

const Test2: CollectionConfig = {
  slug: 'test2',
  fields: [
    {
      name: 'field2',
      type: 'text'
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media'
    }
  ]
}

export default Test2