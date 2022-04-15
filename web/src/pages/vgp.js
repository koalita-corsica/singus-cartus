import React, {useEffect, useState} from 'react';
import Layout from "../components/layout";
const sanityClient = require('@sanity/client');
const axios = require('axios');
const client = sanityClient({
    projectId: 'zpdf06rn',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: 'skflP6VREyww0KCEsp6XZK8USpHNIFroYmGqvcri4wLr5JCMnTCU96fJgSVoesY18AcM2QTijCTmmXJefiChEobCy9PMIf7iUhLuEg2mA2XnlygVrJcjsCSf1hfuUFlV13HZDlZi7tZ1XuwiAALB5kn5ITWpRsdBAyiYiNWxkVDTAMHARMEI',
})


const VGP = (props) => {
    let log = console.log;

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    let newdate = year + "/" + month + "/" + day;

    const [date, setDate] = useState(newdate)
    const [nClient, setNClient] = useState("")
    const [nRapport, setNRapport] = useState("")
    const [nControle, setNControle] = useState("")
    const [typeService, setTypeService] = useState("")

    useEffect(() => {
        setTimeout(getDataCompany(), 2000)
    })

    const getDataCompany = async () => {
        axios.get('https://api.dev.evrpro.com/societes/1', {
            headers: {
                'Authorization' : 'Bearer 3|kHg1Af40ugAHycMm1kJsFdZp2jchfYuioIwcMyNs',
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        })
        .then(function (response) {
            // handle success
            console.log(response.data.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }



    return ( 
        <Layout>
            <div data-vgpWrapper>
                <div data-form>
                    <div data-first>
                    <details>
                        <summary> Infos Rapport </summary>
                            <p> Date: <span> {date} </span> </p>
                        </details>
                    </div>
                </div>
            </div>
        </Layout>
     );
}

export default VGP;