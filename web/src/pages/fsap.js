import React from 'react';
import Layout from "../components/layout"
import { graphql, Link } from "gatsby";
import * as styles from "../styles/fsap.css";
import { BsSearch } from 'react-icons/bs';
import { FaDownload } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
import { AiOutlineArrowRight } from "react-icons/ai"
import { AiOutlinePlus } from "react-icons/ai"




export const query = graphql`
  query FSAP {
    allSanityFiches(filter: {entreprise: {_id: {eq: "0027faf8-7533-4dff-a7ff-61b5612bdd99"}}}) {
        edges {
          node {
            id
            fichedeposte
            version
            slug {
                current
            }
            entreprise {
                name
              }
          }
        }
      }
  }
`;

const FSAP = (props) => {
    let log = console.log;
    let data = props.data.allSanityFiches.edges; 

    log(data)

     return ( 
        <Layout>
            <div data-fsapWrapper>
                <h2> FSAP/{data[0].node.entreprise.name} </h2>
                <div data-fsapGrid>
                    {data.map((item, i) =>
                        <Link to={`/fichesdeposte/${item.node.slug.current}`} >
                        <div data-item>
                            <div data-main>
                                <p> Nom {item.node.fichedeposte} </p> 
                                <p> Version/Date {item.node.version} </p>
                            </div>
                            <div data-icons1>
                                <BsSearch style={{cursor: 'pointer', transform: 'scale(1.1)'}}/>
                                <FaDownload style={{cursor: 'pointer', transform: 'scale(1.1)'}}/>
                                <FaTrashAlt style={{cursor: 'pointer', transform: 'scale(1.1)', color: 'black'}}/>
                                <AiOutlineArrowRight style={{cursor: 'pointer', transform: 'scale(1.1)'}}/>
                            </div>
                        </div>
                        </Link>
                    )}
                    <Link to="/fichePoste" >
                        <div data-item>
                            <AiOutlinePlus style={{fontSize: '70px'}} />
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
      );
 }
 
 export default FSAP;