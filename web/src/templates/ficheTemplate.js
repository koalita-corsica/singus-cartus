import { graphql } from "gatsby";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import Fiche from "../components/fiche";

export const query = graphql`
  query FicheTemplateQuery($id: String!) {
    fiche: sanityFiches(id: { eq: $id }) {
      slug {
        current
      }
      version
      fichedeposte
      entreprise {
        name
      }
      machine
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
        qtachename
        quandname
        qui
      }
      risques {
        picto {
          asset {
            url
          }
        }
      }
      mesures
    }
  }
`;

const FicheTemplate = (props) => {
  const { data, errors } = props;
  const fiche = data && data.fiche;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {fiche && <Fiche {...fiche} />}
    </Layout>
  );
};

export default FicheTemplate;
