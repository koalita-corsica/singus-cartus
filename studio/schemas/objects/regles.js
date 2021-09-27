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
        {
          name: 'info',
          title: 'Actor name',
          type: 'object',
          fields: [
            {
              title: 'Logo: ',
              name: 'logo',
              type: 'image'
            },
            {
              title: 'Function: ',
              name: 'function',
              type: 'string'
            },
            {
              title: 'Name: ',
              name: 'value',
              type: 'string'
            },
            {
              title: 'Telephone: ',
              name: 'numero',
              type: 'string'
            }
          ]
        }
      ]
    },
  ]
}
