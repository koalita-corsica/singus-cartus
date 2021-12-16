import { GiSurprised } from "react-icons/gi"

export default {
  name: 'risques',
  type: 'document',
  title: 'Risques',
  icon: GiSurprised,
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
      name: 'p1',
      type: 'articleNoImage',
      title: 'Paragraph 1',
    },
    {
      name: 'p2',
      type: 'articleNoImage',
      title: 'Paragraph 2',
    },
    {
      name: 'p3',
      type: 'articleNoImage',
      title: 'Paragraph 3',
    },
    {
      name: 'p4',
      type: 'articleNoImage',
      title: 'Paragraph 4',
    },
    {
      name: 'sensi',
      type: 'string',
      title: 'Sensibilisation',
    },
  ]
}
