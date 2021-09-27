/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import * as styles from "./fiche.module.css";
import React from "react";

import fire from "../assets/fire.jpg";
import secours from "../assets/secours.png";
import { jsPDF } from "jspdf";
import logo from "../assets/logo.png";

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

  console.log(tache2)

  function getPDF() {
    var doc = new jsPDF("p", "pt", [780, 1127]);
    doc.html(document.querySelector("#capture"), {
      callback: function (pdf) {
        pdf.save("fichedeposte" + `${slug.current.toString()}` + ".pdf");
      },
    });
    alert("Le download va commencer!");
  }

  return (
    <React.Fragment>
      <input
        type="button"
        value="SAVE TO PDF"
        onClick={getPDF}
        className={styles.button1}
      />
      <div id="capture">
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
          <div data-machine>
          <div data-specs>
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
            <div data-bar/>
              <div data-rsec>
                <img src={ogImage.asset.url} alt="" width="196" height="130"/>
                <div data-legend>
                {legend.map((item) =>
                  <p> {item} </p>
                )}
                </div>
            </div>
          </div>
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
            {tache2.map((item) =>
            <>
            <div class={styles.empty} data-odd="data-odd"></div>
              <div data-g="data-g" data-odd="data-odd">
                <ul>
                  {item.quand && (<li> <span>Quand ?</span><br/> {item.quand} </li> )}
                  {item.quelle && (<li> <span>Quelle tache?</span><br/> {item.quelle} </li> )}
                  {item.qui && (<li> <span> Par qui? </span><br/>{item.qui} </li> )}
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
          <div data-footer />
          </div>
        </div>
      <input
        type="button"
        value="SAVE TO PDF"
        onClick={getPDF}
        className={styles.button1}
      />
    </React.Fragment>
  );
};

export default Fiche;
