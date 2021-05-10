/* eslint-disable react/jsx-key */
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
    allSanityNewsletter(filter: { slug: { current: { ne: "null" } } }) {
      edges {
        node {
          titleNewsLetter
          iconEdito {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

const IndexPage = (props) => {
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
    console.log(newsInfo),
    (
      <Layout>
        <Container>
          {newsInfo.map((newsletter) => (
            <div>
              <h1> {newsletter.node.titleNewsLetter} </h1>
              <img src={newsletter.node.iconEdito.asset.url} alt="" />
            </div>
          ))}
        </Container>
      </Layout>
    )
  );
};

export default IndexPage;
