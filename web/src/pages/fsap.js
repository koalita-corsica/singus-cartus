import React from 'react';
import Layout from "../components/layout"
import { graphql, Link } from "gatsby";
import * as styles from "../styles/fsap.css";
import { BsSearch } from 'react-icons/bs';
import { AiOutlineArrowRight } from "react-icons/ai"
import { AiOutlinePlus } from "react-icons/ai"
import Previous from '../components/previous/previous';


const FSAP = () => {

    const data = typeof window !== "undefined" && window.history.state.fiches.edges
    const entreprise = typeof window !== "undefined" && window.history.state.entreprise
    

     return ( 
        <Layout>
            <Previous />
            <div data-fsapWrapper>
                <h2>{entreprise.title} : Fiche de sécurité au poste </h2>
                <div data-fsapGrid>
                    {data && data != null ?
                    <>
                    {data.map((item, i) =>
                        <div data-item>
                            <Link to={`/fichesdeposteAPI/${item.node.slug}`} >
                            <div data-main>
                                <p> Nom : {item.node.fichedeposte} </p> 
                                <p> Version/Date : {item.node.version} </p>
                            </div>
                            </Link>
                            <div data-icons1>
                                <Link data-search to={`/fichesdeposteAPI/${item.node.slug}`} >
                                    <BsSearch style={{cursor: 'pointer', transform: 'scale(1.1)'}}/>
                                </Link>
                                <AiOutlineArrowRight style={{cursor: 'pointer'}}/>
                            </div>
                        </div>
                    )}
                    </>
                    :
                    ""
                    }
                    <Link to="/create-fichePoste" 
                        state={{data: entreprise}}
                    >
                        <div data-create>
                            <AiOutlinePlus style={{fontSize: '70px'}} />
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
      );
 }
 
 export default FSAP;