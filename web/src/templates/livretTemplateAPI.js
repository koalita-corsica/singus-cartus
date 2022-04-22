import { graphql } from "gatsby";
import React from "react";
import Layout from "../containers/layout";
import Livret from "../components/LivretAPI/livret";

export const query = graphql`
query Livrett1($id: String!) {
  newsletter: sanityLivretsApi(id: { eq: $id }) {
    livret {
      ... on SanityEquipement {
        epi {
          title
          image {
            asset {
              url
            }
          }
          _rawDescription
        }
      }
      ... on SanityRegles {
        infos {
          function
          numero
          value
        }
      }
    }
    title {
      title
    }
    wRisques {
       title
       picto {
         asset {
           url
         }
       }
       warn {
         asset {
           url
         }
       }
       _rawP1
       _rawP2
       _rawP3
       _rawP4
       sensi
     }
      precision
      texte
      logo {
        asset {
          url
        }
      }
      evacuer
      partn {
        asset {
          url
        }
      }
      version
      adresse
      numero
      mail
      gerant
      activite
      nbSalaries
      codeRisque
      taux
      documentUnique
      affObligatoire
      affPrevention
      affCovid
      unite
      plandacces {
        asset {
          url
        }
      }
    }
  }
`;

const LivretTemplate = (props) => {
  const { data, errors } = props;
  const news = data && data.newsletter;
  return (
    <Layout>
      {news && <Livret {...news} />}
    </Layout>
  );
};

export default LivretTemplate;
