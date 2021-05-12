export default {
  name: "newsletter",
  type: "document",
  title: "Newsletter",
  fields: [
    {
      name: "titleNewsLetter",
      type: "string",
      title: "Title news letter",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "titleNewsLetter",
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "titleArt1",
      type: "string",
      title: "Title article 1",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },

    {
      name: "imgArt1",
      type: "mainImage",
      title: "Image article  1",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "article1",
      type: "text",
      title: "Article 1",
      validation: (Rule) =>
        Rule.required().max(767),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "titleArt2",
      type: "string",
      title: "Title article 2",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "article2",
      type: "text",
      title: "Article 2",
      validation: (Rule) =>
        Rule.required().max(430),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "iconEdito",
      type: "iconImage",
      title: "iconEdito",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "titleEdito",
      type: "string",
      title: "Title edito",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "articleEdito",
      type: "text",
      title: "Article Edito",
      validation: (Rule) =>
        Rule.required().max(578),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "titleArt3",
      type: "string",
      title: "Titre article 3",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "article3p1",
      type: "text",
      title: "Article 3 para 1",
      validation: (Rule) =>
        Rule.required().max(590),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "article3p2",
      type: "text",
      title: "Article 3 para 2",
      validation: (Rule) =>
        Rule.required().max(590),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "imgArt4",
      type: "iconImage",
      title: "Image art 4",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "titleArt4",
      type: "string",
      title: "Title article 4",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "article4",
      type: "text",
      title: "Article 4",
      validation: (Rule) =>
        Rule.required().max(292),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "imgArt5",
      type: "iconImage",
      title: "Image art 5",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "titleArt5",
      type: "string",
      title: "Title article 5",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "article5",
      type: "text",
      title: "Article 5",
      validation: (Rule) =>
        Rule.required().max(540),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "imgArt6",
      type: "iconImage",
      title: "Image art 6",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "titleArt6",
      type: "string",
      title: "Title article 6",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "article6",
      type: "text",
      title: "Article 6",
      validation: (Rule) =>
        Rule.required().max(400),
      options: {
        isHighlighted: true,
      },
    },
  ],
};
