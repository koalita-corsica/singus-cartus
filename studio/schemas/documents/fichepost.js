import canvas from "part:sanity-plugin-canvas-asset/image-asset-source";
import { GrDocumentUser } from "react-icons/gr";

export default {
  name: "fiches",
  title: "Fiche sécurité au poste",
  type: "document",
  icon: GrDocumentUser,
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
      title: "Type d'image",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Horizontal", value: "horizontal" },
          { title: "Vertical", value: "vertical" },
        ],
      },
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
      title: "EPI obligatoires :",
      of: [{ type: "reference", to: [{ type: "epis" }] }],
    },
    {
      name: "interdiction",
      type: "array",
      title: "Interdiction :",
      of: [{ type: "reference", to: [{ type: "epis" }] }],
    },
    {
      name: "tache",
      type: "array",
      title: "Tâche exposant l’opérateur  à un risque :",
      of: [{ type: "taches" }],
    },
    {
      name: "qualifications",
      type: "array",
      title: "Qualifications et Autorisation:",
      of: [{ type: "string" }],
    },
    {
      name: "formation",
      type: "array",
      title: "Formation obligatoire:",
      of: [{ type: "string" }],
    },
  ],
  preview: {
    select: {
      title: 'fichedeposte',
      subtitle: 'version',
      media: 'ogImage'
    }
  }
};
