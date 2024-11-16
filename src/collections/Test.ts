import { CollectionConfig } from "payload/types";

const Test: CollectionConfig = {
  slug: 'test',
  fields: [
    {
      name: 'field1',
      type: 'text'
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media'
    }
  ]
}

export default Test