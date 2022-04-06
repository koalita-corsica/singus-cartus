import React, {useEffect, useState} from 'react';
import * as styles from "../components/fichePosteAPI/fiche.css";
import { graphql } from "gatsby";
import { useForm } from "react-hook-form";
import fire from "../assets/fire.png";
import secours from "../assets/secours.png";
import logo from "../assets/logo.png";
import qualifi from "../assets/qualifications.png";
import forma from "../assets/formations.png";
const sanityClient = require('@sanity/client');
const axios = require('axios');
const client = sanityClient({
    projectId: 'zpdf06rn',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: 'skflP6VREyww0KCEsp6XZK8USpHNIFroYmGqvcri4wLr5JCMnTCU96fJgSVoesY18AcM2QTijCTmmXJefiChEobCy9PMIf7iUhLuEg2mA2XnlygVrJcjsCSf1hfuUFlV13HZDlZi7tZ1XuwiAALB5kn5ITWpRsdBAyiYiNWxkVDTAMHARMEI',
})

export const query = graphql`
query Pictos {
    allSanityEpis {
      edges {
        node {
          _id
          title
          image {
            asset {
              url
            }
          }
        }
      }
    }
    allSanityPictosD {
        edges {
          node {
            title
            _id
            picto {
              asset {
                url
              }
            }
          }
        }
      }
      allSanityPictosI {
        edges {
          node {
            title
            _id
            picto {
              asset {
                url
              }
            }
          }
        }
      }
      allSanityPictosO {
        edges {
          node {
            title
            _id
            picto {
              asset {
                url
              }
            }
          }
        }
      }
      allSanityCompany {
        edges {
          node {
            _id
            id
            title
          }
        }
      }
  }
`

