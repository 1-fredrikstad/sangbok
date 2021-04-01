const song = {
  title: "Sang",
  type: "document",
  name: "song",
  fields: [
    {
      title: "Tittel",
      name: "title",
      type: "string",
    },
    {
      title: "Melodi",
      name: "melody",
      type: "string",
    },
    {
      title: "Forfatter",
      name: "author",
      type: "string",
    },
    {
      title: "Kategori",
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      title: "Vers",
      name: "verses",
      type: "array",
      of: [
        {
          type: "text",
        },
      ],
    },
    {
      title: "Refreng",
      name: "chorus",
      type: "text",
    },

    {
      title: "Nummering",
      name: "numbering",
      type: "number",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
  ],
};

export default song;
