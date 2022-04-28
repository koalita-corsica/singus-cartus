import React from 'react';
import Layout from '../components/layout';
import * as styles from "../styles/fsap.css";
import { BsSearch } from 'react-icons/bs';
import { FaDownload } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
import { AiOutlineArrowRight } from "react-icons/ai"
import { AiOutlinePlus } from "react-icons/ai"
import {Link} from "gatsby";

const Notice = () => {
    let log = console.log;

    const data = typeof window !== "undefined" && window.history.state.notices.edges
    const entreprise = typeof window !== "undefined" && window.history.state.entreprise


    return ( 
        <Layout>
            <div data-fsapWrapper>
                <h1> NOTICE/{entreprise.title} </h1>
                <div data-fsapGrid>
                    {data && data != null ?
                    <>
                        {data.map((item, i) =>
                            <div data-item>
                                <div data-main>
                                    <p> Nom {item.node.fichedeposte} </p> 
                                    <p> Version/Date {item.node.version} </p>
                                </div>
                                <div data-icons1>
                                    <Link data-search to={`/noticeAPI/${item.node.slug}`} >
                                        <BsSearch style={{cursor: 'pointer', transform: 'scale(1.1)'}}/>
                                    </Link>
                                    <AiOutlineArrowRight style={{cursor: 'pointer', transform: 'scale(1.1)'}}/>
                                </div>
                            </div>
                        )}
                        </>
                        :
                            ""
                        }
                        <Link to="/create-ficheChimique" 
                        state={{data: entreprise}}
                        >
                            <div data-item>
                                <AiOutlinePlus style={{fontSize: '70px'}} />
                            </div>
                        </Link>
                </div>
            </div>
        </Layout>
     );
}

export default Notice;