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
      of: [{
        type: 'text'
      }],
    },
  ],
}; 

export default song