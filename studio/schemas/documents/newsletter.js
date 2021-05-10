export default {
    name: 'newsletter',
    type: 'document',
    title: 'Newsletter',
    fields: [
        {
            name: 'slug',
            type: 'slug',
            title:'Slug',
            options: {
                source: "titleNewsLetter",
                maxLength: 96,
                }
        },
        {
            name: 'titleNewsLetter',
            type: 'string',
            title: 'Title news letter'  
        },
        {
            name: 'titleArt1',
            type: 'string',
            title: 'Title article 1'  
        },
        
        {
            name: 'imgArt1',
            type: 'mainImage',
            title: 'Image article  1'
        },
        {
            name: "article1",
            type: "articleNoImage",
            title: "Article 1"  
        },
        {
            name: 'titleArt2',
            type: 'string',
            title: 'Title article 2'  
        },
        {
            name: "article2",
            type: "articleNoImage",
            title: "Article 2"  
        },
        {
            name: 'iconEdito',
            type: 'iconImage',
            title: 'iconEdito'
        },
        {
            name: 'titleEdito',
            type: 'string',
            title: 'Title edito'  
        },
        {
            name: "articleEdito",
            type: "articleNoImage",
            title: "Article Edito"
        },
        {
            name: 'titleArt3',
            type: 'string',
            title: 'Title article 3'  
        },
        {
            name: "article3",
            type: "articleNoImage",
            title: "Article 3"
        },
        {
            name: 'imgArt3',
            type: 'iconImage',
            title: 'Image art 3'
        },
        {
            name: 'titleArt4',
            type: 'string',
            title: 'Title article 4'  
        },
        {
            name: "article4",
            type: "articleNoImage",
            title: "Article 4"
        },
        {
            name: 'imgArt5',
            type: 'iconImage',
            title: 'Image art 5'
        },
        {
            name: 'titleArt5',
            type: 'string',
            title: 'Title article 5'  
        },
        {
            name: "article5",
            type: "articleNoImage",
            title: "Article 5"
        },
        {
            name: 'imgArt6',
            type: 'iconImage',
            title: 'Image art 6'
        },
        {
            name: 'titleArt6',
            type: 'string',
            title: 'Title article 6'  
        },
        {
            name: "article6",
            type: "articleNoImage",
            title: "Article 6"
        },

    ]
}