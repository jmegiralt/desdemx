import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "dd1659df-e447-4f92-9fb2-f6e555df5f56", // Get this from tina.io
  token: "dd1659df-e447-4f92-9fb2-f6e555df5f56", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "_site/",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "_site/",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
