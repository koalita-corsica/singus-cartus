export default {
  name: "livrets",
  type: "document",
  title: "Livret D'Accueil",
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
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
    }
  ]
}
