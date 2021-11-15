/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import * as styles from "./fiche.module.css";
import React from "react";

import fire from "../assets/fire.png";
import secours from "../assets/secours.png";
import logo from "../assets/logo.png";
import qualifi from "../assets/qualifications.png";
import forma from "../assets/formations.png";
import { GiDiploma } from 'react-icons/gi';
import html2canvas from "html2canvas";
import $ from "jquery";

const Fiche = (props) => {
  const {
    slug,
    version,
    fichedeposte,
    entreprise,
    machine,
    marque,
    caract,
    miseenservice,
    produits,
    type,
    ogImage,
    legend,
    epi,
    tache,
    qualifications,
    formation,
    interdiction,
  } = props;

  var legend4 = legend.slice(0, 4)
  var legend8 = legend.slice(4, 8)
  var legend12 = legend.slice(8, 12)

  var tache2 = tache.slice(0,2);
  var tache0 = tache.slice(2,9);


  return (
    <React.Fragment>
      <input
        type="button"
        value="Télécharger le pdf"
        onClick={() => window.print()}
        className={styles.button1}
      />
      <div id={styles.capture}>
        <div className={styles.container}>
          <div data-header>
            <img src={logo} alt="Logo EvRPro" height="50"/>
            <div data-headerCont>
              <h6> Version n° / date <span> {version} </span> </h6>
              <h4> Fiche de Sécurité Au Poste </h4>
              <h6> Entreprise <span> {entreprise.name} </span> </h6>
            </div>
          </div>
          <div data-gray> </div>
          {type && type == "horizontal" ?
          <div data-machine>
          <div data-specs>
              <p> Machine : <span> {machine} </span> </p>
              <p> Marque - Type : <span> {marque} </span> </p>
              <p>
                Caractéristiques principales :
                <span> {caract} </span>
              </p>
              <p>
                Date de mise en service : <span> {miseenservice} </span>
              </p>
              <p>
                Produits ou matériaux à utiliser : <span> {produits} </span>
              </p>
            </div>
            <div data-bar/>
              <div data-rsec>
                <img src={ogImage.asset.url} alt="" width="196" height="130"/>
                <div data-legend>
                {legend.map((item, i) =>
                  <div data-number={`${i+1}`}> {item} </div>
                )}
                </div>
            </div>
          </div>
          :
          <div data-machinev>
          <div data-specsv>
              <p> Machine: <span> {machine} </span> </p>
              <p> Marque/Type: <span> {marque} </span> </p>
              <p>
                Caractéristiques principales:
                <span> {caract} </span>
              </p>
              <p>
                Date de mise en service : <span> {miseenservice} </span>
              </p>
              <p>
                Produits ou matériaux à utiliser: <span> {produits} </span>
              </p>
            </div>
            <div data-barv/>
              <div data-rsecv>
              <div style={{alignItems: 'flex-start'}} data-legendv>
              {legend.map((item, i) =>
                <div data-number={`${i+1}`}> {item} </div>
              )}
              </div>
                <img style={{margin: '0', marginTop: '-3rem', marginLeft: '3.5rem'}} src={ogImage.asset.url} alt="" height="231"/>
            </div>
          </div>
          }
          <div data-icons>
            <div data-obli>
            <h3> EPI obligatoires </h3>
              {epi.map((item) =>
                <img src={item.image.asset.url} alt="" width="55" height="55"/>
              )}
            </div>
            <div data-inter>
            <h3> Interdictions </h3>
              {interdiction.map((item) =>
                <img src={item.image.asset.url} alt="" width="55" height="55"/>
              )}
            </div>
          </div>
          <div data-grid>
            <div class={styles.empty1}> </div>
            <div class={styles.headerg}>
              <p>Tâche exposant <br />l’opérateur à un risque</p>
            </div>
            <div class={styles.headerm}>
              <p>Risques - Dangers</p>
            </div>
            <div class={styles.headerd}>
              <p>Mesures de prévention - Opérations ou procédures à respecter</p>
            </div>
            <div class={styles.empty2}></div>
            {tache2.map((item, i) =>
            <>
            <div class={styles.empty} data-odd id={`${i+1}`}></div>
              <div data-g="data-g" data-odd>
                <ul>
                  {item.quand && (<li> <span>Quand ?</span><br/> {item.quand} </li> )}
                  {item.quelle && (<li> <span>Quelle tache ?</span><br/> {item.quelle} </li> )}
                  {item.qui && (<li> <span> Par qui ? </span><br/>{item.qui} </li> )}
                </ul>
              </div>
                <div data-m="data-m" data-odd id={`${i+1}`}>
                {item.risques.map((imag) =>
                  <img src={imag.picto.asset.url} alt="" height="44"/>
                )}
                </div>
                <div data-d="data-d" data-odd id={`${i+1}`}>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.</p>
                </div>
                <div class={styles.empty} data-odd id={`${i+1}`}></div >
            </>
            )}
          </div>
          {tache && tache.length != 2 ?
            <>
          <div data-footer/>
          <div data-page2 id="page2">
            <div data-header>
              <img src={logo} alt="Logo EvRPro" height="50"/>
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
                <p>Risques - Dangers</p>
              </div>
              <div class={styles.headerd}>
                <p>Mesures de prévention - Opérations ou procédures à respecter</p>
              </div>
              <div class={styles.empty2}></div>
              {tache0.map((item) =>
              <>
              <div class={styles.empty} data-odd="data-odd"></div>
                <div data-g="data-g" data-odd="data-odd">
                  <ul>
                    {item.quand && (<li> <span>Quand ?</span><br/> {item.quand} </li> )}
                    {item.quelle && (<li> <span>Quelle tache ?</span><br/> {item.quelle} </li> )}
                    {item.qui && (<li> <span> Par qui ? </span><br/>{item.qui} </li> )}
                  </ul>
                </div>
                  <div data-m="data-m" data-odd="data-odd">
                  {item.risques.map((imag) =>
                    <img src={imag.picto.asset.url} alt=""/>
                  )}
                  </div>
                  <div data-d="data-d" data-odd="data-odd">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.</p>
                  </div>
                  <div class={styles.empty} data-odd="data-odd"></div>
              </>
              )}
            </div>
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
        }
          </div>
        </div>
    </React.Fragment>
  );
};

export default Fiche;
