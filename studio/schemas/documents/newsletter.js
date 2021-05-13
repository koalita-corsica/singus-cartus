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
        isHighlighted: true,
      },
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
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
      type: "articleNoImage",
      title: "Article 1",
      validation: (Rule) =>
        Rule.custom((articleNoImage) => {
          var result = 0;
          const emptyBlocks = (articleNoImage || []).filter(
            (articleNoImage) =>
              articleNoImage._type === "block" &&
              articleNoImage.children.every((span) =>
                span._type === "span"
                  ? (result += span.text.trim().length)
                  : "none"
              )
          );
          const emptyPaths = emptyBlocks.map(
            (block, index) => [{ _key: block._key }] || [index]
          );
          console.log("article1 " + result);
          return result <= 777
            ? true
            : {
                message: "Le texte va deborder",
                paths: emptyPaths,
              };
        }),
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
      type: "articleNoImage",
      title: "Article 2",
      validation: (Rule) =>
        Rule.custom((articleNoImage) => {
          var result = 0;
          const emptyBlocks = (articleNoImage || []).filter(
            (articleNoImage) =>
              articleNoImage._type === "block" &&
              articleNoImage.children.every((span) =>
                span._type === "span"
                  ? (result += span.text.trim().length)
                  : "none"
              )
          );
          const emptyPaths = emptyBlocks.map(
            (block, index) => [{ _key: block._key }] || [index]
          );
          console.log(result);
          return result <= 458
            ? true
            : {
                message: "Le texte va deborder",
                paths: emptyPaths,
              };
        }),
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
      type: "articleNoImage",
      title: "Article Edito",
      validation: (Rule) =>
        Rule.custom((articleNoImage) => {
          var result = 0;
          const emptyBlocks = (articleNoImage || []).filter(
            (articleNoImage) =>
              articleNoImage._type === "block" &&
              articleNoImage.children.every((span) =>
                span._type === "span"
                  ? (result += span.text.trim().length)
                  : "none"
              )
          );
          const emptyPaths = emptyBlocks.map(
            (block, index) => [{ _key: block._key }] || [index]
          );
          console.log(result);
          return result <= 706
            ? true
            : {
                message: "qwerty",
                paths: emptyPaths,
              };
        }),
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
      type: "articleNoImage",
      title: "Article 3 para 1",
      validation: (Rule) =>
        Rule.custom((articleNoImage) => {
          var result = 0;
          const emptyBlocks = (articleNoImage || []).filter(
            (articleNoImage) =>
              articleNoImage._type === "block" &&
              articleNoImage.children.every((span) =>
                span._type === "span"
                  ? (result += span.text.trim().length)
                  : "none"
              )
          );
          const emptyPaths = emptyBlocks.map(
            (block, index) => [{ _key: block._key }] || [index]
          );
          console.log(result);
          return result <= 687
            ? true
            : {
                message: "Le texte va deborder",
                paths: emptyPaths,
              };
        }),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "article3p2",
      type: "articleNoImage",
      title: "Article 3 para 2",
      validation: (Rule) =>
        Rule.custom((articleNoImage) => {
          var result = 0;
          const emptyBlocks = (articleNoImage || []).filter(
            (articleNoImage) =>
              articleNoImage._type === "block" &&
              articleNoImage.children.every((span) =>
                span._type === "span"
                  ? (result += span.text.trim().length)
                  : "none"
              )
          );
          const emptyPaths = emptyBlocks.map(
            (block, index) => [{ _key: block._key }] || [index]
          );
          console.log(result);
          return result <= 687
            ? true
            : {
                message: "Le texte va deborder",
                paths: emptyPaths,
              };
        }),
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
      type: "articleNoImage",
      title: "Article 4",
      validation: (Rule) =>
        Rule.custom((articleNoImage) => {
          var result = 0;
          const emptyBlocks = (articleNoImage || []).filter(
            (articleNoImage) =>
              articleNoImage._type === "block" &&
              articleNoImage.children.every((span) =>
                span._type === "span"
                  ? (result += span.text.trim().length)
                  : "none"
              )
          );
          const emptyPaths = emptyBlocks.map(
            (block, index) => [{ _key: block._key }] || [index]
          );
          console.log(result);
          return result <= 688
            ? true
            : {
                message: "Le texte va deborder",
                paths: emptyPaths,
              };
        }),
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
      type: "articleNoImage",
      title: "Article 5",
      validation: (Rule) =>
        Rule.custom((articleNoImage) => {
          var result = 0;
          const emptyBlocks = (articleNoImage || []).filter(
            (articleNoImage) =>
              articleNoImage._type === "block" &&
              articleNoImage.children.every((span) =>
                span._type === "span"
                  ? (result += span.text.trim().length)
                  : "none"
              )
          );
          const emptyPaths = emptyBlocks.map(
            (block, index) => [{ _key: block._key }] || [index]
          );
          console.log(result);
          return result <= 531
            ? true
            : {
                message: "Le texte va deborder",
                paths: emptyPaths,
              };
        }),
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
      type: "articleNoImage",
      title: "Article 6",
      validation: (Rule) =>
        Rule.custom((articleNoImage) => {
          var result = 0;
          const emptyBlocks = (articleNoImage || []).filter(
            (articleNoImage) =>
              articleNoImage._type === "block" &&
              articleNoImage.children.every((span) =>
                span._type === "span"
                  ? (result += span.text.trim().length)
                  : "none"
              )
          );
          const emptyPaths = emptyBlocks.map(
            (block, index) => [{ _key: block._key }] || [index]
          );
          console.log(result);
          return result <= 418
            ? true
            : {
                message: "Le texte va deborder",
                paths: emptyPaths,
              };
        }),
      options: {
        isHighlighted: true,
      },
    },
  ],
};
