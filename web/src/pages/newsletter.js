import React from 'react';
import Layout from '../components/layout';
import {graphql, Link} from "gatsby";
import * as styles from "../styles/fsap.css";
import { BsSearch } from 'react-icons/bs';
import { AiOutlineArrowRight } from "react-icons/ai"
import { AiOutlinePlus } from "react-icons/ai"



export const query = graphql`
query MyQuery123 {
    allSanityNewsletterApi {
      edges {
        node {
          titleNewsLetter
          slug
        }
      }
    }
  }
`


const Newsletter = (props) => {
    let log = console.log;
    let data = props.data.allSanityNewsletterApi.edges;

    log(data)

     return ( 
         <Layout>
              <div data-fsapWrapper>
                <h2> Newsletter </h2>
                <div data-fsapGrid>
                    {data.map((item, i) =>
                        <div data-item>
                            <div data-main>
                                <p> Nom {item.node.titleNewsLetter} </p> 
                            </div>
                            <div data-icons1>
                                <Link data-search to={`/newsletterAPI/${item.node.slug}`} >
                                    <BsSearch style={{cursor: 'pointer', transform: 'scale(1.1)'}}/>
                                </Link>
                                <AiOutlineArrowRight style={{cursor: 'pointer', transform: 'scale(1.1)'}}/>
                            </div>
                        </div>
                    )}
                    <Link to="/create-newsletter" >
                        <div data-item>
                            <AiOutlinePlus style={{fontSize: '70px'}} />
                        </div>
                    </Link>
                </div>
            </div>
         </Layout>
      );
 }
 
 export default Newsletter;