export default {
    type: 'object',
    title: 'Cadeaux & valeurs',
    name: 'cadval',
    fields: [
        {
            title: 'Cadeau',
            name: 'cad',
            type: 'reference',
            to: [{ type: 'cadeau' }],
        },
        {
            type: 'number',
            title: 'Valeur en point',
            name: 'val'
        }
    ],
    preview: {
        select: {
            cad: 'cad.name',
            val: 'val',
            media: 'cad.image'
        },
        prepare(selection) {
            const { cad, val, media } = selection
            return {
                title: cad + " : " + val + " points",
                media: media
            }
        }
    }
}