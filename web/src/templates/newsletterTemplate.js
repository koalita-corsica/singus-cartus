import { graphql } from "gatsby";
import BlogPost from "../components/blog-post";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import Newsletter from "../components/newsletter";

export const query = graphql`
  query NewsletterTemplateQuery($id: String!) {
    newsletter: sanityNewsletter(id: { eq: $id }) {
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
        asset {
          url
        }
      }
      titleEdito
      _rawArticleEdito
      titleArt3
      _rawArticle3
      imgArt3 {
        asset {
          url
        }
      }
      titleArt4
      _rawArticle4
      imgArt5 {
        asset {
          url
        }
      }
      titleArt5
      _rawArticle5
      imgArt6 {
        asset {
          url
        }
      }
      titleArt6
      _rawArticle6
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
