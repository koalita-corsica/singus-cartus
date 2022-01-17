import { graphql } from "gatsby";
import React from "react";
import Layout from "../containers/layout";
import Livret from "../components/Livret/livret";

export const query = graphql`
query Livrett($id: String!) {
  newsletter: sanityLivrets(id: { eq: $id }) {
    title
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
    livret {
      ... on SanityCouverture {
        precision
        _rawTexte
        image {
          asset {
            url
          }
        }
        version
        adresse
        numero
        mail
      }
      ... on SanityRenseignement {
        _key
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
        image {
          asset {
            url
          }
        }
      }
      ... on SanityRegles {
        _key
        infos {
          function
          value
          numero
        }
      }
      ... on SanityEquipement {
        _key
        epi {
          image {
            asset {
              url
            }
          }
          _rawDescription
        }
      }
      ... on SanityIncendie {
        _key
        _rawEvacuer
        logo {
          asset {
            url
          }
        }
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
