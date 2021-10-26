export default {
  name: "renseignement",
  type: "object",
  title: "Renseignements",
  fields: [
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
      name: 'image',
      type: 'image',
      title: "Plan d'acces",
    },
  ]
}
