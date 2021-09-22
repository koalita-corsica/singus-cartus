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
          <div data-table>
            <div data-headerTab>
              <div data-1> <h5> Tâche exposant l’opérateur à un risque </h5> </div>
              <div data-2> <h5> Risques - Dangers </h5> </div>
              <div data-3> <h5> Mesures de prévention - Opérations ou procédures à respecter </h5> </div>
            </div>
            <div data-tableContent>
              {tache2.map((item) =>
                <ul>
                  <li>
                  <div data-tache>
                    <h5> Quand ? </h5>
                    <p> {item.quand} </p>
                    <h5> Quelle tâche ? </h5>
                    <p> {item.quelle} </p>
                    <h5> Par qui ? </h5>
                    <p> {item.qui} </p>
                  </div>
                  <div data-risque>
                    {item.risques.map((imag) =>
                      <img src={imag.picto.asset.url} alt="" width="47" height="44"/>
                    )}
                  </div>
                  <div data-mesures>
                    {item.mesures}
                  </div>
                  </li>
                </ul>
              )}
            </div>
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
