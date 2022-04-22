import { graphql } from "gatsby";
import React from "react";
import Layout from "../containers/layout";
import Fiche from "../components/ficheChimiqueAPI/ficheChimique";

export const query = graphql`
  query FicheTemplateQuer1y1($id: String!) {
    newsletter: sanityFichesChmiqueApi(id: { eq: $id }) {
      slug
      version
      fichedeposte
      entreprise {
        title
        logo {
          asset {
            url
          }
        }
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
           picto {
             asset {
               url
             }
           }
         }
         risquesD {
           picto {
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
        ... on SanityPictosD {
          id
          picto {
            asset {
              url
            }
          }
        }
        ... on SanityPictosI {
          id
          picto {
            asset {
              url
            }
          }
        }
        ... on SanityPictosO {
          id
          picto {
            asset {
              url
            }
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
