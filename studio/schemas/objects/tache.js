export default {
  name: "taches",
  type: "object",
  title: "Taches",
  fields: [
    {
      name: "quand",
      type: "string",
      title: "Quand?",
    },
    {
      name: "quelle",
      type: "string",
      title: "Quelle tache?",
    },
    {
      name: "qui",
      type: "string",
      title: "Par qui?",
    },
    {
      name: "risques",
      type: "array",
      title: "Risques/dangers :",
      of: [{ type: "reference", to: [{ type: "pictos" }] }],
    },
    {
      name: "mesures",
      type: "bodyPortableText",
      title: "Mesures de prévention/opérations ou procédures à respecter :",
    },
  ],
};
