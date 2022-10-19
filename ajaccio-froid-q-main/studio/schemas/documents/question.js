import { array } from 'prop-types';
import { AiFillQuestionCircle } from 'react-icons/ai'
import reponse from '../objects/reponse';

export default {
  name: "question",
  type: "document",
  title: "Question",
  icon: AiFillQuestionCircle,
  fields: [
    {
      name: "ordre",
      type: "number",
      title: "Numéro de la question",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      hidden: true,
      description:
        "Some frontends will require a slug to be set to be able to show the post",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "question",
      type: "string",
      title: "Question",
      description: "Ajouter une question",
    },
    {
      type: 'string',
      name: 'formatQu',
      title: 'Type de question',
      options: {
          list: [
              {"title": "Choix Multiple", "value" : "checkbox"},
              {"title": "Choix Unique", "value" : "radio"},
          ]
      }
    },
    {
      title: 'Question "intérêt" ',
      name: 'interet',
      type: 'boolean',
    },
    {
        title: 'Réponses',
        name: 'rep',
        type: 'array',
        of: [
            {
                title: 'reponse',
                type: 'reponses',
              },
        ]
    }
  ],
  initialValue: {
    interet: false
  },
  preview: {
    select: {
      ordre: 'ordre',
      question: 'question',
    },
    prepare(selection) {
        const {question, ordre} = selection
        return {
          title: "#" +  ordre + " : " + question,
        }
      }
  },
  orderings: [
    {
      title: 'Ordre Croissant',
      name: 'croissant',
      by: [
        {field: 'ordre', direction: 'asc'}
      ]
    },
    {
        title: 'Ordre Décroissant',
        name: 'decroissant',
        by: [
          {field: 'ordre', direction: 'desc'}
        ]
      }
  ]
};
