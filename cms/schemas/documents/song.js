const song = {
  title: "Sang",
  type: "document",
  name: "song",
  fields: [
    {
      title: "Tittel",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Refreng",
      name: "chorus",
      type: "text",
    },
    {
      title: "Spotify URI",
      name: "spotifyuri",
      type: "string",
      description: "Eksempel: spotify:track:0VQ9TFBBZpBsh7k8CfBoIO",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
    {
      title: "Lydklipp",
      name: "audio",
      type: "file",
      description: "Lydfil for å spille egen innspilling av sangen.",
      accept: "audio/*",
    },
    {
      title: "Bilde/Gif",
      type: "songImage",
      name: "songImage",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace("å", "aa")
            .replace("æ", "ae")
            .replace("ø", "oe")
            .replace("[^a-z0-9-]", "")
            .slice(0, 200),
      },
      validation: (Rule) => [
        Rule.required().error(
          "Har du husket generate? Er navnet på sangen unikt?"
        ),
      ],
    },
  ],
};

export default song;
