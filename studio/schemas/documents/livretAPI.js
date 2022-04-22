import { BiBookOpen } from "react-icons/bi";

export default {
  name: "livretsAPI",
  type: "document",
  title: "Livret D'Accueil API",
  icon: BiBookOpen,
  fields: [
    {
      name: 'title',
      type: 'reference',
      title: 'Title',
      to: [{type: 'company'}]
    },
    {
      name: "slug",
      type: "string",
      title: "Slug",
    },
    {
      name: 'precision',
      type: 'string',
      title: 'Precision :', 
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'texte',
      type: 'string',
      title: 'Texte: '
    },
    {
      name: 'version',
      type: 'string',
      title: 'Version: '
    },
    {
      name: 'adresse',
      type: 'string',
      title: 'Adresse'
    },
    {
      name: 'numero',
      type: 'string',
      title: 'Telephone'
    },
    {
      name: 'mail',
      type: 'string',
      title: 'E-mail'
    },
    {
      name: 'gerant',
      type: 'string',
      title: 'Gérant: '
    },
    {
      name: 'activite',
      type: 'string',
      title: 'Activité: '
    },
    {
      name: 'nbSalaries',
      type: 'string',
      title: 'Nb de salariés: '
    },
    {
      name: 'codeRisque',
      type: 'string',
      title: 'Code Risque: '
    },
    {
      name: 'taux',
      type: 'string',
      title: 'Taux AT/MP: '
    },
    {
      name: 'documentUnique',
      type: 'string',
      title: 'Document Unique: '
    },
    {
      name: 'affObligatoire',
      type: 'string',
      title: 'Aff. Obligatoire: '
    },
    {
      name: 'affPrevention',
      type: 'string',
      title: 'Aff. Prévention: '
    },
    {
      name: 'affCovid',
      type: 'string',
      title: 'Aff COVID: '
    },
    {
      name: 'unite',
      type: 'string',
      title: 'Unité de Travail: '
    },
    {
      name: 'plandacces',
      type: 'image',
      title: "Plan d'acces",
    },
    {
      name: 'evacuer',
      type: 'string',
      title: 'Evacuer: '
    },
    {
      name: 'partn',
      type: 'image',
      title: 'Verification Incendie: '
    },
    {
      name: 'livret',
      type: 'array',
      title: 'Créér le Livret',
      of: [
        { type: 'regles' },
        { type: 'equipement'},
        ]
    },
    {
      name: 'wRisques',
      type: 'array',
      title: 'Risques:',
      of: [{ type: "reference", to: [{ type: "risques" }] }],
    },
  ]
}
