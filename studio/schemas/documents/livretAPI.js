import { BiBookOpen } from "react-icons/bi";

export default {
  name: "livretsAPI",
  type: "document",
  title: "Livret D'Accueil",
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
      name: 'livret',
      type: 'array',
      title: 'Créér le Livret',
      of: [
        { type: 'couverture' },
        { type: 'renseignement' },
        { type: 'regles' },
        { type: 'equipement'},
        { type: 'incendie'},
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
