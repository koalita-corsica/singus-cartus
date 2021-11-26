import { graphql } from "gatsby";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import Livret from "../components/livret";

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
       _rawDescription
       sensi
     }
    livret {
      ... on SanityCouverture {
        _rawTexte
        image {
          asset {
            url
          }
        }
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
          logo {
            asset {
              url
            }
          }
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
      {errors && <SEO title="GraphQL Error" />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {news && <Livret {...news} />}
    </Layout>
  );
};

export default LivretTemplate;
