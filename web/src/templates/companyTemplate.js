import { graphql, Link } from "gatsby";
import React from "react";
import Previous from "../components/previous/previous";
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
      <Previous />
      <h1> Entreprise : {entreprise.title} </h1>  
      <div data-companyWrapper>
        <div data-companyGrid>
            <Link to="/fsap"
              state={{fiches: fiches, entreprise: entreprise}}
            >
                <div data-item data-fsap>
                    <h3>Fiche sécurité au poste</h3>
                </div>
            </Link>
            <Link to="/notice"
              state={{notices: notices, entreprise: entreprise}}
            >
              <div data-item data-chem>
                  <h3>Notice de Poste Produit Chimique</h3>
              </div>
            </Link>
            <Link to="/livret"
              state={{livrets: livrets, entreprise: entreprise}}
            >
              <div data-item data-livret>
                  <h3>Livret D'Accueil </h3>
              </div>
            </Link>
            <div data-item data-vgp>
                <h3> VGP </h3>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default CompanyTemplate;
