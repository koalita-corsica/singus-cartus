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

import * as styles from "../styles/home.css";

export const query = graphql`
  query Home {
    allSanityCompany {
      edges {
        node {
          title
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;
  const company = data.allSanityCompany.edges;
  let log = console.log;

  log(company)

  return (
        <Layout>
          <div data-homeWrapper>
            <div data-gridHome>
              {company.map((item, i) =>
              <Link to="/company">
                <div data-item>
                  <img src="" alt={`logo de ${item.node.title}`} width="30" />
                  <h3> {item.node.title} </h3>
                </div>
              </Link>
              )}
            </div>
          </div>
        </Layout>
  );
};

export default IndexPage;
