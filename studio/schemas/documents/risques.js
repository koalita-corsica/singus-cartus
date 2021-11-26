export default {
  name: 'risques',
  type: 'document',
  title: 'Risques',
  fields:[
    {
      name: 'picto',
      type: 'image',
      title: 'Picto'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'warn',
      type: 'image',
      title: 'Warning',
    },
    {
      name: 'description',
      type: 'articleNoImage',
      title: 'Description',
    },
    {
      name: 'sensi',
      type: 'string',
      title: 'Sensibilisation',
    },
  ]
}
