export default {
    title: 'Réponses',
    name: 'reponses',
    type: 'object',
    fields:
        [
            {
                type: 'string',
                title: 'Ma réponse',
                name: 'mareponse',
            },
            {
                type: 'array',
                title: 'Valeurs par cadeau',
                name: 'singleval',
                of: [
                    { 
                        type: 'cadval',
                        title: 'Cadeaux & valeurs',
                        name: 'cadval',
                    }
                ]
            }
        ]
}