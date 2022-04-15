import { graphql } from "gatsby";
import React from "react";
import Layout from "../containers/layout";

export const query = graphql`
  query Company($id: String!) {
    newsletter: sanityCompany(id: { eq: $id }) {
        title
    }
  }
`;

const CompanyTemplate = (props) => {
  const { data, errors } = props;
  const news = data && data.newsletter;
  return (
    <Layout>
      <h1> Company {news.title} </h1>  
    </Layout>
  );
};

export default CompanyTemplate;
