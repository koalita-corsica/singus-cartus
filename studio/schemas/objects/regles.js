export default {
  name: "regles",
  type: "object",
  title: "Regles de sécurite",
  fields: [
    {
      name: 'infos',
      type: 'array',
      title: 'Informations: ',
      of: [
        {type: 'info'}
      ]
    },
  ]
}
