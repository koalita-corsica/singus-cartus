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
          <div className={styles.first}>
            <div className={styles.fwrapper}>
              <img src={logo} alt="" />
            </div>
            <div className={styles.ftxt}>
                <p>
                  Version nº/date: <span> {version} </span>
                </p>
                <p className={styles.fiche}>
                  Fiche de Poste: <span> {fichedeposte} </span>
                </p>
                <p>
                  Entreprise: <span> {entreprise.name} </span>
                </p>
              </div>
          </div>
          <div className={styles.containerDeux}>
          <img src={ogImage.asset.url} alt=""  />
            <div className={styles.second}>
            <div className={styles.specs}>
                <p> Machine: <span> {machine} </span> </p>
                <p> Marque/Type: <span> {marque} </span> </p>
                <p>
                  Caractéristiques principales de la machine:{" "}
                  <span> {caract} </span>
                </p>
                <p>
                  Date de mise en service : <span> {miseenservice} </span>
                </p>
                <p>
                  Produits ou matériaux à utiliser: <span> {produits} </span>
                </p>
              </div>
                <div className={styles.machine}>
                  <div className={styles.bar} />
                  <div className={styles.txt}>
                    {legend4.map((item) => (
                      <p> {item} </p>
                    ))}
                  </div>
                  <div className={styles.txt}>
                    {legend8 && legend8.length != 0 ?
                      legend8.map((item) => (
                      <p className={styles.txt1} > {item} </p>
                    )) : ''}
                  </div>
                  <div className={styles.txt}>
                    {legend12 && legend12.length != 0 ?
                      legend12.map((item) => (
                      <p className={styles.txt1} > {item} </p>
                    )) : ''}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.containerTrois}>
              <div className={styles.epi}>
                <h2> EPI Obligatoires </h2>
                {epi.map((item) =>
                  <img src={item.image.asset.url} alt="" width="50" height="50"/>
                )}
              </div>
              <div className={styles.inter}>
                <h2> Interdictions </h2>
                {interdiction.map((item) =>
                  <img src={item.image.asset.url} alt="" width="50" height="50"/>
                )}
              </div>
            </div>
            <div className={styles.containerQuatre}>
            
            </div>
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
