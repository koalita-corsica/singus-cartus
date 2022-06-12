import React from 'react';
import * as styles from "./header.css"
// import { BiExit } from "@react-icons/all-files/Bi"


const Header = () => {
    return ( 
        <>
        <div data-header>
        <div>
            Bonjour <span data-username>Davif Gibert</span>
        </div>
        <div>
            EvrPro - Gestion des documents clients
        </div>
        <div data-logout>
            <a href="#">
                Déconnexion
                {/* <BiExit style={{fontSize: '30px'}} /> */}
            </a>
        </div>
        </div>
        </>
     );
}

export default Header;