import { CollectionConfig } from "payload/types";
import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";

const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "nameOfYourRichTextField",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "nameOfYourRichTextField",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML("nameOfYourRichTextField", {
      name: "nameOfYourRichTextField_html",
    }),
  ],
};

export default Pages;
