import * as styles from "./newsletter.module.css";
import React from "react";
import PortableText from "./portableText";
import logo from "../assets/logo.png";

import email from "../assets/email.png";
import globe from "../assets/globe.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import { jsPDF } from "jspdf";

const Newsletter = (props) => {
  const {
    slug,
    titleArt1,
    imgArt1,
    _rawArticle1,
    titleArt2,
    _rawArticle2,
    iconEdito,
    titleEdito,
    _rawArticleEdito,
    titleArt3,
    _rawArticle3P1,
    _rawArticle3P2,
    imgArt4,
    titleArt4,
    _rawArticle4,
    imgArt5,
    titleArt5,
    _rawArticle5,
    imgArt6,
    titleArt6,
    _rawArticle6,
  } = props;

  function getPDF() {
    var doc = new jsPDF("p", "pt", [780, 1127]);
    doc.html(document.querySelector("#capture"), {
      callback: function (pdf) {
        pdf.save("newsletter" + `${slug.current.toString()}` + ".pdf");
      },
    });
    alert("Le download va commencer!");
  }

  console.log(slug.current.toString());
  return (
    <React.Fragment>
      <input
        type="button"
        value="SAVE TO PDF"
        onClick={getPDF}
        className={styles.button1}
      />
      <div id="capture" className={styles.capture}>
        <div className={styles.container}>
          <div className={styles.firstLeft}>
            <div className={styles.logo}>
              <img src={logo} alt="" />
            </div>
            <div className={styles.icon}>
              <img src={iconEdito.iconsGallery.asset.url} alt="" />
            </div>
            <div className={styles.article1}>
              <h1> {titleEdito} </h1>
              <PortableText blocks={_rawArticleEdito} />
            </div>
            <div className={styles.contact}>
              <h1> CONTACTEZ-NOUS </h1>
              <span>
                <img src={phone} alt="phone" width="25px" />{" "}
                <p> 4 95 23 18 92 </p>
              </span>
              <span>
                <img src={email} alt="phone" width="25px" />
                <p> secretariat@evr-pro.com </p>
              </span>
              <span>
                <img src={globe} alt="phone" width="25px" />{" "}
                <p> www.evrpro.fr </p>
              </span>
              <span>
                <img src={location} alt="phone" width="25px" />{" "}
                <p> Lot Michel Ange, 20167 Afa </p>
              </span>
            </div>
          </div>
          <div className={styles.article2}>
            <h1> {titleArt1} </h1>
            <span className={styles.bar} />
            <p className={styles.quote}>{imgArt1.caption}</p>
            <img src={imgArt1.asset.url} alt="" />
            <div className={styles.desc1}>
              <PortableText blocks={_rawArticle1} />
            </div>
          </div>
          <span className={styles.bar2} />
          <div className={styles.article3}>
            <h1> {titleArt2} </h1>
            <div className={styles.desc2}>
              <PortableText blocks={_rawArticle2} />
            </div>
          </div>
        </div>
        <div className={styles.containerSecond}>
          <div className={styles.secondLeft}>
            <img src={imgArt4.asset.url} alt="" />
            <h1> {titleArt4} </h1>
            <span className={styles.bar3} />
            <div className={styles.desc4}>
              <PortableText blocks={_rawArticle4} />
            </div>
          </div>
          <div className={styles.article4}>
            <h1> {titleArt3} </h1>
            <span className={styles.bar4} />
            <div className={styles.artic4desc}>
              <div className={styles.txtLeft}>
                {" "}
                <PortableText blocks={_rawArticle3P1} />{" "}
              </div>
              <div className={styles.txtRight}>
                {" "}
                <PortableText blocks={_rawArticle3P2} />{" "}
              </div>
            </div>
          </div>
          <div className={styles.secondSection}>
            <img src={imgArt5.asset.url} alt="" />
            <div className={styles.cont5}>
              <h1> {titleArt5} </h1>
              <PortableText blocks={_rawArticle5} />
            </div>
          </div>
          <div className={styles.thirdSection}>
            <img src={imgArt6.asset.url} alt="" />
            <div className={styles.cont6}>
              <h1> {titleArt6} </h1>
              <PortableText blocks={_rawArticle6} />
            </div>
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
