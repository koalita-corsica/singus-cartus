/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import * as styles from "./fiche.module.css";
import React from "react";

import fire from "../assets/fire.jpg";
import secours from "../assets/secours.png";
import { jsPDF } from "jspdf";

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
  } = props;

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
            <p>
              Version nº/date: <span> {version} </span>
            </p>
            <p>
              Fiche de Poste: <span> {fichedeposte} </span>
            </p>
            <p>
              Entreprise: <span> {entreprise.name} </span>
            </p>
          </div>
          <div className={styles.containerDeux}>
            <div className={styles.second}>
              <p> Machine: {machine} </p>
              <p> Marque/Type: {marque} </p>
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
              <div className={styles.txt}>
                {legend.map((item) => (
                  <p> {item} </p>
                ))}
              </div>
              <img src={ogImage.asset.url} alt="" width="250" height="250" />
            </div>
          </div>
          <div className={styles.epi}>
            <p>
              EPI obligatoires <span> ou interdits : </span>{" "}
            </p>
            {epi.map((item) => (
              <img src={item.image.asset.url} alt="" width="80" height="85" />
            ))}
          </div>
          <div className={styles.third}>
            <div className={styles.tache}>
              <h5> Tâche exposant l’opérateur à un risque : </h5>
            </div>
            <div className={styles.picto}>
              <h5> Risques/dangers : </h5>
            </div>
            <div className={styles.mesures}>
              <h5>
                {" "}
                Mesures de prévention/opérations ou procédures à respecter :{" "}
              </h5>
            </div>
            {tache.map(function (object, i) {
              return (
                <React.Fragment>
                  <div className={styles.tache}>
                    <p key={i}>
                      <span>Quand? </span>
                      {object.quand}
                    </p>
                    <p key={i}>
                      <span> Quelle tâche? </span>
                      {object.quelle}
                    </p>
                    {object.qui && (
                      <p key={i}>
                        <span> Par qui? </span>
                        {object.qui}
                      </p>
                    )}
                  </div>
                  <div className={styles.picto}>
                    {object.risques.map(function (element, it) {
                      return (
                        <img
                          key={it}
                          src={element.picto.asset.url}
                          alt=""
                          width="40"
                          height="45"
                        />
                      );
                    })}
                  </div>
                  <div className={styles.mesures}>
                    <p key={i}> {object.mesures} </p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <div className={styles.fourth}>
            <div className={styles.form}>
              <p>Qualification et autorisation :</p>
              {qualifications.map(function (object, i) {
                return (
                  <React.Fragment>
                    <p key={i}> {object} </p>
                  </React.Fragment>
                );
              })}
            </div>
            <div className={styles.form}>
              <p>Formations:</p>
              {formation.map(function (object, i) {
                return (
                  <React.Fragment>
                    <p key={i}> {object} </p>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className={styles.fifth}>
            <p> Secours : </p>
            <div className={styles.fifthcontent}>
              <img src={secours} alt="" width="70" height="70" />
              <p>
                En cas d’accident, alerter un secouriste du travail.
                <span /> n° tél SAMU : 15
              </p>
              <img src={fire} alt="" width="70" height="70" />
              <p>
                En cas d’incendie, alerter le responsable.
                <span /> n° tél pompiers : 18
              </p>
            </div>
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
