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
import { Link } from "gatsby";

import * as styles from "../pages/index.module.css";

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
          slug {
            current
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
    <Layout>
      <Container>
        <div className={styles.container}>
          {newsInfo.map((newsletter) => (
            <Link
              to={
                newsletter.node.slug.current
                  ? "/newsletter/" + `${newsletter.node.slug.current}`
                  : ""
              }
            >
              <div className={styles.show}>
                <img src={newsletter.node.iconEdito.asset.url} alt="" />
                <h3> {newsletter.node.titleNewsLetter} </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
