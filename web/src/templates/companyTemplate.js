import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../containers/layout";
import * as styles from "../styles/company.css"

export const query = graphql`
  query Company1($id: String!) {
    entreprise: sanityCompany(id: { eq: $id }) {
        _id
        title
        rue
        ville
        code_postal
        activite
        division
        email
        fax
        gerant
        statut
        telephone
    }
    fichedeposte: allSanityFichesApi(filter: {entreprise: {id: {eq: $id}}}) {
      edges {
        node {
          _id
          fichedeposte
          version
          slug 
          entreprise {
              title
            }
        }
      }
    }
    noticechimique: allSanityFichesChmiqueApi(filter: {entreprise: {id: {eq: $id}}}) {
      edges {
        node {
          _id
          fichedeposte
          version
          slug
          entreprise {
              title
            }
        }
      }
    }
    livrets: allSanityLivretsApi(filter: {title: {id: {eq: $id}}}) {
      edges {
        node {
          title {
            title
          }
          slug
        }
      }
    }
  }
`;

const CompanyTemplate = (props) => {
  let log = console.log;
  const { data, errors } = props;
  
  const fiches = data && data.fichedeposte;
  const notices = data && data.noticechimique;
  const livrets = data && data.livrets;

  const entreprise = data && data.entreprise;

  return (
    <Layout>
      <h1> Company {entreprise.title} </h1>  
      <div data-companyWrapper>
        <div data-companyGrid>
            <Link to="/fsap"
              state={{fiches: fiches, entreprise: entreprise}}
            >
                <div data-item>
                    <img src="" alt="Preview FSAP" width="30" />
                    <h3> FSAP </h3>
                </div>
            </Link>
            <Link to="/notice"
              state={{notices: notices, entreprise: entreprise}}
            >
              <div data-item>
                  <img src="" alt="Preview Notice" width="30" />
                  <h3> Notice </h3>
              </div>
            </Link>
            <Link to="/livret"
              state={{livrets: livrets, entreprise: entreprise}}
            >
              <div data-item>
                  <img src="" alt="Preview Livret" width="30" />
                  <h3> Livret </h3>
              </div>
            </Link>
            <div data-item>
                <img src="" alt="Preview VGP" width="30" />
                <h3> VGP </h3>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default CompanyTemplate;
