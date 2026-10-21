// TODO: pass this array into sanity.config.ts's `schema.types` once a Sanity
// Studio is initialized for this project (`npm create sanity@latest`).
import service from "./service";
import blogPost from "./blogPost";
import review from "./review";

export const schemaTypes = [service, blogPost, review];
