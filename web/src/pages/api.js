import React, { useEffect } from "react";
import company from "../../../studio/schemas/documents/company";
const sanityClient = require('@sanity/client');
const axios = require('axios');
const client = sanityClient({
    projectId: 'zpdf06rn',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: 'skflP6VREyww0KCEsp6XZK8USpHNIFroYmGqvcri4wLr5JCMnTCU96fJgSVoesY18AcM2QTijCTmmXJefiChEobCy9PMIf7iUhLuEg2mA2XnlygVrJcjsCSf1hfuUFlV13HZDlZi7tZ1XuwiAALB5kn5ITWpRsdBAyiYiNWxkVDTAMHARMEI',
})

const API = props => {

    axios.get('https://api.dev.evrpro.com/societes', {
        headers: {
            'Authorization' : 'Bearer 3|kHg1Af40ugAHycMm1kJsFdZp2jchfYuioIwcMyNs',
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
        }
    })
    .then(function (response) {
        // handle success


        for(var i in response.data.data){

            const doc = {
                id: response.data.data[i].id,
                _type: 'company',
                title: response.data.data[i].raison_sociale,
                statut: response.data.data[i].statut_juridique,
                gerant: response.data.data[i].gerants.name,
                activite: response.data.data[i].activite.activite,
                code: response.data.data[i].activite.code,
                division: response.data.data[i].activite.division,
                code_postal: response.data.data[i].adresse.code_postal,
                rue: response.data.data[i].adresse.rue,
                ville: response.data.data[i].adresse.ville,
                email: response.data.data[i].contact.email,
                fax: response.data.data[i].contact.fax,
                telephone: response.data.data[i].contact.telephone
            }
            
            
            client.create(doc).then((res) => {
                console.log(`Doc was created, document ID is ${res._id}`)
            })
            
        }

        console.log(response.data.data)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });

    // axios.get('https://api.dev.evrpro.com/societes/1/engins', {
    //     headers: {
    //         'Authorization' : 'Bearer 3|kHg1Af40ugAHycMm1kJsFdZp2jchfYuioIwcMyNs',
    //         'Content-Type' : 'application/json',
    //         'Accept' : 'application/json',
    //     }
    // })
    // .then(function (response) {
    //     console.log(response)
    // });
        


    return (  
        <>
            <h1> API PAGE </h1>
        </>
    );
}

export default API;