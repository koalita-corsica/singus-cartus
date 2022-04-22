import React from 'react';
import Layout from '../components/layout';
import * as styles from "../styles/fsap.css";
import { BsSearch } from 'react-icons/bs';
import { FaDownload } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
import { AiOutlineArrowRight } from "react-icons/ai"
import { AiOutlinePlus } from "react-icons/ai"
import {Link} from "gatsby";

const ListLivret = () => {
    let log = console.log;

    const entreprise = window.history.state.entreprise
    const data = window.history.state.livrets.edges


    log(window.history.state.livrets)

    return ( 
        <Layout>
            <div data-fsapWrapper>
                <h1> Livret/{entreprise.title} </h1>
                <div data-fsapGrid> 
                        {data.map((item, i) =>
                                <div data-item>
                                    <div data-main>
                                        <p> Nom {item.node.title.title} </p> 
                                    </div>
                                    <div data-icons1>
                                        <Link data-search to={`/livretAPI/${item.node.title.title}`} >
                                            <BsSearch style={{cursor: 'pointer', transform: 'scale(1.1)'}}/>
                                        </Link>
                                        <AiOutlineArrowRight style={{cursor: 'pointer', transform: 'scale(1.1)'}}/>
                                    </div>
                                </div>
                        )}
                        <Link to="/create-livret" 
                        state={{data: window.history.state.entreprise}}
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

export default ListLivret;