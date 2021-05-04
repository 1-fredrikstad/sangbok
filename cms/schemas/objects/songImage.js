export default {
  name: "songImage",
  type: "image",
  title: "Image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Beskrivende tekst",
      description:
        "Skriv et par ord om bildet som vises når bildet ikke klarer å lastes",
      validation: (Rule) => Rule.error("Du må fylle ut teksten").required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption",
    },
  },
};
