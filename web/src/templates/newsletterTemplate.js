import { graphql } from "gatsby";
import BlogPost from "../components/blog-post";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import Newsletter from "../components/newsletter";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!){
    newsletter: sanityNewsletter(id:{eq: $id}) {
        titleNewsLetter
        titleArt1
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
