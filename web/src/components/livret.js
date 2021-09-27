import React from 'react';
import { jsPDF } from "jspdf";
import logo from "../assets/logo.png";
import { GiDiploma } from 'react-icons/gi';
import { MdDoNotDisturbAlt } from 'react-icons/md';


import * as styles from './livret.module.css';

const Livret = () => {

  // function getPDF() {
  //   var doc = new jsPDF("p", "pt", [780, 1127]);
  //   doc.html(document.querySelector("#capture"), {
  //     callback: function (pdf) {
  //       pdf.save("fichedeposte" + `${slug.current.toString()}` + ".pdf");
  //     },
  //   });
  //   alert("Le download va commencer!");
  // }

  return(
    <div data-livret>
      <div data-containerCouverture>
        <div data-livretH>
          <div data-imgLogo>
            <img src={logo} alt="" />
          </div>
          <h1> Livret Accueil Sécurité </h1>
        </div>
        <div data-lgray />
        <div data-square>
        </div>
        <div data-lfooter>
          <div data-contact>
          </div>
        </div>
      </div>
      <div data-containerSommaire>
        <div data-headSommaire />
        <div data-som>
        </div>
        <div data-mid>
          <div data-rightGray> </div>
          <div data-redLeft> </div>
        </div>
        <div data-fsommaire />
      </div>
      <div data-renseigment>
      <div data-headSommaire />
      <div data-som>
      </div>
      <div data-mid>
        <div data-rightGray> </div>
        <div data-redLeft> </div>
      </div>
      <div data-rfooter>
      <div data-hfooter/>
      </div>
      </div>
      <div data-responsabilite>
        <div data-headSommaire />
        <div data-som>
        </div>
        <div data-responCont>
          <div data-title>
            <h1> Les responsabilités de l'employeur (C.T.) </h1>
          </div>
          <div data-wrapArtic>
            <div data-artic1>
            <div data-bouble> <GiDiploma /> </div>
              <p> Article 4121-1 </p>
              <p> " l'employeur est tenu envers le salarié d'une obligation de sécurité qui est une obligation de résultat ". </p>
             </div>
            <div data-artic2>
            <div data-bouble> <GiDiploma /> </div>
              <p> Article 4121-2 </p>
              <p> " l'employeur met en œuvre les mesures prévues à l'Article 4121-1 sur le fondement des principes généraux de prévention ", qui sont au nombre de 9. </p>
             </div>
            <div data-artic3>
            <div data-bouble> <GiDiploma /> </div>
              <p> Article 4121-3 </p>
              <p> " l'employeur, compte tenu de la nature des activités de l'établissement, doit procéder à l'évaluation des risques pour assurer la santé physique et mentale de ses salariés ". </p>
            </div>
          </div>
          <div data-salWrap>
          <div data-title>
            <h1> Les responsabilités du salarié (C.T). </h1>
          </div>
          <div data-cont>
            <p> Tout salarié a une obligation de sécurité pour lui et pour les autres. Un manquement à cette obligation peut être considéré comme une faute et entraîner des poursuites en cas d'accident. </p>
          </div>
          <div data-artic4>
          <div data-bouble> <GiDiploma /> </div>
            <p> Article 4122-1 </p>
            <p> Conformément aux instructions qui lui sont données par l'employeur, dans les conditions prévues au règlement intérieur (…), il incombe à chaque travailleur de prendre soin, en fonction de sa formation et selon ses possibilités, de sa santé et de sa sécurité ainsi que de celles des autres personnes concernées par ses actes ou ses omissions au travail. </p>
          </div>
          </div>
          <div data-rfooter />
        </div>
      </div>
      <div data-regles>
        <div data-headSommaire />
        <div data-som>
        </div>
        <div data-listRegles>
        </div>
        <div data-listPartn>
        <div data-title>
          <h1> Les responsabilités du salarié (C.T). </h1>
        </div>
        <div data-partnGrid>
          <div data-partner>
            <img src={logo} alt="" width="73" height="26" />
            <p data-func> Moyens d'extinctions Prévention des Risques </p>
            <p data-name> M. David GIBERT </p>
            <p data-name> 06 00 00 00 00 </p>
          </div>
          <div data-partner>
            <img src={logo} alt="" width="73" height="26" />
            <p data-func> Moyens d'extinctions Prévention des Risques </p>
            <p data-name> M. David GIBERT </p>
            <p data-name> 06 00 00 00 00 </p>
          </div>
          <div data-partner>
            <img src={logo} alt="" width="73" height="26" />
            <p data-func> Moyens d'extinctions Prévention des Risques </p>
            <p data-name> M. David GIBERT </p>
            <p data-name> 06 00 00 00 00 </p>
          </div>
          <div data-partner>
            <img src={logo} alt="" width="73" height="26" />
            <p data-func> Moyens d'extinctions Prévention des Risques </p>
            <p data-name> M. David GIBERT </p>
            <p data-name> 06 00 00 00 00 </p>
          </div>
          <div data-partner>
            <img src={logo} alt="" width="73" height="26" />
            <p data-func> Moyens d'extinctions Prévention des Risques </p>
            <p data-name> M. David GIBERT </p>
            <p data-name> 06 00 00 00 00 </p>
          </div>
          <div data-partner>
            <img src={logo} alt="" width="73" height="26" />
            <p data-func> Moyens d'extinctions Prévention des Risques </p>
            <p data-name> M. David GIBERT </p>
            <p data-name> 06 00 00 00 00 </p>
          </div>
        </div>
        <div data-fregles/>
        </div>
      </div>
      <div data-restauration>
        <div data-headSommaire/>
        <div data-som> </div>
        <div data-contain>
          <div data-leftR> <MdDoNotDisturbAlt /> <MdDoNotDisturbAlt /> <MdDoNotDisturbAlt /> </div>
          <div data-rightR>
            <div data-elem1>
            <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos </p>
            </div>
            <div data-elem2>
            <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos </p>
            </div>
            <div data-elem3>
            <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos </p>
            </div>
            <div data-elem4>
            <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos </p>
            </div>
            <div data-elem5>
            <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos </p>
            </div>
          </div>
        </div>
        <div data-footerRes/>
      </div>
    </div>
  )
}

export default Livret;
