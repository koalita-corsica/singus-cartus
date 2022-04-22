import React, {useEffect, useState} from 'react';
import Layout from "../components/layout";
import ChariotElevateur from '../components/VGPTypes/chariotElevateur';
import Nacelle from '../components/VGPTypes/nacelle';
import Pelle from '../components/VGPTypes/pelle';
import Hayon from '../components/VGPTypes/hayon';
const sanityClient = require('@sanity/client');
const axios = require('axios');
const client = sanityClient({
    projectId: 'zpdf06rn',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: 'skflP6VREyww0KCEsp6XZK8USpHNIFroYmGqvcri4wLr5JCMnTCU96fJgSVoesY18AcM2QTijCTmmXJefiChEobCy9PMIf7iUhLuEg2mA2XnlygVrJcjsCSf1hfuUFlV13HZDlZi7tZ1XuwiAALB5kn5ITWpRsdBAyiYiNWxkVDTAMHARMEI',
})


const VGP = (props) => {
    
    const [type, setType] = useState("")

    return ( 
        <Layout>
            <select onChange={(e) => setType(e.target.value)}> 
                <option> Type de controlle </option>
                <option value="chariot"> Chariot Elevateur </option>
                <option value="nacelle"> Nacelle </option>
                <option value="pelle"> Pelle </option>
                <option value="hayon"> Hayon Elevateur </option>
            </select>
            {type == "chariot" ?
                <ChariotElevateur />
                :
                <>
                    {type == "nacelle"
                    ?
                    <Nacelle />
                    :
                    <>
                    {type == "pelle"
                    ?
                        <>
                            <Pelle />
                        </>
                        :
                        <>
                        {type == "hayon" ?
                            <>
                            <Hayon />
                            </>
                        :
                        <>
                        </>
                        }
                        </>
                    }
                    </>
                    }
                </>
                
            }
        </Layout>
     );
}

export default VGP;