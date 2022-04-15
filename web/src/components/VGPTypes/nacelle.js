import React, {useEffect, useState} from 'react';
const sanityClient = require('@sanity/client');
const axios = require('axios');
const client = sanityClient({
    projectId: 'zpdf06rn',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: 'skflP6VREyww0KCEsp6XZK8USpHNIFroYmGqvcri4wLr5JCMnTCU96fJgSVoesY18AcM2QTijCTmmXJefiChEobCy9PMIf7iUhLuEg2mA2XnlygVrJcjsCSf1hfuUFlV13HZDlZi7tZ1XuwiAALB5kn5ITWpRsdBAyiYiNWxkVDTAMHARMEI',
})

const Nacelle = (props) => {

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
        <div data-nacelleWrapper>
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
                        <summary> Chassis </summary>
                        <div>
                            <label for="pneus"> Etat des pneumatiuques </label>
                            <select name="pneus">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="pneus">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="jantes"> Etat des jantes </label>
                            <select name="jantes">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="jantes">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="Stablisateur"> Stablisateur </label>
                            <select name="Stablisateur">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="Stablisateur">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="verinDirection"> Vérins de direction </label>
                            <select name="verinDirection">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="verinDirection">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="exteStabilisateurs"> Extension des stabilisateurs </label>
                            <select name="exteStabilisateurs">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="exteStabilisateurs">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="staStabilisateurs"> Vérrouillage des stabilisateurs </label>
                            <select name="staStabilisateurs">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="staStabilisateurs">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="contrepoids"> Contrepoids </label>
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
                            <label for="soudures"> Mécano soudures </label>
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
                    </details>
                </div>
                <div data-fifth>
                    <details>
                        <summary> Groupe de puissance </summary>
                        <div>
                            <label for="huileH"> Niveau huile hydraulique </label>
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
                            <label for="filtreHuileH"> Filtre à huile hydraulique </label>
                            <select name="filtreHuileH">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="filtreHuileH">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="huileM"> Niveau huile moteur </label>
                            <select name="huileM">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="huileM">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="liquideR"> Liquide de refroidissement </label>
                            <select name="liquideR">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="liquideR">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="batteries"> Batteries </label>
                            <select name="batteries">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="batteries">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="cBatteries"> Coupe batteries </label>
                            <select name="cBatteries">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="cBatteries">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="distributeurs"> Distributeurs </label>
                            <select name="distributeurs">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="distributeurs">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="flexibles"> Tuyauterie et flexibles </label>
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
                            <label for="faisceaux"> faisceaux électriques </label>
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
                            <label for="capotages"> Capotages : Protections </label>
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
                    </details>
                </div>
                <div data-sisxth>
                    <details>
                        <summary> Poste de commande châssis </summary>
                        <div>
                            <label for="acces"> Accès </label>
                            <select name="acces">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="acces">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="fLeviers"> Fonctionnement des leviers </label>
                            <select name="fLevier">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="fLevier">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="rCommandes"> Repérage des commandes </label>
                            <select name="rCommandes">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="rCommandes">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="interrupteurs"> Interrupteurs verouillable </label>
                            <select name="interrupteurs">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="interrupteurs">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="poste"> Selecteur poste de commande (bas/nacelle)* </label>
                            <select name="poste">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="poste">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="arret"> Arrêt d'urgence </label>
                            <select name="arret">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="arret">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="protectFlexibles"> Protection des flexibles à moins d'un mètre de l'opérateur </label>
                            <select name="protectFlexibles">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="protectFlexibles">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-seventh>
                    <details>
                        <summary> Dispositif de secours prioritaire </summary>
                        <div>
                            <label for="pompe"> Pompe manuelle </label>
                            <select name="pompe">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="pompe">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="puissanceS"> Groupe de puissance secondaire </label>
                            <select name="puissanceS">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="puissanceS">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="instructions"> Instructions d'utilisation </label>
                            <select name="instructions">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="instructions">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-eighth>
                    <details>
                        <summary> Structure extensible </summary>
                        <div>
                            <label for="tourelle"> Jeu rotation tourelle </label>
                            <select name="tourelle">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="tourelle">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="bras"> Etat des bras </label>
                            <select name="bras">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="bras">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="soudures"> Mécano soudures </label>
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
                            <label for="axes"> Axes </label>
                            <select name="axes">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="axes">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="arrets"> Fixation arrêts d'axes </label>
                            <select name="arrets">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="arrets">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="telescope"> Cales de téléscope </label>
                            <select name="telescope">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="telescope">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="verinsS"> Vérins et clapets de sécurité </label>
                            <select name="verinsS">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="verinsS">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="flexs"> Tuyauteries et flexibles </label>
                            <select name="flexs">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="flexs">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-ninth>
                    <details>
                        <summary> Plate-forme de travail </summary>
                        <div>
                            <label for="arrestsA"> Fixation arrêts d'axes </label>
                            <select name="arrestsA">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="arrestsA">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="plateAcces"> Accès </label>
                            <select name="plateAcces">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="plateAcces">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="gardeCorps"> Garde-corps </label>
                            <select name="gardeCorps">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="gardeCorps">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="FGardeCorps"> Fermeture garde-corps </label>
                            <select name="FGardeCorps">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="FGardeCorps">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="plancher"> Plancher et plinthe </label>
                            <select name="plancher">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="plancher">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="extincteur"> Emplacement extincteur </label>
                            <select name="extincteur">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="extincteur">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-tenth>
                    <details>
                        <summary> Poste de commande plate-forme de travail </summary>
                        <div>
                            <label for="posteAcces"> Accès </label>
                            <select name="posteAcces">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="posteAcces">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="posteLeviers"> Fonctionnement des leviers </label>
                            <select name="posteLeviers">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="posteLeviers">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="reperageC"> Repérage des commandes </label>
                            <select name="reperageC">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="reperageC">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="pedale"> Pédale homme-mort </label>
                            <select name="pedale">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="pedale">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="etat"> Etat général (déformations, articulations…) </label>
                            <select name="etat">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="etat">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="arretU"> Arrêt d'urgence </label>
                            <select name="arretU">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="arretU">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-eleventh>
                    <details>
                        <summary> Dispositif de sécurité et avertisseurs </summary>
                        <div>
                            <label for="devers"> Détecteurs de dévers (6° ou valeur constructeur) </label>
                            <select name="devers">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="devers">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="limit"> Limiteur de charge </label>
                            <select name="limit">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="limit">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="hauterL"> Hauteur > à 18 mètres, anéomètre obligatoire* </label>
                            <select name="hauterL">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="hauterL">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-twelfth>
                    <details>
                        <summary> Interdictions de mouvement </summary>
                        <div>
                            <label for="stabilisateurD"> Plate-forme avec stabilisateurs non déployés </label>
                            <select name="stabilisateurD">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="stabilisateurD">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="stabilisateurT"> Stabilisateurs avec plate-forme en position de travail </label>
                            <select name="stabilisateurT">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="stabilisateurT">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="pemp"> Déplacement PEMP avec stabilisateurs déployés </label>
                            <select name="pemp">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="pemp">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="vitessePT"> Grande vitesse avec plate-forme en position travail </label>
                            <select name="vitessePT">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="vitessePT">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="surcharge"> Indicateur de surcharge (lumineux et/ou sonore) </label>
                            <select name="surcharge">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="surcharge">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-thirteenth>
                    <details>
                        <summary> Dispositif optionnels </summary>
                        <div>
                            <label for="indicStab"> Indicateurs de position stabilisateurs et grue repliés </label>
                            <select name="indicStab">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="indicStab">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="indicBras"> Indicateur de bras principal replié </label>
                            <select name="indicBras">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="indicBras">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="eclairageT"> Eclairage de travail </label>
                            <select name="eclairageT">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="eclairageT">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-fourtheenth>
                    <details>
                        <summary> Signaletique </summary>
                        <div>
                            <label for="plaqueC"> Plaque de charge </label>
                            <select name="plaqueC">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="plaqueC">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="consignes"> Consignes de sécurité, à chaque poste de commande </label>
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
                            <label for="plaqueCo"> Plaque constructeur </label>
                            <select name="plaqueCo">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="plaqueCo">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="pictoAD"> Pictogramme avertissement </label>
                            <select name="pictoAD">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="pictoAD">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
                <div data-fifteenth>
                    <details>
                        <summary> Examens </summary>
                        <p> Recommandé mais pas obligatoire dans le cas d'une VGP </p>
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
                <div data-sixteenth>
                    <details>
                        <summary> Essai de fonctionnement </summary>
                        <div>
                            <label for="structE"> Structure extensible </label>
                            <select name="structE">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="structE">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="freinsF"> Freins </label>
                            <select name="freinsF">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="freinsF">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="directionF"> Direction </label>
                            <select name="directionF">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="directionF">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="limiteursP"> Limiteurs de pression </label>
                            <select name="limiteursP">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="limiteursP">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="eclairageF"> Eclairage </label>
                            <select name="eclairageF">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="eclairageF">
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

export default Nacelle;