const FichePoste = (props) => {
    let log = console.log;
    let data = props.data.allSanityEpis.edges
    let dangers = props.data.allSanityPictosD.edges
    let interdictions = props.data.allSanityPictosI.edges
    let obligations = props.data.allSanityPictosO.edges
    let companys = props.data.allSanityCompany.edges;
    const { register, handleSubmit } = useForm();



    const [version, setVersion ] = useState("")
    const [slug, setSlug ] = useState("")
    const [entreprise, setEntreprise ] = useState("")
    const [entrepriseId, setEntrepriseId] = useState("VuN4qDX3jQKM1aB3VsAAjY")
    const [fiche, setFiche] = useState("")
    const [machine, setMachine] = useState("")
    const [machineCat, setMachineCat] = useState("")
    const [caractMachine, setCaractMachine] = useState("")
    const [materials, setMaterials] = useState("")
    const [date, setDate] = useState("")
    const [type, setType] = useState("")
    const [legend, setLegend] = useState([]);
    const [epiData, setEpiData] = useState([]);
    const [epiPreview, setEpiPreview] = useState([]);
    const [dangersData, setDangersData] = useState([]);
    const [dangersPreview, setDangersPreview] = useState([]);
    const [interdictionsData, setInterdictionsData] = useState([]);
    const [interdictionsPreview, setInterdictionsPreview] = useState([]);
    const [taches, setTaches] = useState([])
    const [tachesPreview, setTachesPreview] = useState([])
    const [risquesData, setRisquesData] = useState([])
    const [risquesPreview, setRisquesPreview] = useState([]);
    const [qui, setQui] = useState("")
    const [quelle, setQuelle] = useState("")
    const [quand, setQuand] = useState("")
    const [formation, setFormation] = useState("")
    const [qualifications, setQualifications] = useState("")
    const [imageID, setImageID] = useState("")
    const [tachesPicto, setTachesPicto] = useState([])
    const [tachesPictoPreview, setTachesPictoPreview] = useState([])
    const [clicks, setClicks] = useState(1)

    var tache2 = tachesPreview.slice(0,3);
    var tache0 = tachesPreview.slice(2,9);

    useEffect(() => {
        setTimeout(getDataCompany(), 2000)
        
    })

    const getDataCompany = async () => {
        // requette pour les infos de la Entreprise
        axios.get('https://api.dev.evrpro.com/societes/1', {
            headers: {
                'Authorization' : 'Bearer 3|kHg1Af40ugAHycMm1kJsFdZp2jchfYuioIwcMyNs',
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
            }
        })
        .then(function (response) {
            // handle success
            // console.log(response.data.data)
            setEntreprise(response.data.data.raison_sociale)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }

    
    // const getDataMachines = async () => {
    //     // requette pour les infos de la Entreprise
    //     axios.get('https://api.dev.evrpro.com/societes/1/engins', {
    //         headers: {
    //             'Authorization' : 'Bearer 3|kHg1Af40ugAHycMm1kJsFdZp2jchfYuioIwcMyNs',
    //             'Content-Type' : 'application/json',
    //             'Accept' : 'application/json',
    //         }
    //     })
    //     .then(function (response) {
    //         // handle success
    //         // console.log(response.data.data[0])
    //         setMachine(response.data.data[0].nom)
    //         setMachineCat(response.data.data[0].marque)
    //         setDate(response.data.data[0].date_mise_en_circulation)
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     });
    // }

    function draw(e) {
        var canvas = document.getElementById('imageCanvas'); 
        var ctx = canvas.getContext("2d");
        var pos = getCursorPosition(canvas, e);
        var clickX = pos.x;
        var clickY = pos.y;
        
        ctx.fillStyle = "#ff2626"; // Red color
        ctx.beginPath();
        ctx.arc(clickX, clickY, 15, 0, Math.PI * 2, true);
        ctx.fill();
  
        ctx.font = "10pt Calibri";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(clicks, clickX, clickY + 3);
        setClicks(clicks+1)
    }

    function getCursorPosition(canvas, e) {
        // Gets click position
        let rect = canvas.getBoundingClientRect();
        
        
        return {
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top
        };
    }


    function handleSubmit1() {

        const doc = {
            _type: 'fichesAPI',
            version: version,
            fichedeposte: fiche,
            slug: `${entreprise}/${fiche}`,
            entreprise: {
                _type: 'reference',
                _ref: entrepriseId,
            },
            miseenservice: date,
            machine: machine,
            marque: machineCat,
            caract: caractMachine,
            produits: materials,
            type: type,
            legend: legend,
            tache: taches,
            qualifications: qualifications,
            formation: formation
        }

        client.create(doc).then((res) => {
            console.log(`Doc was created, document ID is ${res._id}`)

            var canvas = document.getElementById('imageCanvas');
            
            canvas.toBlob(uploadImageBlob, 'image/png')



            epiData.map((item, i) => {
                client
                .patch(res._id)
                .setIfMissing({epi: []})
                .insert('after', 'epi[-1]', [{_key: (i+1), _ref: item}])
                .commit({autoGenerateArrayKeys: true,})
            })
            
            dangersData.map((item, i) => {
                client
                .patch(res._id)
                .setIfMissing({risquesD: []})
                .insert('after', 'risquesD[-1]', [{_key: (i+1), _ref: item}])
                .commit({autoGenerateArrayKeys: true,})
            })

            interdictionsData.map((item, i) => {
                client
                .patch(res._id)
                .setIfMissing({interdiction: []})
                .insert('after', 'interdiction[-1]', [{_key: (i+1), _ref: item}])
                .commit({autoGenerateArrayKeys: true,})
            })
        

            function uploadImageBlob(blob) {
                client.assets
                  .upload('image', blob, {contentType: 'image/png', filename: 'someText.png'})
                  .then((imageAsset) => {
                    console.log('The image was uploaded!', document)
                    return client.patch(res._id)
                    .set({
                        ogImage: {
                          _type: 'image',
                          asset: {
                            _type: "reference",
                            _ref: imageAsset._id
                          }
                        }
                      })
                      .commit()
                  })
                  .catch((error) => {
                    console.error('Upload failed:', error.message)
                  })
              }

          })

    }    

    function handleImage(event){
        var canvas = document.getElementById('imageCanvas');
        var ctx = canvas.getContext('2d');
        var reader = new FileReader();
        reader.onload = function(event){
            var img = new Image();
            img.onload = function(){
                if (document.getElementById("typeImage").value == "horizontal") {
                    canvas.width = 196;
                    canvas.height = 130;
                } else {
                    canvas.height = 231;
                }
                ctx.drawImage(img,0,0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);     
    }

    function actionLegend() {
        setLegend(legend => [...legend, document.getElementById("legend").value])
        document.getElementById("legend").value = ""
    }

    function actionEPI(item) {
        if(!epiData.includes(item.node.id)) {
            setEpiData(epiData => [...epiData, item.node._id])
            setEpiPreview(epiPreview => [...epiPreview, item.node.image.asset.url])
        } else {
            epiData.splice(epiData.indexOf(item.node._id), 1); 
            epiPreview.splice(epiPreview.indexOf(item.node.image.asset.url), 1); 
        }
    }

    function actionDanger(item) {
        if(!dangersData.includes(item.node.id)) {
            setDangersData(dangersData => [...dangersData, item.node._id])
            setDangersPreview(dangersPreview => [...dangersPreview, item.node.picto.asset.url])
        } else {
            dangersData.splice(dangersData.indexOf(item.node._id), 1); 
            dangersPreview.splice(dangersPreview.indexOf(item.node.picto.asset.url), 1); 
        }
    }

    function actionInterdiction(item) {
        if(!interdictionsData.includes(item.node.id)) {
            setInterdictionsData(interdictionsData => [...interdictionsData, item.node._id])
            setInterdictionsPreview(interdictionsPreview => [...interdictionsPreview, item.node.picto.asset.url])
        } else {
            interdictionsData.splice(interdictionsData.indexOf(item.node._id), 1); 
            interdictionsPreview.splice(interdictionsPreview.indexOf(item.node.picto.asset.url), 1); 
        }
    }

    function helperTache(item) {
        if(!tachesPicto.includes(item.node.id)) {
            setTachesPicto(tachesPicto => [...tachesPicto, {"_key": 1, "_ref": item.node._id}])
            setTachesPictoPreview(tachesPictoPreview => [...tachesPictoPreview, item.node.picto.asset.url])
        } else {
            tachesPicto.splice(tachesPicto.indexOf(item.node._id), 1); 
            tachesPictoPreview.splice(tachesPictoPreview.indexOf(item.node.picto.asset.url), 1); 
        }
    }

    function actionTache() {
        setTaches(taches => [...taches, {"quand": document.getElementById("quand").value, "quelle": document.getElementById("quelle").value, "qui": document.getElementById("qui").value, "mesures": document.getElementById("mesure").value, "risques": tachesPicto}]);
        setTachesPreview(tachesPreview => [...tachesPreview, {"quand": document.getElementById("quand").value, "quelle": document.getElementById("quelle").value, "qui": document.getElementById("qui").value, "mesures": document.getElementById("mesure").value, "risques": tachesPictoPreview}]);

    }


    return (
        <>
            <h1> Fiche de Poste</h1>
            <div data-ficheContainer>
                <div data-form>
                    <div data-version>
                        <label for="version"> Version </label>
                        <input name="version" type="text" onChange={(event) => setVersion(event.target.value)}/>
                    </div>                    
                    <div data-fiche>
                        <label for="fiche"> Nom de la Fiche </label>
                        <input name="fiche" type="text" onChange={(event) => setFiche(event.target.value)}/>
                    </div>
                    <div data-machineF>
                        <label for="machine"> Machine </label>
                        <input name="machine" type="text" onChange={(event) => setMachine(event.target.value)}/>
                    </div>
                    <div data-typeMachine>
                        <label for="typeMachine"> Marque/type </label>
                        <input name="typeMachine" type="text" onChange={(event) => setMachineCat(event.target.value)}/>
                    </div>
                    <div data-caract>
                        <label for="caract"> Caractéristiques principales de la machine </label>
                        <input name="caract" type="text" onChange={(event) => setCaractMachine(event.target.value)}/>
                    </div>
                    <div data-materials>
                        <label for="materials"> Produits ou matériaux à utiliser </label>
                        <input name="materials" type="text" onChange={(event) => setMaterials(event.target.value)}/>
                    </div>
                    <div data-date>
                        <label for="date"> Date de mise en service </label>
                        <input name="date" type="date" onChange={(event) => setDate(event.target.value)}/>
                    </div>
                    <div data-typeImage>
                        <label for="type"> Type d'image </label>
                        <select name="select" id="typeImage" onChange={(event) => setType(event.target.value)}>
                            <option value="horizontal">Horizontal 196x130</option>
                            <option value="vertical">Vertical 231</option>
                        </select>
                    </div>
                    <div data-image>
                        <input type="file" name="image" onChange={(e) => handleImage(e)}/>
                    </div>
                    <div data-legend>
                        <label for="legend"> Legend </label>
                        <input name="legend" type="text" id="legend" />
                        <button onClick={actionLegend}> add </button>
                    </div>
                    <div data-epi>
                        <details>
                            <summary> Pictos EPI </summary>
                        {data.map((item, i) => 
                        <>
                            <input type="checkbox" id={item.node.title} name={item.node.title} value={item.node.image.asset.url} onClick={() => actionEPI(item)} />
                            <label for={item.node.title}> <img src={item.node.image.asset.url} width="50" /> </label>
                        </>
                        )}
                        </details>
                    </div>
                    <div data-dangers>
                        <details>
                            <summary> Pictos Dangers </summary>
                        {dangers.map((item, i) => 
                        <>
                            <input type="checkbox" id={item.node.title} name={item.node.title} value={item.node.picto.asset.url} onClick={() => actionDanger(item)} />
                            <label for={item.node.title}> <img src={item.node.picto.asset.url} width="50" /> </label>
                        </>
                        )}
                        {obligations.map((item, i) => 
                        <>
                            <input type="checkbox" id={item.node.title} name={item.node.title} value={item.node.picto.asset.url} onClick={() => actionDanger(item)} />
                            <label for={item.node.title}> <img src={item.node.picto.asset.url} width="50" /> </label>
                        </>
                        )}
                        </details>
                    </div>
                    <div data-interdictions>
                        <details>
                            <summary> Pictos Interdiction </summary>
                        {interdictions.map((item, i) => 
                        <>
                            <input type="checkbox" id={item.node.title} name={item.node.title} value={item.node.picto.asset.url} onClick={() => actionInterdiction(item)} />
                            <label for={item.node.title}> <img src={item.node.picto.asset.url} width="50" /> </label>
                        </>
                        )}
                        </details>
                    </div>
                    <div data-taches>
                        <label for="quand"> Quand </label>
                        <input name="quand" type="text" id="quand" />
                        <label for="quelle"> Quelle </label>
                        <input name="quelle" type="text" id="quelle" />
                        <label for="qui"> Qui </label>
                        <input name="qui" type="text" id="qui" />
                        <details>
                            <summary> Pictos pour les taches </summary>
                            {dangers.map((item, i) => 
                            <>
                                <input type="checkbox"  value={item.node.picto.asset.url} onClick={() => helperTache(item)}/>
                                <label for={item.node.title}> <img src={item.node.picto.asset.url} width="50" /> </label>
                            </>
                            )}
                            {obligations.map((item, i) => 
                            <>
                                <input type="checkbox" value={item.node.picto.asset.url} onClick={() => helperTache(item)}/>
                                <label for={item.node.title}> <img src={item.node.picto.asset.url} width="50" /> </label>
                            </>
                            )}
                            {interdictions.map((item, i) => 
                            <>
                                <input type="checkbox"  value={item.node.picto.asset.url} onClick={() => helperTache(item)}/>
                                <label for={item.node.title}> <img src={item.node.picto.asset.url} width="50" /> </label>
                            </>
                            )}
                        </details>
                        <label for="mesure"> Mesure </label>
                        <input name="mesure" type="text" id="mesure" />
                        <button onClick={actionTache}> add </button>
                    </div>
                    <div data-qualifica>
                        <label for="qualif"> Qualifications </label>
                        <input name="qualif" type="text" onChange={(event) => setQualifications(event.target.value)}/>
                    </div>
                    <div data-forma>
                        <label for="forma"> Formation obligatoire </label>
                        <input name="forma" type="text" onChange={(event) => setFormation(event.target.value)}/>
                    </div>
                </div>
                <div data-fichePreview>
                    <input
                        type="button"
                        value="Télécharger le pdf"
                        onClick={() => window.print()}
                        className={styles.button1}
                    />
                    <div data-capture id={styles.capture}>
                        <div data-container className={styles.container}>
                            <div data-headerF>
                                <div data-headerContF>
                                <h2 style={{padding: '1rem'}}> Fiche de Sécurité Au Poste </h2>
                                <div style={{display: 'flex', justifyContent: 'space-around', padding: '-1rem'}}>
                                    <div data-line2h>
                                    <h6> Version n° / date <span> {version} </span> </h6>
                                    </div>
                                    <h3 style={{margin: '0', textAlign: 'center', padding: '1rem', textTransform: 'Uppercase', fontSize: '27px', marginTop: '-1rem'}}> {machine} </h3>
                                    <div data-entre>
                                    <span> {entreprise } </span>
                                    {entreprise != null ?
                                    <img data-img alt="logo entreprise" width="60"/>
                                    :
                                    <>
                                    </>
                                    }
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div data-contentF>
                        <div data-gray />
                        {type && type == "horizontal" ?
                        <div data-machine>
                            <div data-specs>
                                <p> Machine : <span> {machine} </span> </p>
                                <p> Marque - Type : <span> {machineCat} </span> </p>
                                <p>
                                Caractéristiques principales :
                                <span> {caractMachine} </span>
                                </p>
                                <p>
                                Date de mise en service : <span> {date} </span>
                                </p>
                                <p>
                                Produits ou matériaux à utiliser : <span> {materials} </span>
                                </p>
                            </div>
                            <div data-bar/>
                            <div data-rsec>
                                <canvas id="imageCanvas" onClick={(e) => draw(e)}/>
                                <div data-legend>
                                    {legend != null ? legend.map((item, i) =>
                                        <div data-number={`${i+1}`}> {item} </div>
                                    ): ''}
                                </div>
                            </div>
                        </div>
                        :
                        <div data-machinev>
                            <div data-specsv>
                                <p> Machine : <span> {machine} </span> </p>
                                <p> Marque/Type : <span> {machineCat} </span> </p>
                                <p>
                                Caractéristiques principales:
                                <span> {caractMachine} </span>
                                </p>
                                <p>
                                Date de mise en service : <span> {date} </span>
                                </p>
                                <p>
                                Produits ou matériaux à utiliser : <span> {materials} </span>
                                </p>
                            </div>
                            <div data-barv/>
                            <div data-rsecv>
                                <div style={{alignItems: 'flex-start'}} data-legendv>
                                    {legend != null ? legend.map((item, i) =>
                                        <div data-number={`${i+1}`}> {item} </div>
                                    ): ''}
                                </div>
                                <canvas style={{margin: '0', marginLeft: '3rem', marginRight: '1rem'}} id="imageCanvas" onClick={(e) => draw(e)} />
                            </div>
                        </div>
                        }
                        <div data-iconsP>
                            <div data-epi>
                                <h5> EPI obligatoires </h5>
                                {epiPreview.map((item) =>
                                    <img src={item} alt=""/>
                                )}
                            </div>
                            <div data-risquesD>
                                <h5> Dangers - Obligations </h5>
                                {dangersPreview.map((item) =>
                                    <img src={item} alt=""/>
                                )}
                            </div>
                            <div data-inter1>
                                <h5> Interdictions </h5>
                                {interdictionsPreview.map((item) =>
                                    <img src={item} alt=""/>
                                )}
                            </div>
                        </div>
                        <div data-grid>
                            <div class={styles.empty1} />
                            <div class={styles.headerg}>
                                <p>Tâche exposant <br />l’opérateur à un risque</p>
                            </div>
                            <div class={styles.headerm}>
                                <p>Dangers - Obligations</p>
                            </div>
                            <div class={styles.headerd}>
                                <p>Mesures de prévention - Opérations ou procédures à respecter</p>
                            </div>
                            <div class={styles.empty2} />
                            {tache2.map((item, i) =>
                                i % 2 == 0 ?
                            <>
                                {log(item)}
                                <div style={{background: '#E5E5E5'}} class={styles.empty} data-odd id={`${i+1}`} />
                                <div style={{background: '#E5E5E5'}} data-g="data-g" data-odd>
                                    <ul style={{background: '#E5E5E5'}}>
                                        {item.quand && (<li style={{fontWeigth: 'bold'}}> {item.quand} </li> )}
                                        {item.quelle && (<li> {item.quelle} </li> )}
                                        {item.qui && (<li> {item.qui} </li> )}
                                    </ul>
                                </div>
                                <div style={{background: '#E5E5E5'}} data-m="data-m" data-odd id={`${i+1}`}>
                                    {item.risques.map((imag) =>
                                        <img src={imag} alt="" height="44"/>
                                    )}
                                </div>
                                <div style={{background: '#E5E5E5'}} data-d="data-d" data-odd id={`${i+1}`}>
                                    <p> {item.mesures} </p>
                                </div>
                                <div style={{background: '#E5E5E5'}} class={styles.empty} data-odd id={`${i+1}`}></div >
                            </>
                            :
                            <>
                                <div class={styles.empty} data-odd id={`${i+1}`} />
                                <div data-g="data-g" data-odd>
                                    <ul>
                                        {item.quand && (<li style={{fontWeigth: 'bold'}}> {item.quand} </li> )}
                                        {item.quelle && (<li> {item.quelle} </li> )}
                                        {item.qui && (<li> {item.qui} </li> )}
                                    </ul>
                                </div>
                                <div data-m="data-m" data-odd id={`${i+1}`}>
                                    {item.risques.map((imag) =>
                                        <img src={imag} alt="" height="44"/>
                                    )}
                                </div>
                                <div data-d="data-d" data-odd id={`${i+1}`}>
                                    <p> {item.mesures} </p>
                                </div>
                                <div class={styles.empty} data-odd id={`${i+1}`} />
                            </>
                            )}
                        </div>
                        {taches && taches.length > 3 ?
                            <>
                        <div data-footer/>
                        <div data-page2 id="page2">
                            <div data-header>
                            <div data-headerCont>
                                <h6> Version n° / date <span> {version} </span> </h6>
                                <h4> Fiche de Sécurité Au Poste </h4>
                                <h6> Entreprise <span> {entreprise.name} </span> </h6>
                            </div>
                            </div>
                            <div data-grid1>
                            <div class={styles.empty1}> </div>
                            <div class={styles.headerg}>
                                <p>Tâche exposant <br />l’opérateur à un risque</p>
                            </div>
                            <div class={styles.headerm}>
                                <p>Dangers - Obligations</p>
                            </div>
                            <div class={styles.headerd}>
                                <p>Mesures de prévention - Opérations ou procédures à respecter</p>
                            </div>
                            <div class={styles.empty2}></div>
                            {tache0.map((item, i) =>
                            i % 2 == 0 ?
                            <>
                            <div style={{background: '#E5E5E5'}} class={styles.empty} data-odd id={`${i+1}`}></div>
                                <div style={{background: '#E5E5E5'}} data-g="data-g" data-odd>
                                <ul style={{background: '#E5E5E5'}}>
                                    {item.quand && (<li style={{fontWeigth: 'bold'}}> {item.quand} </li> )}
                                    {item.quelle && (<li> {item.quelle} </li> )}
                                    {item.qui && (<li> {item.qui} </li> )}
                                </ul>
                                </div>
                                <div style={{background: '#E5E5E5'}} data-m="data-m" data-odd id={`${i+1}`}>
                                {item.risques.map((imag) =>
                                    <img src={imag} alt="" height="44"/>
                                )}
                                </div>
                                <div style={{background: '#E5E5E5'}} data-d="data-d" data-odd id={`${i+1}`}>
                                    <p> {item.mesures} </p>
                                </div>
                                <div style={{background: '#E5E5E5'}} class={styles.empty} data-odd id={`${i+1}`}></div >
                            </>
                            :
                            <>
                            <div class={styles.empty} data-odd id={`${i+1}`}></div>
                                <div data-g="data-g" data-odd>
                                <ul>
                                {item.quand && (<li style={{fontWeigth: 'bold'}}> {item.quand} </li> )}
                                {item.quelle && (<li> {item.quelle} </li> )}
                                {item.qui && (<li> {item.qui} </li> )}
                                </ul>
                                </div>
                                <div data-m="data-m" data-odd id={`${i+1}`}>
                                {item.risques.map((imag) =>
                                    <img src={imag} alt="" height="44"/>
                                )}
                                </div>
                                <div data-d="data-d" data-odd id={`${i+1}`}>
                                    <p> {item.mesures} </p>
                                </div>
                                <div class={styles.empty} data-odd id={`${i+1}`}></div >
                            </>
                            )}
                            </div>
                            <div data-footer2>
                            <div data-fflex>
                            <div data-qualif>
                                <img src={qualifi} style={{color: 'white', fontSize: '35px', borderRight: '1px solid white', marginLeft: '15px', marginRight: '10px', paddingRight: '10px'}} width="29px"/>
                                <div data-qualit>
                                <h3> Qualification et autorisation </h3>
                                <p> {qualifications != null ? qualifications : ''} </p>
                                </div>
                            </div>
                            <div data-formatf>
                                <img src={forma} style={{color: 'white', fontSize: '35px', borderRight: '1px solid white', marginLeft: '15px', marginRight: '10px', paddingRight: '10px'}} width="29px"/>
                                <div data-formatt>
                                <h3> Formations </h3>
                                <p> {formation != null ? formation : ''} </p>
                                </div>
                            </div>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <div data-secours>
                                <img src={secours} width="48px" height="48px"/>
                                <div data-secourst>
                                    <h3> En cas d’accident, alerter un secouriste du travail. </h3>
                                    <p>n° tél SAMU : 15 </p>
                                </div>
                                </div>
                                <div data-incend>
                                <img src={fire} width="48px" height="48px"/>
                                <div data-incendt>
                                <h3> En cas d’incendie, alerter le responsable. </h3>
                                <p>n° tél pompiers : 18 </p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </>
                        :
                        <div data-footer2>
                            <div data-fflex>
                            <div data-qualif>
                            <img src={qualifi} style={{color: 'white', fontSize: '35px', borderRight: '1px solid white', marginLeft: '15px', marginRight: '10px', paddingRight: '10px'}} width="29px"/>
                            <div data-qualit>
                                <h3> Qualification et autorisation </h3>
                                <p> {qualifications} </p>
                            </div>
                            </div>
                            <div data-formatf>
                            <img src={forma} style={{color: 'white', fontSize: '35px', borderRight: '1px solid white', marginLeft: '15px', marginRight: '10px', paddingRight: '10px'}} width="29px"/>
                            <div data-formatt>
                                <h3> Formations </h3>
                                <p> {formation} </p>
                            </div>
                            </div>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <div data-secours>
                                <img src={secours} width="48px" height="48px"/>
                                <div data-secourst>
                                <h3> En cas d’accident, alerter un secouriste du travail. </h3>
                                <p>n° tél SAMU : <span style={{color: 'white', fontSize: '18px'}}> 15 </span> </p>
                                </div>
                            </div>
                            <div data-incend>
                            <img src={fire} width="48px" height="48px"/>
                            <div data-incendt>
                                <h3> En cas d’incendie, alerter le responsable. </h3>
                                <p>n° tél pompiers : <span style={{color: 'white', fontSize: '18px'}}> 18 </span> </p>
                            </div>
                            </div>
                            </div>
                            <img style={{marginLeft: '44rem'}} src={logo} width="70" />
                        </div>
                        }
                    </div>
                </div>
            </div>
            <button onClick={handleSubmit1}> Save </button>
        </div>
        </> 
     );
}

export default FichePoste;



