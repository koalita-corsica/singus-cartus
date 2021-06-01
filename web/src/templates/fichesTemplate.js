import { graphql } from "gatsby";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import Fiche from "../components/fiche";

export const query = graphql`
  query FicheTemplateQuery($id: String!) {
    newsletter: sanityFiches(id: { eq: $id }) {
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
    <Layout>
      {errors && <SEO title="GraphQL Error" />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {news && <Fiche {...news} />}
    </Layout>
  );
};

export default FicheTemplate;
