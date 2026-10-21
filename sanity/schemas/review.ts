import { defineField, defineType } from "sanity";

export default defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({ name: "author", title: "Author", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (r) => r.required().min(1).max(5),
    }),
    defineField({ name: "text", title: "Review Text", type: "text", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Date", type: "date" }),
  ],
});
