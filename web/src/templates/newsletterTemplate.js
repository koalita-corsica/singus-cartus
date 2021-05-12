import { graphql } from "gatsby";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import Newsletter from "../components/newsletter";

export const query = graphql`
  query NewsletterTemplateQuery($id: String!){
    newsletter: sanityNewsletter(id:{eq: $id}) {
      titleArt1
      titleArt2
      titleArt3
      titleArt4
      titleArt5
      titleArt6
      titleEdito
      imgArt1 {
        asset {
          url
        }
      }
      imgArt4 {
        asset {
          url
        }
      }
      imgArt5 {
        asset {
          url
        }
      }
      imgArt6 {
        asset {
          url
        }
      }
      iconEdito {
        asset {
          url
        }
      }
      _rawArticle1
      _rawArticle2
      _rawArticle3P1
      _rawArticle3P2
      _rawArticle4
      _rawArticle5
      _rawArticle6
      _rawArticleEdito
      _rawIconEdito
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
