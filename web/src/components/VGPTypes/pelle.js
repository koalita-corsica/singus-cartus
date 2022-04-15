import React, {useEffect, useState} from 'react';
const sanityClient = require('@sanity/client');
const axios = require('axios');
const client = sanityClient({
    projectId: 'zpdf06rn',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: 'skflP6VREyww0KCEsp6XZK8USpHNIFroYmGqvcri4wLr5JCMnTCU96fJgSVoesY18AcM2QTijCTmmXJefiChEobCy9PMIf7iUhLuEg2mA2XnlygVrJcjsCSf1hfuUFlV13HZDlZi7tZ1XuwiAALB5kn5ITWpRsdBAyiYiNWxkVDTAMHARMEI',
})

const Pelle = () => {
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
                        <summary> Groupe de puissance </summary>
                        <div>
                            <label for="huileH"> Niveaux (huile moteur et hydr./liqu refroidissement) </label>
                            <select name="huileH">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="huileH">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="protectionT"> Protection des parties tournantes (courroies, hélices) </label>
                            <select name="protectionT">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="protectionT">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="radiateurs"> Radiateurs (état général, fuites, colmatages…) </label>
                            <select name="radiateurs">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="radiateurs">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="pompes"> Pompes (fuites, racordements hydrauliques) </label>
                            <select name="pompes">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="pompes">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="distributeur"> Distributeurs (rac. Elec et hydr, fuites…) </label>
                            <select name="distributeur">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="distributeur">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="jointT"> Joint tournant (état, étanchéité) </label>
                            <select name="jointT">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="jointT">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="reservoir"> Réservoirs (déformations, fuites, état des bouchons) </label>
                            <select name="reservoir">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="reservoir">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="echapp"> Sortie échappement (protégée ou inccessible) </label>
                            <select name="echapp">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="echapp">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="batt"> Batteries et coupe-batterie (état et fixations) </label>
                            <select name="batt">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="batt">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="capotages"> Capotages (fixations, fermetures, dispositif calage) </label>
                            <select name="capotages">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="capotages">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="isolation"> Isolations phoniques des capots moteurs </label>
                            <select name="isolation">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="isolation">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-fifth>
                    <details>
                        <summary> Chassis </summary>
                        <div>
                            <label for="soudures"> Mécano soudures et boulonnerie (fissure, oxydation) </label>
                            <select name="soudures">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="soudures">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="contrepoids"> Fixatrion contrepoids </label>
                            <select name="contrepoids">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="contrepoids">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="stab"> Stabilisateurs (patins, vérins, fixations, clapets) </label>
                            <select name="stab">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="stab">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="adver"> Avecrtissement de zones dangereuses </label>
                            <select name="adver">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="adver">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="flexPro"> Protection des flexibles à moins d'un mètre de l'opérateur </label>
                            <select name="flexPro">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="flexPro">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-sixth>
                    <details>
                        <summary> Transmission </summary>
                        <div>
                            <label for="moteurs"> Moterus de translation et réducteurs </label>
                            <select name="moteurs">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="moteurs">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="raccord"> Raccordements hydrauliques </label>
                            <select name="raccord">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="raccord">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="pdc"> Ponts - différentiels - cadrans </label>
                            <select name="pdc">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="pdc">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-seventh>
                    <details>
                        <summary> Train Porteur </summary>
                        <div>
                            <label for="pneusU"> Pneumatiques et jantes (usure, entailles sur flanc) </label>
                            <select name="pneusU">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="pneusU">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="verinsU"> Vérins de direction (fixations, fuites…) </label>
                            <select name="verinsU">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="verinsU">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="cpg"> Chaînes - Patin - Glaets </label>
                            <select name="cpg">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="cpg">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="rbt"> Roues folles - Barbotins - Tension de chaînes </label>
                            <select name="rbt">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="rbt">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-eight>
                    <details>
                        <summary> Organe de préhension (fourche, pince, godet, BRH…)  </summary>
                        <div>
                            <label for="mecanoS"> Mécano-soudures - etat général - usure </label>
                            <select name="mecanoS">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="mecanoS">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="aab"> Articulations - axes - bagues </label>
                            <select name="aab">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="aab">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="raccH"> Raccordements hydrauliques </label>
                            <select name="raccH">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="raccH">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="fixOutil"> Fixation de l'outil </label>
                            <select name="fixOutil">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="fixOutil">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="attRapide"> Attache rapide (état, fonctionnement) </label>
                            <select name="attRapide">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="attRapide">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="verRapide"> Vérouillage attache rapide </label>
                            <select name="verRapide">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="verRapide">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-nineth>
                    <details>
                        <summary> Poste de conduite </summary>
                        <div>
                            <label for="accesPC"> Accès (marchepieds, poignées, garde-coprs) </label>
                            <select name="accesPC">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="accesPC">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="rops"> Structure ROPS/FOPS (présence, état…) </label>
                            <select name="rops">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="rops">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="cabine"> Cabine (état, vitre…) </label>
                            <select name="cabine">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="cabine">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="siege"> Siège (état, réglages, fixations…) </label>
                            <select name="siege">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="siege">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="ceinture"> Ceinture de sécurité </label>
                            <select name="ceinture">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="ceinture">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="essuie"> Essuie-glaces, lave-glaces </label>
                            <select name="essuie">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="essuie">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="retro"> Rétroviseurs </label>
                            <select name="retro">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="retro">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="issue"> Issue de secours </label>
                            <select name="issue">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="issue">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="eclaiRoute"> Eclairage de route/travail et gyrophare </label>
                            <select name="eclaiRoute">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="eclaiRoute">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="avertS"> Avertisseur sonore (klaxon, bip de recul…) </label>
                            <select name="avertS">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="avertS">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="foncReperage"> Fonctionnement et repérage des commandes </label>
                            <select name="foncReperage">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="foncReperage">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="tabBord"> Tableau de bord </label>
                            <select name="tabBord">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="tabBord">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="camTravail"> Caméra/écran de travail </label>
                            <select name="camTravail">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="camTravail">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="contactCle"> Contacteur à clé (immobilité au démarrage et à l'arrêt) </label>
                            <select name="contactCle">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="contactCle">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-tenth>
                    <details>
                        <summary> Dispositifs règlementaires </summary>
                        <div>
                            <label for="equipIncendie"> Equipements contre l'incendie </label>
                            <select name="equipIncendie">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="equipIncendie">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="dateEquip"> Si oui : date de la dernière vérification annuelle </label>
                            <input name="dateEquip" type='date'></input>
                        </div>
                        <div>
                            <label for="abaqueC"> Abaque(s) de charge (CMU = . Kg) </label>
                            <select name="abaqueC">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="abaqueC">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="indiDevers"> Indicateurs de dévers </label>
                            <select name="indiDevers">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="indiDevers">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="indiAcou"> Indication puissance acoustique </label>
                            <select name="indiAcou">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="indiAcou">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="valdB"> Valeur mesurée au décibel mètre : </label>
                            <input type="number" name="valdB" />
                        </div>
                        <div>
                            <label for="dispoPreh"> Dispositif de préhension de l'engin (pour manutention) </label>
                            <select name="dispoPreh">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="dispoPreh">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="dispositifImmo"> Dispositifs d'immobilisation de la machine en cas d'incident (arrêt d'urgence à chaque poste de commande) </label>
                            <select name="dispositifImmo">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="dispositifImmo">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-eleventh>
                    <details>
                        <summary> Tourelle (R 4324-2à3,16à20,28,40,41) </summary>
                        <div>
                            <label for="trEtat"> Etat général </label>
                            <select name="trEtat">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="trEtat">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="trEmbase"> Embase (soudure, couronne d'orientation) </label>
                            <select name="trEmbase">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="trEmbase">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="trDanger"> Signalisation des zones dangereuses </label>
                            <select name="trDanger">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="trDanger">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="trArret"> Arrêt d'urgence (coupe batterie) </label>
                            <select name="trArret">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="trArret">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="trPression"> Dispositif d'annulation de pression residuelle dans le circuit hydraulique </label>
                            <select name="trPression">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="trPression">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="trFrein"> Frein de tourelle </label>
                            <select name="trFrein">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="trFrein">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="trSysFrein"> Fonctionnement des différents systèmes de freinage </label>
                            <select name="trSysFrein">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="trSysFrein">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="trDispBloc"> Dispositif de blocage tourelle en position transport </label>
                            <select name="trDispBloc">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="trDispBloc">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-twelfth>
                    <details>
                        <summary> Godet (R4324-28) </summary>
                        <div>
                            <label for="gdEtat"> Etat fénérale du godet avant et/ou arrière </label>
                            <select name="gdEtat">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="gdEtat">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="gdClap"> Fonctionnement des clapets de sécurité </label>
                            <select name="gdClap">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="gdClap">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="gdLing"> Présence des linguets de sécurité sur les crochets </label>
                            <select name="gdLing">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="gdLing">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="gdVerins"> Vérins (fixations, fuites, clapets, barre de blocage) </label>
                            <select name="gdVerins">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="gdVerins">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="gdVerin"> Vérin de godet </label>
                            <select name="gdVerin">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="gdVerin">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-thirteenth>
                    <details>
                        <summary> Essais de functionement </summary>
                        <div>
                            <label for="demarrage"> Sécurité de démarrage </label>
                            <select name="demarrage">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="demarrage">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="dispMort"> Dispositif "homme mort" </label>
                            <select name="dispMort">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="dispMort">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="contactSiege"> Contacteur de siège </label>
                            <select name="contactSiege">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="contactSiege">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="comDir"> Commande de direction </label>
                            <select name="comDir">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="comDir">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="dirSecours"> Direction de secours (suivant capacité) </label>
                            <select name="dirSecours">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="dirSecours">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="freinService"> Frein de service </label>
                            <select name="freinService">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="freinService">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="freinParc"> Frein de parc / Frein de secours </label>
                            <select name="freinParc">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="freinParc">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-fourteenth>
                    <details>
                        <summary> Essais Recommande </summary>
                        <div>
                            <label for="essay"> Essaus en charge (uniquement pour les équipements de levage de charges équipés de clapets </label>
                            <select name="essay">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="essay">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="essayCharge"> Charge d'essai mise à disposition :  . Kg  . m </label>
                            <input type="text" name="essayCharge" />
                        </div>
                        <div>
                            <label for="essaiF"> Essai de fonctionnement (bruit, à-coups, vibrations…) </label>
                            <select name="essaiF">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="essaiF">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="foncCharge"> Fonctionnement des dispositifs de retenue de charge </label>
                            <select name="foncCharge">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="foncCharge">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="reglageLimit"> Réglage de l'indicateur / limiteur de charge </label>
                            <select name="reglageLimit">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="reglageLimit">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="advertSurcharge"> Fonctionnement de l'avertisseur de surcharge </label>
                            <select name="advertSurcharge">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="advertSurcharge">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="essaiMant"> Essai de maintien de charge (étanchéité du circuit hydr.) </label>
                            <select name="essaiMant">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="essaiMant">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="fuiteVerin"> Si descente de charge exessive, inidiquer le verins où se situe la fuite </label>
                            <p> Vérin de </p> <input name="fuiteVerin" type="text" />
                        </div>
                    </details>
                </div>
                <div data-fifteenth>
                    <details>
                        <summary> Essais recommandes mais pas obligatoire </summary>
                        <div>
                            <label for="epreuve"> Epreuve dynamique (CMU + 10% ou valeur constructeur; 15mn recommandation VGP) </label>
                            <select name="epreuve">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="epreuve">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <p> Charge d'éssai : …..     Kg à une distance mesurée de : …… </p>
                        <div>
                        <label for="surcharge"> Est-ce que les dispositifs de limitation de la surcharge se sont déclenchés </label>
                        <select name="surcharge">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="dispSecurite"> Est-ce que les dispositifs de sécurité du maintien de la charge fonctionnent </label>
                        <select name="dispSecurite">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    </details>
                </div>
            </div>
        </div>
     );
}

export default Pelle; 