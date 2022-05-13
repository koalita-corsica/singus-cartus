import React from 'react';
import Layout from '../components/layout';
import * as styles from "../styles/fsap.css";
import { BsSearch } from 'react-icons/bs';
import { FaDownload } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
import { AiOutlineArrowRight } from "react-icons/ai"
import { AiOutlinePlus } from "react-icons/ai"
import {Link} from "gatsby";
import Previous from '../components/previous/previous';

const ListLivret = () => {
    let log = console.log;


    const data = typeof window !== "undefined" && window.history.state.livrets.edges
    const entreprise = typeof window !== "undefined" && window.history.state.entreprise


    return ( 
        <Layout>
            <Previous />
            <div data-fsapWrapper>
                <h1> Livret/{entreprise.title} </h1>
                <div data-fsapGrid> 
                {data && data != null ?
                    <>
                    {data.map((item, i) =>
                        <div data-item>
                            <Link to={`/livretAPI/${item.node.slug}`} >
                            <div data-main>
                                <p> Nom : {item.node.title.title} </p> 
                            </div>
                            </Link>
                            <div data-icons1>
                                <Link data-search to={`/livretAPI/${item.node.slug}`} >
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
                        <Link to="/create-livret" 
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

export default ListLivret;