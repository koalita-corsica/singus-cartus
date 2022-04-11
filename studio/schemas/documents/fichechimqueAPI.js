import canvas from "part:sanity-plugin-canvas-asset/image-asset-source";
import { FaBiohazard } from "react-icons/fa";

export default {
  name: "fichesChmiqueAPI",
  title: "Notice de Poste Produit Chimique",
  type: "document",
  icon: FaBiohazard,
  fields: [
    {
      name: "version",
      type: "string",
      title: "Version nº/date",
    },
    {
      name: "fichedeposte",
      type: "string",
      title: "Notice de poste",
    },
    {
      name: "slug",
      type: "string",
      title: "Slug",
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
      title: "Nom du Produit",
    },
    {
      name: "marque",
      type: "string",
      title: "Fournisseur",
    },
    {
      name: "caract",
      type: "string",
      title: "Caractéristiques principales du produit",
    },
    {
      name: "produits",
      type: "string",
      title: "Lieu de consultation FDS",
    },
    {
      name: "miseenservice",
      type: "date",
      title: "Date FDS",
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
      name: "risquesD",
      type: "array",
      title: "Pictogrammes :",
      of: [{ type: "reference", to: [{ type: "pictosD" }] }],
    },
    {
      name: "interdiction",
      type: "array",
      title: "Interdiction :",
      of: [{ type: "reference", to: [{ type: "pictosI" }] }],
    },
    {
      name: "tache",
      type: "array",
      title: "Tâche exposant l’opérateur  à un risque :",
      of: [{ type: "taches" }],
    },
    {
      name: "qualifications",
      type: "string",
      title: "Qualifications et Autorisation:",
    },
    {
      name: "formation",
      type: "string",
      title: "Formation obligatoire:",
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
