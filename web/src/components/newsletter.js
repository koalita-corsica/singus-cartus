import * as styles from "./newsletter.module.css";
import React from "react";
import PortableText from "./portableText";
import logo from "../assets/logo.png";

import email from "../assets/email.png";
import globe from "../assets/globe.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import first from "../assets/first.jpg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import $ from "jquery";

function getPDF() {
  // var doc = new jsPDF({ orientation: 'p', format: 'a4'  });
  // doc.html(document.getElementById('test'), {
  //  callback: function (doc) {
  //     doc.addPage('a4', 'p');
  //     doc.html(document.getElementById('test'), {
  //        callback: function (doc) {
  //           doc.output('dataurlnewwindow');
  //         }
  //       }
  //   }
  // }
}

const Newsletter = (props) => {
  const {
    titleArt1,
    imgArt1,
    article1,
    titleArt2,
    article2,
    iconEdito,
    titleEdito,
    articleEdito,
    titleArt3,
    article3P1,
    article3P2,
    imgArt4,
    titleArt4,
    article4,
    imgArt5,
    titleArt5,
    article5,
    imgArt6,
    titleArt6,
    article6,
  } = props;

  return (
    <React.Fragment>
      <div id="capture" className={styles.capture}>
        <div className={styles.container}>
          <div className={styles.fleft}>
            <img src={logo} alt="logo" className={styles.logo} />
            <img
              src={iconEdito.asset.url}
              alt="mascote"
              className={styles.picto}
            />
            <h1>{titleEdito}</h1>
            <p>{articleEdito.children.text}</p>
            <span className={styles.contact}>
              <h1> CONTACTEZ-NOUS </h1>
              <span>
                <img src={phone} alt="phone" width="20px" /> 04 95 23 18 92
              </span>
              <span>
                <img src={email} alt="phone" width="20px" />
                secretariat@evr-pro.com
              </span>
              <span>
                <img src={globe} alt="phone" width="20px" /> www.evrpro.fr
              </span>
              <span>
                <img src={location} alt="phone" width="20px" /> Lot Michel Ange,
                20167 Afa
              </span>
            </span>
          </div>
          <div className={styles.fright}>
            <h1>{titleArt1}</h1>
            <span className={styles.bar} />
            <img
              src={imgArt1.asset.url}
              alt="first"
              className={styles.firstimg}
            />
            <p className={styles.quote}>{imgArt1.caption}</p>
            <p className={styles.desc}>
              {article1.children.text}
            </p>
            <span className={styles.bar} />
            <h1> {titleArt2} </h1>
            <p className={styles.desc}>
              {article2.children.text}
            </p>
          </div>
        </div>
        <div className={styles.containerSecond}>
          <div className={styles.myGrid}>
            <div className={styles.sleft}>
              <img
                src={imgArt4.asset.url}
                alt="second"
                className={styles.secondfirstimg}
              />
              <h1>{titleArt4}</h1>
              <div className={styles.bar} />
              <p>{article4.children.text}</p>
            </div>
            <div className={styles.sright}>
              <h1>{titleArt3}</h1>
              <span className={styles.bar} />
              <div className={styles.txtDesc}>
                <div className={styles.txtLeft}>
                  {article3P1.children.text}
                </div>
                <div className={styles.txtRight}>
                  {article3P2.children.text}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.secondSection}>
            <img
              src={imgArt5.asset.url}
              alt=""
              className={styles.secondsecondimg}
            />
            <div>
              <h1> {titleArt5} </h1>
              <p>{article5.children.text}</p>
            </div>
          </div>
          <div className={styles.thirdSection}>
            <div>
              <h1> {titleArt6} </h1>
              <p>{article6.children.text}</p>
            </div>
            <img src={imgArt6.asset.url} alt="" className={styles.lastimg} />
          </div>
        </div>
      </div>

      <input
        type="button"
        value="SAVE TO PDF"
        onClick={getPDF}
        className={styles.button}
      />
    </React.Fragment>
  );
};

export default Newsletter;
