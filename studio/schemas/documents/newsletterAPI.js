export default {
  name: "newsletterAPI",
  type: "document",
  title: "Newsletter",
  initialValue: () => ({
    imgArt1: {
      _type: "mainImage",
      asset: {
        _type: "reference",
        _ref: "image-a1c47763707c577d2b42ab004ad11504012ef820-1200x630-jpg",
      },
    },
    imgArt4: {
      _type: "mainImage",
      asset: {
        _type: "reference",
        _ref: "image-a1c47763707c577d2b42ab004ad11504012ef820-1200x630-jpg",
      },
    },
    imgArt5: {
      _type: "mainImage",
      asset: {
        _type: "reference",
        _ref: "image-a1c47763707c577d2b42ab004ad11504012ef820-1200x630-jpg",
      },
    },
    imgArt6: {
      _type: "mainImage",
      asset: {
        _type: "reference",
        _ref: "image-a1c47763707c577d2b42ab004ad11504012ef820-1200x630-jpg",
      },
    },
    iconEdito: {
      _type: "reference",
      _ref: "86c88711-f71a-4b6b-b62f-d2bac12b8659",
    },
    titleNewsLetter: "Title Newsletter",
    titleArt1: "Title #1",
    titleArt2: "Title #2",
    titleArt3: "Title #3",
    titleArt4: "Title #4",
    titleArt5: "Title #5",
    titleArt6: "Title #6",
  }),
  fields: [
    {
      name: "titleNewsLetter",
      type: "string",
      title: "Title Newsletter",
      validation: (Rule) =>
        Rule.custom((string) => {
          string = " ";
          return string.length > 0 ? true : false;
        }),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "slug",
      type: "string",
      title: "Slug",
    },
    {
      name: "titleArt1",
      type: "string",
      title: "Title article 1",
      validation: (Rule) =>
        Rule.custom((string) => {
          string = " ";
          return string.length > 0 ? true : false;
        }),
      options: {
        isHighlighted: true,
      },
    },

    {
      name: "imgArt1",
      type: "image",
      title: "Image article  1",
    },
    {
      name: "article1",
      type: "string",
      // validation: (Rule) =>
      //   Rule.custom((articleNoImage) => {
      //     console.log(articleNoImage);
      //     var result = 0;
      //     const emptyBlocks = (articleNoImage || []).filter(
      //       (articleNoImage) =>
      //         articleNoImage._type === "block" &&
      //         articleNoImage.children.every((span) =>
      //           span._type === "span"
      //             ? (result += span.text.trim().length)
      //             : "none"
      //         )
      //     );
      //     const emptyPaths = emptyBlocks.map(
      //       (block, index) => [{ _key: block._key }] || [index]
      //     );
      //     return result <= 752
      //       ? true
      //       : {
      //           message: "Le texte va deborder",
      //           paths: emptyPaths,
      //         };
      //   }),
      // options: {
      //   isHighlighted: true,
      // },
      title: "Article 1:  Max-caractères = 752",
    },
    {
      name: "titleArt2",
      type: "string",
      title: "Title article 2",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "article2",
      type: "string",
      title: "Article 2: Max-caractères = 411",
      // validation: (Rule) =>
      //   Rule.custom((articleNoImage) => {
      //     var result = 0;
      //     const emptyBlocks = (articleNoImage || []).filter(
      //       (articleNoImage) =>
      //         articleNoImage._type === "block" &&
      //         articleNoImage.children.every((span) =>
      //           span._type === "span"
      //             ? (result += span.text.trim().length)
      //             : "none"
      //         )
      //     );
      //     const emptyPaths = emptyBlocks.map(
      //       (block, index) => [{ _key: block._key }] || [index]
      //     );
      //     console.log(result);
      //     return result <= 411
      //       ? true
      //       : {
      //           message: "Le texte va deborder",
      //           paths: emptyPaths,
      //         };
      //   }),
      // options: {
      //   isHighlighted: true,
      // },
    },
    {
      name: "iconEdito",
      type: "reference",
      title: "Mascottes :",
      options: {
        isHighlighted: true,
      },
      to: [{ type: "icon" }],
    },
    {
      name: "titleEdito",
      type: "string",
      title: "Title edito",
      validation: (Rule) =>
        Rule.custom((string) => {
          string = " ";
          return string.length > 0 ? true : false;
        }),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "articleEdito",
      type: "string",
      title: "Article Edito: Max-caractères = 612",
      // validation: (Rule) =>
      //   Rule.custom((articleNoImage) => {
      //     var result = 0;
      //     const emptyBlocks = (articleNoImage || []).filter(
      //       (articleNoImage) =>
      //         articleNoImage._type === "block" &&
      //         articleNoImage.children.every((span) =>
      //           span._type === "span"
      //             ? (result += span.text.trim().length)
      //             : "none"
      //         )
      //     );
      //     const emptyPaths = emptyBlocks.map(
      //       (block, index) => [{ _key: block._key }] || [index]
      //     );
      //     console.log(result);
      //     return result <= 612
      //       ? true
      //       : {
      //           message: "qwerty",
      //           paths: emptyPaths,
      //         };
      //   }),
      // options: {
      //   isHighlighted: true,
      // },
    },
    {
      name: "titleArt3",
      type: "string",
      title: "Titre article 3",
      validation: (Rule) =>
        Rule.custom((string) => {
          string = " ";
          return string.length > 0 ? true : false;
        }),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "article3p1",
      type: "string",
      title: "Article 3 para 1: Max-caractères = 581",
      // validation: (Rule) =>
      //   Rule.custom((articleNoImage) => {
      //     var result = 0;
      //     const emptyBlocks = (articleNoImage || []).filter(
      //       (articleNoImage) =>
      //         articleNoImage._type === "block" &&
      //         articleNoImage.children.every((span) =>
      //           span._type === "span"
      //             ? (result += span.text.trim().length)
      //             : "none"
      //         )
      //     );
      //     const emptyPaths = emptyBlocks.map(
      //       (block, index) => [{ _key: block._key }] || [index]
      //     );
      //     console.log(result);
      //     return result <= 581
      //       ? true
      //       : {
      //           message: "Le texte va deborder",
      //           paths: emptyPaths,
      //         };
      //   }),
      // options: {
      //   isHighlighted: true,
      // },
    },
    {
      name: "article3p2",
      type: "string",
      title: "Article 3 para 2: Max-caractères = 576",
      // validation: (Rule) =>
      //   Rule.custom((articleNoImage) => {
      //     var result = 0;
      //     const emptyBlocks = (articleNoImage || []).filter(
      //       (articleNoImage) =>
      //         articleNoImage._type === "block" &&
      //         articleNoImage.children.every((span) =>
      //           span._type === "span"
      //             ? (result += span.text.trim().length)
      //             : "none"
      //         )
      //     );
      //     const emptyPaths = emptyBlocks.map(
      //       (block, index) => [{ _key: block._key }] || [index]
      //     );
      //     console.log(result);
      //     return result <= 576
      //       ? true
      //       : {
      //           message: "Le texte va deborder",
      //           paths: emptyPaths,
      //         };
      //   }),
      // options: {
      //   isHighlighted: true,
      // },
    },
    {
      name: "imgArt4",
      type: "image",
      title: "Image art 4",
    },
    {
      name: "titleArt4",
      type: "string",
      title: "Title article 4",
      validation: (Rule) =>
        Rule.custom((string) => {
          string = " ";
          return string.length > 0 ? true : false;
        }),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "article4",
      type: "string",
      title: "Article 4: Max-caractères = 282",
      // validation: (Rule) =>
      //   Rule.custom((articleNoImage) => {
      //     var result = 0;
      //     const emptyBlocks = (articleNoImage || []).filter(
      //       (articleNoImage) =>
      //         articleNoImage._type === "block" &&
      //         articleNoImage.children.every((span) =>
      //           span._type === "span"
      //             ? (result += span.text.trim().length)
      //             : "none"
      //         )
      //     );
      //     const emptyPaths = emptyBlocks.map(
      //       (block, index) => [{ _key: block._key }] || [index]
      //     );
      //     return result <= 282
      //       ? true
      //       : {
      //           message: "Le texte va deborder",
      //           paths: emptyPaths,
      //         };
      //   }),
      // options: {
      //   isHighlighted: true,
      // },
    },
    {
      name: "imgArt5",
      type: "image",
      title: "Image art 5",
    },
    {
      name: "titleArt5",
      type: "string",
      title: "Title article 5",
      validation: (Rule) =>
        Rule.custom((string) => {
          string = " ";
          return string.length > 0 ? true : false;
        }),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "article5",
      type: "string",
      title: "Article 5: Max-caractères = 530",
      // validation: (Rule) =>
      //   Rule.custom((articleNoImage) => {
      //     var result = 0;
      //     const emptyBlocks = (articleNoImage || []).filter(
      //       (articleNoImage) =>
      //         articleNoImage._type === "block" &&
      //         articleNoImage.children.every((span) =>
      //           span._type === "span"
      //             ? (result += span.text.trim().length)
      //             : "none"
      //         )
      //     );
      //     const emptyPaths = emptyBlocks.map(
      //       (block, index) => [{ _key: block._key }] || [index]
      //     );
      //     console.log(result);
      //     return result <= 530
      //       ? true
      //       : {
      //           message: "Le texte va deborder",
      //           paths: emptyPaths,
      //         };
      //   }),
      // options: {
      //   isHighlighted: true,
      // },
    },
    {
      name: "imgArt6",
      type: "image",
      title: "Image art 6",
    },
    {
      name: "titleArt6",
      type: "string",
      title: "Title article 6",
      validation: (Rule) =>
        Rule.custom((string) => {
          string = " ";
          return string.length > 0 ? true : false;
        }),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "article6",
      type: "string",
      title: "Article 6: Max-caractères = 413",
      // validation: (Rule) =>
      //   Rule.custom((articleNoImage) => {
      //     var result = 0;
      //     const emptyBlocks = (articleNoImage || []).filter(
      //       (articleNoImage) =>
      //         articleNoImage._type === "block" &&
      //         articleNoImage.children.every((span) =>
      //           span._type === "span"
      //             ? (result += span.text.trim().length)
      //             : "none"
      //         )
      //     );
      //     const emptyPaths = emptyBlocks.map(
      //       (block, index) => [{ _key: block._key }] || [index]
      //     );
      //     console.log(result);
      //     return result <= 413
      //       ? true
      //       : {
      //           message: "Le texte va deborder",
      //           paths: emptyPaths,
      //         };
      //   }),
      // options: {
      //   isHighlighted: true,
      // },
    },
  ],
};
