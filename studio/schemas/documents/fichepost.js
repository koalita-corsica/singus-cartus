import canvas from "part:sanity-plugin-canvas-asset/image-asset-source";

export default {
  name: "fiches",
  title: "Fiche de Poste",
  type: "document",
  fields: [
    {
      name: "version",
      type: "string",
      title: "Version nº/date",
    },
    {
      name: "fichedeposte",
      type: "string",
      title: "Fiche de poste",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "fichedeposte",
        maxLength: 96,
        isHighlighted: true,
      },
    },
    {
      name: "entreprise",
      type: "reference",
      title: "Entreprise",
      to: [{ type: "entreprise" }],
    },
    {
      name: "machine",
      type: "string",
      title: "Machine",
    },
    {
      name: "marque",
      type: "string",
      title: "Marque/type:",
    },
    {
      name: "caract",
      type: "string",
      title: "Caractéristiques principales de la machine:",
    },
    {
      name: "produits",
      type: "string",
      title: "Produits ou matériaux  à utiliser:",
    },
    {
      name: "miseenservice",
      type: "date",
      title: "Date de mise en service:",
    },
    {
      name: "ogImage",
      title: "Image",
      type: "image",
      options: {
        sources: [canvas],
      },
    },
    {
      name: "legend",
      title: "Legend",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "epi",
      type: "array",
      title: "EPI obligatoires  ou interdits :",
      of: [{ type: "reference", to: [{ type: "epis" }] }],
    },
    {
      name: "tache",
      type: "array",
      title: "Tâche exposant l’opérateur  à un risque :",
      of: [{ type: "lestaches" }],
    },
    {
      name: "risques",
      type: "array",
      title: "Risques/dangers :",
      of: [{ type: "reference", to: [{ type: "pictos" }] }],
    },
    {
      name: "mesures",
      type: "array",
      title: "Mesures de prévention/opérations ou procédures à respecter :",
      of: [{ type: "string" }],
    },
  ],
};
