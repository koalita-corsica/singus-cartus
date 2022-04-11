/* eslint-disable react/jsx-key */
import React from "react";
import { graphql } from "gatsby";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import Layout from "../containers/layout";
import { Link } from "gatsby";

import { BsFillPlusSquareFill } from "react-icons/bs";

import * as styles from "../pages/index.module.css";

export const query = graphql`
  query allNewsletterPageQuery {
    allSanityNewsletter(filter: { slug: { current: { ne: "null" } } }) {
      edges {
        node {
          titleNewsLetter
          iconEdito {
            iconsGallery {
              asset {
                url
              }
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

  return (
        <Layout>
          <Link to="/fichePoste"
                state={{ string: "Hello there"}}>
            Go
          </Link>
        </Layout>
  );
};

export default IndexPage;
