import React from 'react';
import { jsPDF } from "jspdf";
import logo from "../assets/logo.png";
import { MdDoNotDisturbAlt } from 'react-icons/md';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { GiFirstAidKit } from 'react-icons/gi';
import { BsShieldFillX } from 'react-icons/bs';
import PortableText from "../components/portableText";
import mascotteM from "../assets/mascotteM.png"
import risqueC from "../assets/risqueC.png"
import mascotteG from "../assets/mascotteG.png"
import risqueCC from "../assets/risqueCC.png"
import diplomeN from "../assets/diplomeN.png"
import diplomeB from "../assets/diplomeB.png"
import manger from "../assets/manger.png"
import mSecours from "../assets/mSecours.png"
import phoneA from "../assets/phoneA.png"
import proteger from "../assets/proteger.png"
import secoursA from "../assets/secoursA.png"


import * as styles from './livret.module.css';

const Livret = (props) => {
  const {title, livret} = props;

  // function getPDF() {
  //   var doc = new jsPDF('p', 'mm', [420, 595]);
  //   doc.html(document.querySelector("#capture"), {
  //     callback: function (pdf) {
  //       pdf.save("livret.pdf");
  //     },
  //   });
  //   alert("Le download va commencer!");
  // }

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  const d = new Date();

  return(
    <>
    <div data-livret id="capture">
      <div data-containerCouverture>
        <div data-livretH>
          <div data-imgLogo>
            <img src={logo} alt="" />
          </div>
          <h1> Livret Accueil Sécurité </h1>
        </div>
        <div data-lgray />
        <div data-square>
          <img src={livret[0].image.asset.url} alt="" height="96px" />
          <div data-descp>
            <PortableText blocks={livret[0]._rawTexte} />
          </div>
          <p data-ps> LAS Version n°1 - {monthNames[d.getMonth()]} </p>
        </div>
        <div data-lfooter>
          <div data-contact>
            <h2> Contact </h2>
          </div>
            <p style={{marginTop: '1rem'}}> {livret[0].adresse} </p>
            <p> {livret[0].numero} </p>
            <p> {livret[0].mail} </p>
        </div>
      </div>
      <div data-containerSommaire>
        <div data-headSommaire />
        <div data-som>
          <h2> Sommaire </h2>
        </div>
        <div data-mid>
          <div data-rightGray> </div>
          <div data-redLeft>
            <div data-leftC> Renseignement pratique  P.00</div>
            <div data-leftC> Responsabilité de chacun  P.00</div>
            <div data-leftC> Règles générales de sécurité  P.00</div>
            <div data-leftC> Restauration et repos  P.00</div>
            <div data-leftC> Equipement de protection individuelle  P.00</div>
            <div data-leftC> Risques généraux de l'entreprise  P.00</div>
            <div data-leftC> En cas d'accident  P.00</div>
            <div data-leftC> En cas d'incendie  P.00</div>
            <div data-leftC> En cas d'incendie  P.00</div>
            <div data-leftC> Certificat de formation  P.00</div>
          </div>
        </div>
        <div data-fsommaire />
      </div>
      <div data-renseigment>
      <div data-headSommaire />
      <div data-som>
        <h2> Renseignement sur l'entreprise </h2>
      </div>
      <div data-mid>
        <div data-rightGray>
        <p> {livret[1].gerant} </p>
        <p> {livret[1].activite} </p>
        <p> {livret[1].nbSalaries} </p>
        <p> {livret[1].codeRisque} </p>
        <p> {livret[1].taux} </p>
        <p> {livret[1].documentUnique} </p>
        <p> {livret[1].affObligatoire} </p>
        <p> {livret[1].affPrevention} </p>
        <p> {livret[1].affCovid} </p>
        <p> {livret[1].unite} </p>
        </div>
        <div data-redLeft>
          <div data-leftC> <p> Gérant </p></div>
          <div data-leftC> <p> Activite </p> </div>
          <div data-leftC> <p> Nb de salaries </p></div>
          <div data-leftC> <p> Code Risque </p></div>
          <div data-leftC> <p> Taux AT/MP </p></div>
          <div data-leftC> <p> Document Unique </p></div>
          <div data-leftC> <p> Aff.Olbigatoire </p></div>
          <div data-leftC> <p> Aff.prevention </p></div>
          <div data-leftC> <p> Aff.COVID </p></div>
          <div data-leftC> <p> Unité de Travail </p></div>
        </div>
      </div>
      <div data-rfooter>
        <h2> Plan d'accès </h2>
        <div data-cont>
          <img src={livret[1].image.asset.url} alt="" height="100px" />
        </div>
        <div style={{height: '25px', background: 'black', width: '100%'}}/>
      </div>
      </div>
      <div data-responsabilite>
        <div data-headSommaire />
        <div data-som>
          <h2> Responsabilité de chacun </h2>
        </div>
        <div data-responCont>
          <div data-title>
            <h1> Les responsabilités de l'employeur (C.T.) </h1>
          </div>
          <div data-wrapArtic>
            <div data-artic1>
            <div data-bouble> <img src={diplomeB} height="28px"/> </div>
              <p> Article 4121-1 </p>
              <p> " l'employeur est tenu envers le salarié d'une obligation de sécurité qui est une obligation de résultat ". </p>
             </div>
            <div data-artic2>
            <div data-bouble> <img src={diplomeB} height="28px"/> </div>
              <p> Article 4121-2 </p>
              <p> " l'employeur met en œuvre les mesures prévues à l'Article 4121-1 sur le fondement des principes généraux de prévention ", qui sont au nombre de 9. </p>
             </div>
            <div data-artic3>
            <div data-bouble> <img src={diplomeB} height="28px"/> </div>
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
          <div data-bouble> <img src={diplomeN} height="28px"/> </div>
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
          <h2> Règles générales de sécutité </h2>
        </div>
        <div data-listRegles>
        <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr., Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Consetetur sadipscing elitr, sed diam nonumy eirmod. Tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo. Duo dolores et ea rebum. Stet clita kasd gubergren. Sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </p>
        </div>
        <div data-listPartn>
        <div data-title>
          <h1> Les responsabilités du salarié (C.T). </h1>
        </div>
        <div data-partnGrid>
        {livret[2].infos.map((item) =>
          <div data-partner>
            <img src={item.logo.asset.url} alt="" width="53px" />
            <p data-func> {item.function} </p>
            <p data-name> {item.value} </p>
            <p data-name> {item.numero} </p>
          </div>
          )}
        </div>
        <div data-fregles/>
        </div>
      </div>
      <div data-restauration>
        <div data-headSommaire/>
        <div data-som> <h2> Restauration et repos </h2> </div>
        <div data-contain>
          <div data-leftR> <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem' }}> <img src={manger} height="48px" /> <img src={manger} height="48px" /> <img src={manger} height="48px" /></div> </div>
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
      <div data-equip>
        <div data-headSommaire/>
        <div data-som>
          <h2> Equipement de protection individuelle </h2>
         </div>
          <div data-content>
            <div data-noir>
            <p> Sur le chantier et au dépôt, le port des EPI (Chaussures et Gants) est obligatoire. </p>
            <p> La gêne qu'ils vous occasionnent momentanément est moindre comparée à l'invalidité qu'ils vous éviteront. </p>
            </div>
            <div data-epi>
            {livret[3].epi.map((item) =>
              <div data-card>
                <img src={item.image.asset.url} width="75" height="75" alt="" />
                <PortableText blocks={item._rawDescription} />
              </div>
              )}
            </div>
          </div>
          <div data-footerRes />
      </div>
      <div data-risques>
      <div data-headSommaire/>
      <div data-som> <h2> Risques généraux de l'entreprise </h2> </div>
      <div data-contentR>
        <div data-noirC>
          <img src={mascotteM} alt="" />
        </div>
        <div data-danger>
          <img src={risqueC} alt="" height="47px" />
        </div>
        <div data-grayd>
          <p> <span> L'échelle </span> : c'est un moyen d'accès, non un poste de travail </p>
          <p data-title> Pour la sécurité de tous, il faut : </p>
          <ul>
          <li> - Installer des échelles sur le sol stable. </li>
           <li> - Faire dépasser les échelles d'un mètre au moins au-dessus du plancher de travail auquel elles donnent accès.</li>
           <li> - Veiller au bon écartement du pied par rapport à la surface d'appui.</li>
           <li> - Ne jamais se servir du dernier échelon.</li>
           <li> - Chevaucher les échelles coulissantes d'au moins 5 échelons.</li>
           <li> - Attacher les échelles. - Vérifier l'état général du matériel.</li>
           <li> - Vérifier la présence de patins antidérapants.</li>
          </ul>
        </div>
        <div data-white>
        <p data-title> Echafaudages, pour la sécurité de tous, il faut : </p>
        <ul>
          <li> - Respecter les conditions de montage. </li>
          <li> - Être formé à leurs utilisations et leurs montages. </li>
          <li> - Vérifier et faire vérifier l'échafaudage périodiquement. </li>
          <li> - Echafaudage adapté (roulant, charge max, accès,...) </li>
          <li> - Stabilité de l'échafaudage assurée. </li>
          <li> - Eléments de sécurité (garde-corps, lisse, sous lisse,...) </li>
        </ul>
        </div>
      </div>
        <div data-footerRes />
      </div>
      <div data-risquesv2>
        <div data-headSommaire/>
        <div data-som> <h2> Risques de chute de plain-pied </h2> </div>
      <div data-contentR>
        <div data-noirC>
          <img src={mascotteG} alt="" />
        </div>
        <div data-danger>
          <img src={risqueCC} alt="" height="47px" />
        </div>
          <div data-grayd>
          <p data-bold> Quelques causes de glissades : </p>
        <ul>
          <li> - Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </li>
          <li> - Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </li>
        </ul>
        </div>
        <div data-whiteF>
          <p data-bold> Quelques causes de trébuchementd : </p>
          <ul>
            <li> - Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </li>
            <li> - Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </li>
            <li> - Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </li>
          </ul>
        </div>
        <div data-agray>
        <p data-bold> Pour éviter l'accident bête qui fait mal : </p>
        <ul>
          <li> - Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </li>
          <li> - Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </li>
          <li> - Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </li>
          <li> - Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </li>
          <li> - Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </li>
          <li> - Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </li>
        </ul>
        </div>
      </div>
      <div data-wrpIcon>
        <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" alt="" width="49" height="49"/>
        <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" alt="" width="49" height="49"/>
        <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" alt="" width="49" height="49"/>
      </div>
      <div data-footerRes />
      </div>
      <div data-containerSommaire>
        <div data-headSommaire />
        <div data-som>
          <h2> Sommaire des risques </h2>
        </div>
        <div data-mid>
          <div data-rightGray> </div>
          <div data-redLeft>
            <div data-leftC> Renseignement pratique  P.00</div>
            <div data-leftC> Responsabilité de chacun  P.00</div>
            <div data-leftC> Règles générales de sécurité  P.00</div>
            <div data-leftC> Restauration et repos  P.00</div>
            <div data-leftC> Equipement de protection individuelle  P.00</div>
            <div data-leftC> Risques généraux de l'entreprise  P.00</div>
            <div data-leftC> En cas d'accident  P.00</div>
            <div data-leftC> En cas d'incendie  P.00</div>
            <div data-leftC> En cas d'incendie  P.00</div>
            <div data-leftC> Certificat de formation  P.00</div>
          </div>
        </div>
        <div data-fsommaire />
      </div>
      <div data-equipPersonnel>
      <div data-headSommaire />
      <div data-som>
        <h2> Equipement de protection individuelle </h2>
      </div>
      <div data-content>
        <div data-noir>
          <p> Sur le chantier et au dépôt, le port des EPI (Chaussures et Gants) est obligatoire. </p>
          <p> La gêne qu'ils vous occasionnent momentanément est moindre comparée à l'invalidité qu'ils vous éviteront. </p>
        </div>
          <div data-epi>
            <div data-card>
              <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" width="75" height="75" alt="" />
              <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et </p>
            </div>
            <div data-card>
              <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" width="75" height="75" alt="" />
              <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et </p>
            </div>
            <div data-card>
              <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" width="75" height="75" alt="" />
              <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et </p>
            </div>
          </div>
          <p data-para> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores </p>
        </div>
        <div data-footerRes>
          <div data-picto>
            <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" width="75" height="75" alt="" />
          </div>
        </div>
      </div>
      <div data-accident>
        <div data-headSommaire />
        <div data-som> <h2> En cas d'accident </h2> </div>
        <div data-content>
          <div data-first>
            <div data-num1> <h2> 1 </h2> </div>
            <img src={proteger} height="21px" />
            <p> Protéger : se protéger et protéger la victime (afin d'éviter le sur-accident </p>
          </div>
          <div data-second>
            <div data-num1> <h2> 3 </h2> </div>
            <img src={secoursA} height="21px" />
            <p> Secourir : porter assistance à la victime </p>
            <p data-t9> Couvrir le blessé (ne pas bouger la victime </p>
            <p data-t9> Ne pas donner à boire </p>
            <p data-t9> Eloigner les curieux </p>
          </div>
          <div data-third>
          <div data-num1> <h2> 2 </h2> </div>
          <img src={phoneA} height="21px" />
          <p data-bold data-t9> Téléphonez au : </p>
          <div data-nums>
            <div data-line>
              <div data-pomp>
              <span> 18 </span>
              <p data-t9> Pompiers </p>
              </div>
              <div data-sam>
              <span> 15 </span>
              <p data-t9> Samu </p>
              </div>
            </div>
            <div data-secours>
            <span> 112 </span>
            <p data-t9> Centre d'appels secours </p>
            </div>
          </div>
          <p data-t9 data-bold> Et indiquez: </p>
          <ul>
            <li> Le lieu de l'accident </li>
            <li> Le numéro de téléphone où l'on peut vous joindre </li>
            <li> Le nombre de blessés et leur état </li>
            <li> La cause de l'accident </li>
            <li> Ne jamais raccrocher en premier </li>
          </ul>
          </div>
        </div>
        <p data-para> <span> IMPORTANT: </span> L'employeur doit être tenu informé systématiquement en cas d'incident ou d'accident </p>
        <div data-sauv>
          <div data-text>
            <h5> Sauveteur Secouriste du Travail : </h5>
            <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores </p>
          </div>
          <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" width="95" height="95" alt="" />
        </div>
        <div data-footerRes />
      </div>
      <div data-incendie>
        <div data-headSommaire />
        <div data-som> <h2> En cas d'incendie </h2> </div>
        <div data-content>
          <div data-line>
            <div data-first>
              <div data-num1> <h2> 1 </h2> </div>
              <img src={phoneA} height="21px" />
              <p data-t9 data-bold>  <span> Alerter </span> </p>
              <p> Prévenir les Urgences adéquates : </p>
              <div data-contat>
                <p> 18 ou 112 </p>
              </div>
              <p> Prévenir l'employeur (si possible) </p>
            </div>
            <div data-second>
            <div data-num1> <h2> 2 </h2> </div>
            <p data-t9 data-bold>  <span> Lutter (si possible) </span> </p>
            <p> Utiliser les moyens de secours Extincteurs </p>
            <p> Sans mettre votre vie en danger </p>
            </div>
          </div>
        <div data-third>
        <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" width="110" height="110" alt="" data-imgL/>
            <div style={{display: 'flex'}}>
            <div data-num1> <h2> 3 </h2> </div>
            <div data-line>
              <span> Evacuer </span>
              <PortableText blocks={livret[4]._rawEvacuer} />
            </div>
          </div>
        </div>
        <div data-fourth>
            <div data-txt>
              <h3> Conseils: </h3>
              <p> - Lorem ipsum dolor sit amet, consetetur sadipscing </p>
              <p> - Lorem ipsum dolor sit amet, consetetur sadipscing </p>
              <p> - Lorem ipsum dolor sit amet, consetetur sadipscing </p>
              <p> - Lorem ipsum dolor sit amet, consetetur sadipscing </p>
              <p> - Lorem ipsum dolor sit amet, consetetur sadipscing </p>
              <p> - Lorem ipsum dolor sit amet, consetetur sadipscing </p>
              <h6> Chaque seconde compte, Agissez ! </h6>
            </div>
          <div data-cont>
          <div data-ic>
            <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" width="25" height="25" alt="" />
            <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" width="25" height="25" alt="" />
          </div>
          <div data-imgP>
            <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" height="97" alt="" data-imgR/>
          </div>
          </div>
        </div>
        </div>
        <div data-footerRes>
          <p> Notre partenaire Verification Incendie: </p>
          <img src={livret[4].logo.asset.url} alt="" height="22px" />
        </div>
      </div>
      <div data-certificat>
        <div data-headSommaire />
        <div data-som> <h2> Certificat de Formation à la Sécurité Générale </h2> </div>
        <div data-content>
          <div data-imgContain>
            <img src={logo} alt="" />
          </div>
          <p> Je soussigné(e) …………………………………………………………………….. avoir reçu l'information et la formation en interne à la sécurité générale spécifique au lieu de travail de la société NOM DE LA SOCIÉTÉ ainsi que le livret d'accueil sécurité. </p>
          <p> Je reconnais également avoir reçu ou avoir à disposition le kit Equipement de Protection Individuelle (EPI) </p>
          <div>
            <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" width="56" height="56" alt="" />
            <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" width="56" height="56" alt="" />
            <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" width="56" height="56" alt="" />
            <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" width="56" height="56" alt="" />
            <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" width="56" height="56" alt="" />
          </div>
          <div data-line>
          <p> Fait le …………….. </p>
          <p> Signature </p>
          </div>
          <p> À ……………………… </p>
          <p> LAS Version n°1 - {monthNames[d.getMonth()]} </p>
        </div>
        <div data-footerRes />
      </div>
      <div data-logo>
        <img src={logo} alt="" width="258" height="74" />
      </div>
      <div data-notes>
        <div data-headSommaire />
        <div data-som> <h2> Notes </h2> </div>
        <div data-content>
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
      <div data-footerRes />
      </div>
      <div data-final>
        <div data-head />
        <div data-content>
          <img src={logo} alt="" width="255" />
          <h3> www.evrpro.fr </h3>
          <div data-center>
            <p> Z.I de Baléone - Lot Michel Ange </p>
            <p> 20167 AFA </p>
            <p> 04 95 23 18 92 </p>
            <p> secretariat@evr-pro.com </p>
          </div>
        </div>
        <div data-footerF />
      </div>
    </div>
    </>
  )
}

export default Livret;


// <div data-fourth>
//   <span> Conseils : </span>
//     <div data-line1>
//       <div data-wrpT>
//       <p> - Lorem ipsum dolor sit amet, consetetur sadipscing </p>
//       <p> - Lorem ipsum dolor sit amet, consetetur sadipscing </p>
//       <p> - Lorem ipsum dolor sit amet, consetetur sadipscing </p>
//       <p> - Lorem ipsum dolor sit amet, consetetur sadipscing </p>
//       <p> - Lorem ipsum dolor sit amet, consetetur sadipscing </p>
//       <p> - Lorem ipsum dolor sit amet, consetetur sadipscing </p>
//         <h6> Chaque seconde compte, Agissez ! </h6>
//       </div>
//       <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" width="25" height="25" alt="" />
//       <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" width="25" height="25" alt="" />
//     </div>
//   <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" width="110" height="110" alt="" data-imgR/>
// </div>
