const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require("date-fns");

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

exports.createPages = async ({ graphql, actions }) => {
  await createNewsLetter(graphql, actions);
};
