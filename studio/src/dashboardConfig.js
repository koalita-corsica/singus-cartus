export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "document-list",
      options: {
        title: "Newsletter",
        types: ["newsletter"],
      },
      layout: { width: "medium" },
    },
    {
      name: "document-list",
      options: {
        title: "Fiches de Poste",
        types: ["fiches"],
      },
      layout: { width: "medium" },
    },
  ],
};
