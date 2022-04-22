import React, {useEffect, useState} from 'react';
const sanityClient = require('@sanity/client');
const axios = require('axios');
const client = sanityClient({
    projectId: 'zpdf06rn',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: 'skflP6VREyww0KCEsp6XZK8USpHNIFroYmGqvcri4wLr5JCMnTCU96fJgSVoesY18AcM2QTijCTmmXJefiChEobCy9PMIf7iUhLuEg2mA2XnlygVrJcjsCSf1hfuUFlV13HZDlZi7tZ1XuwiAALB5kn5ITWpRsdBAyiYiNWxkVDTAMHARMEI',
})

const Hayon = () => {
    let log = console.log;

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    let today = year + "/" + month + "/" + day;
    let prochaine = (year + 1) + "/" + month + "/" + day;

    const [date, setDate] = useState(today)
    const [nClient, setNClient] = useState("")
    const [nRapport, setNRapport] = useState("")
    const [nControle, setNControle] = useState("")
    const [prochaineVerif, setProchaineVerif] = useState(prochaine)
    const [typeService, setTypeService] = useState("")
    const [certificat, setCertificat] = useState("")
    const [manuel, setManuel] = useState("")
    const [rapports, setRapports] = useState("")
    const [carnet, setCarnet] = useState("")
    const [registre, setRegistre] = useState("")


    return ( 
        <div data-pelleWrapper>
            <div data-form>
                <div data-first>
                <details>
                    <summary> Infos Rapport </summary>
                        <p> Date: <span> {date} </span> </p>
                        <p> Nº Client <span> {nClient} </span> </p>
                        <p> Nº Controle <span> {nControle} </span> </p>
                        <p> Prochaine verification {prochaineVerif}  </p>
                    </details>
                </div>
                <div data-second>
                    <details>
                    <summary> Type de verification </summary>
                        <label for="type"> Type de Verification </label>
                        <select name="type" onChange={(event) => setTypeService(event.target.value)}>
                            <option value="miseEnService"> Vérification de mise en service </option>
                            <option value="periodique"> Vérification Générale Périodique VGP (Article R4323-23,24,25,26,27) </option>
                            <option value="remiseEnService"> Vérification de remise en service </option>
                        </select>
                    </details>
                </div>
                <div data-third>
                <details>
                    <summary> DOCUMENT OBLIGATOIRE REMPLI ET FOURNI </summary>
                    <div>
                        <label for="certificat"> Certifcat de conformité + épreuve de mise en service </label>
                        <select name="certificat" onChange={(event) => setCertificat(event.target.value)}>
                            <option> Choisir </option>
                            <option value="oui"> Oui </option>
                            <option value="non"> Non </option>
                        </select>
                    </div>
                    <div>
                        <label for="manuel"> Manuel d’Utilisation (Art. R4323-1 du C.T.) </label>
                        <select name="manuel" onChange={(event) => setManuel(event.target.value)}>
                            <option> Choisir </option>
                            <option value="oui"> Oui </option>
                            <option value="non"> Non </option>
                        </select>
                    </div>
                    <div>
                        <label for="rapports"> Rapport(s) de vérification précédent’s) (Art L4711-1 du C.T.) </label>
                        <select name="rapports" onChange={(event) => setRapports(event.target.value)}>
                            <option> Choisir </option>
                            <option value="oui"> Oui </option>
                            <option value="non"> Non </option>
                        </select>
                    </div>
                    <div>
                        <label for="carnet"> Carnet de Maintenance (ArtR4323-19,20 du C.T.) </label>
                        <select name="carnet" onChange={(event) => setCarnet(event.target.value)}>
                            <option> Choisir </option>
                            <option value="oui"> Oui </option>
                            <option value="non"> Non </option>
                        </select>
                    </div>
                    <div>
                        <label for="registre"> Registre de sécurité (Art. R.4323-26, 27 du C.T.) </label>
                        <select name="registre" onChange={(event) => setRegistre(event.target.value)}>
                            <option> Choisir </option>
                            <option value="oui"> Oui </option>
                            <option value="non"> Non </option>
                        </select>
                    </div>
                </details>
                </div>
                <div data-fourth>
                    <details>
                        <summary> Charpentes/Mécanismes </summary>
                        <div>
                            <label for="oxy"> Oxydation </label>
                            <select name="oxy">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="oxy">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="eSoudures"> Etat des soudures </label>
                            <select name="eSoudures">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="eSoudures">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="ossature"> Ossature déformée </label>
                            <select name="ossature">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="ossature">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="plateau"> Plateau déformé </label>
                            <select name="plateau">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="plateau">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="flexibles"> Etat des flexibles </label>
                            <select name="flexibles">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="flexibles">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="fonctionement"> Fonctionnement </label>
                            <select name="fonctionement">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="fonctionement">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="faisceaux"> Etat des faisceaux electriques </label>
                            <select name="faisceaux">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="faisceaux">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="signalisation"> Signalisation de la plate-forme </label>
                            <select name="signalisation">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="signalisation">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="vRoute"> Verrouillage route </label>
                            <select name="vRoute">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="vRoute">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-fifth>
                    <details>
                        <summary> Poste de commande principal </summary>
                        <div>
                            <label for="emplacement"> Emplacement </label>
                            <select name="emplacement">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="emplacement">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="eclairage"> Eclairage du poste de commande </label>
                            <select name="eclairage">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="eclairage">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="consignes"> Consignes de sécurité </label>
                            <select name="consignes">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="consignes">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="cBatterie"> Coupe batterie </label>
                            <select name="cBatterie">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="cBatterie">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="fusible"> Fusible </label>
                            <select name="fusible">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="fusible">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="selecInt"> Selecteur int/ext (commande intérieure) </label>
                            <select name="selecInt">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="selecInt">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="selecDeux"> Selecteur de commnde de deux mains </label>
                            <select name="selecDeux">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="selecDeux">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="commande"> Commande privative </label>
                            <select name="commande">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="commande">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-sixth>
                    <details>
                        <summary> Circuits Electriques </summary>
                        <div>
                            <label for="fusiblePuissance"> Fusible sur circuit de puissance (125A-150A-175A-200A) </label>
                            <select name="fusiblePuissance">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="fusiblePuissance">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="protectionCircuit"> Protection contre les defaillance du circuit hydraulique </label>
                            <select name="protectionCircuit">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="protectionCircuit">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="limitPression"> Limiteur de pression (limiteur de charge) </label>
                            <select name="limitPression">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="limitPression">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="rDebit"> Régulateur de débit (vitesse de descente) </label>
                            <select name="rDebit">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="rDebit">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="maintien"> Maintien à l'arrêt clapet de sécurité (électovalve) </label>
                            <select name="maintien">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="maintien">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="blocage"> Blocage des charges roulantes </label>
                            <select name="blocage">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="blocage">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-seventh>
                    <details>
                        <summary> Signalisation </summary>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default Hayon;