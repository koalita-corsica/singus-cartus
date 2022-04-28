/* eslint-disable react/jsx-key */
import React from "react";
import { graphql } from "gatsby";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import Layout from "../containers/layout";
import { Link } from "gatsby";

import { BsFillPlusSquareFill } from "react-icons/bs";

import * as styles from "../styles/home.css";

export const query = graphql`
  query Home {
    allSanityCompany {
      edges {
        node {
          _id
          title
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

const IndexPage = (props) => {
  const { data, errors } = props;
  const company = data.allSanityCompany.edges;
  let log = console.log;

  //function createCompany() {
    // axios.get('https://api.dev.evrpro.com/societes/', {
    //   headers: {
    //       'Authorization' : 'Bearer 3|kHg1Af40ugAHycMm1kJsFdZp2jchfYuioIwcMyNs',
    //       'Content-Type' : 'application/json',
    //       'Accept' : 'application/json',
    //   }
    // })
    // .then(function (response) {
    //     // handle success
    //     for(var i in response.data.data){
        
    //         const doc = {
    //             _type: 'company',
    //             title: response.data.data[i].raison_sociale,
    //             statut: response.data.data[i].statut_juridique,
    //             gerant: response.data.data[i].gerants.name,
    //             activite: response.data.data[i].activite.activite,
    //             code: response.data.data[i].activite.code,
    //             division: response.data.data[i].activite.division,
    //             code_postal: response.data.data[i].adresse.code_postal,
    //             rue: response.data.data[i].adresse.rue,
    //             ville: response.data.data[i].adresse.ville,
    //             email: response.data.data[i].contact.email,
    //             fax: response.data.data[i].contact.fax,
    //             telephone: response.data.data[i].contact.telephone
    //         }
            
    //         console.log(doc)
    //         client.create(doc)
    //     }
    // })
    // .catch(function (error) {
    //     // handle error
    //     console.log(error);
    // });
  //}



  return (
        <Layout>
          <div data-homeWrapper >
            <div data-gridHome>
              {company.map((item, i) =>
              <Link to={`/entreprise/${item.node.title}`}>
                <div data-item>
                  <img src="" alt={`logo de ${item.node.title}`} width="200" />
                  <h3> {item.node.title} </h3>
                </div>
              </Link>
              )}
            </div>
          </div>
        </Layout>
  );
};

export default IndexPage;
