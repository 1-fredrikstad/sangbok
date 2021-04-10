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
      title: "Spotify URI",
      name: "spotifyuri",
      type: "string",
      description:
        "Lenke for å åpne en sang direkte i installert Spotify klient (https://community.spotify.com/t5/Spotify-Answers/What-s-a-Spotify-URI/ta-p/919201)",
    },
    {
    name: "order",
    title: "Order",
    type: "number",
    hidden: true,
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
