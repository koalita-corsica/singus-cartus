import { graphql } from "gatsby";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import Newsletter from "../components/newsletter";

export const query = graphql`
  query NewsletterTemplateQuery($id: String!) {
    newsletter: sanityNewsletter(id: { eq: $id }) {
      titleNewsLetter
      slug {
        current
      }
      titleArt1
      imgArt1 {
        asset {
          url
        }
        caption
      }
      _rawArticle1
      titleArt2
      _rawArticle2
      iconEdito {
        iconsGallery {
          asset {
            url
          }
        }
      }
      titleEdito
      _rawArticleEdito
      titleArt3
      _rawArticle3P1
      _rawArticle3P2
      titleArt4
      _rawArticle4
      imgArt4 {
        asset {
          url
        }
      }
      titleArt5
      _rawArticle5
      imgArt5 {
        asset {
          url
        }
      }
      titleArt6
      _rawArticle6
      imgArt6 {
        asset {
          url
        }
      }
    }
  }
`;

const NewsLetterTemplate = (props) => {
  const { data, errors } = props;
  const news = data && data.newsletter;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {news && <Newsletter {...news} />}
    </Layout>
  );
};

export default NewsLetterTemplate;
