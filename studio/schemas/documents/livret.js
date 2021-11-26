import { BiBookOpen } from "react-icons/bi";

export default {
  name: "livrets",
  type: "document",
  title: "Livret D'Accueil",
  icon: BiBookOpen,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
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
      name: 'livret',
      type: 'array',
      title: 'Créér le Livret',
      of: [
        { type: 'couverture' },
        { type: 'renseignement' },
        { type: 'regles' },
        {type: 'equipement'},
        {type: 'incendie'},
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
