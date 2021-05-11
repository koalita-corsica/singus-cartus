import * as styles from "./newsletter.module.css";
import React from "react";
import PortableText from "./portableText";
import logo from "../assets/logo.png";
import mascote from "../assets/mascote.png";
import email from "../assets/email.png";
import globe from "../assets/globe.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import first from "../assets/first.jpg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import $ from "jquery";

function getPDF() {
  var HTML_Width = $(".canvas_div_pdf").width();
  var HTML_Height = $(".canvas_div_pdf").height();
  var top_left_margin = 5;
  var PDF_Width = HTML_Width + top_left_margin * 2;
  var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
  var canvas_image_width = HTML_Width;
  var canvas_image_height = HTML_Height;

  var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

  html2canvas($(".canvas_div_pdf")[0], {
    allowTaint: true,
    useCORS: true,
  }).then(function (canvas) {
    canvas.getContext("2d");

    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
    pdf.crossOrigin = "anonymous";
    pdf.addImage(
      imgData,
      "JPG",
      top_left_margin,
      top_left_margin,
      canvas_image_width,
      canvas_image_height
    );

    for (var i = 1; i <= totalPDFPages; i++) {
      pdf.addPage(PDF_Width, PDF_Height);
      pdf.addImage(
        imgData,
        "JPG",
        top_left_margin,
        -(PDF_Height * i) + top_left_margin * 4,
        canvas_image_width,
        canvas_image_height
      );
    }

    pdf.save("newsletter.pdf");
  });
}

const Newsletter = (props) => {
  const {
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
  return (
    <React.Fragment>
      <section className="canvas_div_pdf">
        <div className={styles.container}>
          <div className={styles.fleft}>
            <img src={logo} alt="logo" className={styles.logo} />
            <img
              src={iconEdito.asset.url}
              alt="mascote"
              className={styles.picto}
            />
            <h1>{titleEdito}</h1>
            <p>{<PortableText blocks={_rawArticleEdito} />}</p>
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
              {<PortableText blocks={_rawArticle1} />}
            </p>
            <span className={styles.bar} />
            <h1> {titleArt2} </h1>
            <p className={styles.desc}>
              {<PortableText blocks={_rawArticle2} />}
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
              <p>{<PortableText blocks={_rawArticle4} />}</p>
            </div>
            <div className={styles.sright}>
              <h1>{titleArt3}</h1>
              <span className={styles.bar} />
              <div className={styles.txtDesc}>
                <div className={styles.txtLeft}>
                  {<PortableText blocks={_rawArticle3P1} />}
                </div>
                <div className={styles.txtRight}>
                  {<PortableText blocks={_rawArticle3P2} />}
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
              <p>{<PortableText blocks={_rawArticle5} />}</p>
            </div>
          </div>
          <div className={styles.thirdSection}>
            <div>
              <h1> {titleArt6} </h1>
              <p>{<PortableText blocks={_rawArticle6} />}</p>
            </div>
            <img src={imgArt6.asset.url} alt="" className={styles.lastimg} />
          </div>
        </div>
      </section>
      <input type="button" value="SAVE TO PDF" onClick={getPDF} />
    </React.Fragment>
  );
};

export default Newsletter;
