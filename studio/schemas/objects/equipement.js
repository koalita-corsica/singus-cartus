export default {
  name: "equipement",
  type: "object",
  title: "Equipment: ",
  fields: [
    {
      name: 'epi',
      type: 'array',
      title: 'EPIs',
      of: [{type: 'reference', to : [{type: 'epis'}]}]
    },
  ]
}
