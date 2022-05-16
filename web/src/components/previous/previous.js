import React from 'react';
import { navigate } from "gatsby";
import * as Styles from "./previous.css"


const Previous = () => {
    return ( 
            <button data-previous onClick={() => navigate(-1)}>&lt; Retour</button>
     );
}

export default Previous;