/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createNewsLetter(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityNewsletter {
        nodes {
          slug {
            current
          }
          id
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const newsletterNodes = (result.data.allSanityNewsletter || {}).nodes || [];

  newsletterNodes.forEach((node) => {
    const { id, slug = {} } = node;
    if (!slug) return;
    const path = `/newsletter/${slug.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/newsletterTemplate.js"),
      context: { id },
    });
  });
}

async function createFiche(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityFiches {
        nodes {
          slug {
            current
          }
          id
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const newsletterNodes = (result.data.allSanityFiches || {}).nodes || [];

  newsletterNodes.forEach((node) => {
    const { id, slug = {} } = node;
    if (!slug) return;
    const path = `/fichesdeposte/${slug.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/fichesTemplate.js"),
      context: { id },
    });
  });
}

async function createLivret(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityLivrets {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const newsletterNodes = (result.data.allSanityLivrets || {}).nodes || [];

  newsletterNodes.forEach((node) => {
    const { id, slug = {} } = node;
    if (!slug) return;
    const path = `/livret/${slug.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/livretTemplate.js"),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createNewsLetter(graphql, actions);
  await createFiche(graphql, actions);
  await createLivret(graphql, actions);
  await createFicheChimique(graphql, actions);
};
