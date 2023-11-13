import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'dd1659df-e447-4f92-9fb2-f6e555df5f56', queries,  });
export default client;
  