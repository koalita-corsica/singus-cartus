import React from "react";
import { graphql } from "gatsby";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import BlogPostPreviewList from "../components/blog-post-preview-list";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  
  query allNewsletterPageQuery {
    allSanityNewsletter(filter: {slug: {current: {ne: "null"}}}) {
      edges {
        node {
          id
          slug {
            current
          }
        }
      }
    }
  }
`;

const NewsletterPage = (props) => {
  const { data, errors } = props;
  const newsInfo = data.allSanityNewsletter.edges;
  
 
  

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return (
    <Layout>
      <Container>
      {newsInfo.map((newsletter) =>
          <h1> {newsletter.node.slug.current} </h1>
        )}
        

      </Container>
    </Layout>
  );
};

export default NewsletterPage;
