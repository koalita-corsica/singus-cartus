import React from "react";
import { graphql } from "gatsby";
import Questionnaire from "../components/questionnaire";



export const query = graphql`
  query IndexPageQuery {
    allSanityCadeau {
      edges {
        node {
          name
          image {
            asset {
              url
            }
          }
        }
      }
    }    
    allSanityQuestion {
      edges {
        node {
          ordre
          question
          rep {
            mareponse
            singleval {
              val
              cad {
                name
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  const questionReponse = data.allSanityQuestion
  const fullcadeaux = data.allSanityCadeau


  return (
    <>
      <h1>hello</h1>
      <Questionnaire questionReponse={questionReponse} fullcadeaux={fullcadeaux} />
    </>
  );
};

export default IndexPage;
