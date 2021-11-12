import { graphql } from "gatsby";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import Fiche from "../components/ficheChimique";

export const query = graphql`
  query FicheTemplateQuery1($id: String!) {
    newsletter: sanityFichesChmique(id: { eq: $id }) {
      slug {
        current
      }
      version
      fichedeposte
      entreprise {
        name
      }
      machine
      qualifications
      formation
      marque
      caract
      miseenservice
      produits
      type
      ogImage {
        asset {
          url
        }
      }
      legend
      epi {
        image {
          asset {
            url
          }
        }
      }
      interdiction {
        image {
          asset {
            url
          }
        }
      }
      tache {
        _key
        quand
        quelle
        qui
        mesures
        risques {
          picto {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

const FicheTemplate = (props) => {
  const { data, errors } = props;
  const news = data && data.newsletter;
  return (
    <>
      {news && <Fiche {...news} />}
    </>
  );
};

export default FicheTemplate;
