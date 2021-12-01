import { graphql } from "gatsby";
import React from "react";
import Layout from "../containers/layout";
import Fiche from "../components/ficheChimique/ficheChimique";

export const query = graphql`
  query FicheTemplateQuer1y($id: String!) {
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

const FicheChimiTemplate = (props) => {
  const { data, errors } = props;
  const news = data && data.newsletter;
  return (
    <Layout>
      {news && <Fiche {...news} />}
    </Layout>
  );
};

export default FicheChimiTemplate;
