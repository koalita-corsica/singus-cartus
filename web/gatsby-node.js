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

async function createChimique(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityFichesChmique {
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

  const newsletterNodes = (result.data.allSanityFichesChmique || {}).nodes || [];

  newsletterNodes.forEach((node) => {
    const { id, slug = {} } = node;
    if (!slug) return;
    const path = `/ficheschimique/${slug.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/fichesChimiquesTemplate.js"),
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

async function createCompany(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityCompany {
        nodes {
          id
          title
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const newsletterNodes = (result.data.allSanityCompany || {}).nodes || [];

  newsletterNodes.forEach((node) => {
    const { id, title } = node;
    const path = `/entreprise/${title}`;
    createPage({
      path,
      component: require.resolve("./src/templates/companyTemplate.js"),
      context: { id },
    });
  });
}

async function createFicheAPI(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityFichesApi {
        nodes {
          slug 
          id
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const newsletterNodes = (result.data.allSanityFichesApi || {}).nodes || [];

  newsletterNodes.forEach((node) => {
    const { id, slug } = node;    
    if (!slug) return;
    const path = `/fichesdeposteAPI/${slug}`;
    createPage({
      path,
      component: require.resolve("./src/templates/fichesTemplateAPI.js"),
      context: { id },
    });
  });
}

async function createNoticeAPI(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityFichesChmiqueApi {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const newsletterNodes = (result.data.allSanityFichesChmiqueApi || {}).nodes || [];

  newsletterNodes.forEach((node) => {
    const { id, slug } = node;    
    if (!slug) return;
    const path = `/noticeAPI/${slug}`;
    createPage({
      path,
      component: require.resolve("./src/templates/fichesChimiquesTemplateAPI.js"),
      context: { id },
    });
  });
}

async function createLivretAPI(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityLivretsApi {
        nodes {
          id
          title {
            title
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const newsletterNodes = (result.data.allSanityLivretsApi || {}).nodes || [];

  newsletterNodes.forEach((node) => {
    const { id, title = {} } = node;    
    const path = `/livretAPI/${title.title}`;
    createPage({
      path,
      component: require.resolve("./src/templates/livretTemplateAPI.js"),
      context: { id },
    });
  });
}

async function createNewsLetterAPI(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityNewsletterApi {
        nodes {
          slug
          id
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const newsletterNodes = (result.data.allSanityNewsletterApi || {}).nodes || [];

  newsletterNodes.forEach((node) => {
    const { id, slug } = node;
    if (!slug) return;
    const path = `/newsletterAPI/${slug}`;
    createPage({
      path,
      component: require.resolve("./src/templates/newsletterTemplateAPI.js"),
      context: { id },
    });
  });
}


exports.createPages = async ({ graphql, actions }) => {
  await createNewsLetter(graphql, actions);
  await createFiche(graphql, actions);
  await createLivret(graphql, actions);
  await createChimique(graphql, actions);
  await createCompany(graphql, actions);
  await createFicheAPI(graphql, actions);
  await createNoticeAPI(graphql, actions);
  await createLivretAPI(graphql, actions);
  await createNewsLetterAPI(graphql, actions);
};
