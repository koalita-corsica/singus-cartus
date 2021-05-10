import * as styles from "./newsletter.module.css";
import React from "react";

import logo from "../assets/logo.png";
import mascote from "../assets/mascote.png";
import email from "../assets/email.png";
import globe from "../assets/globe.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import first from "../assets/first.jpg";

const Newsletter = ({ props }) => (
console.log(props),
  <React.Fragment>
    <section>
      <div className={styles.container}>
        <div className={styles.fleft}>
          <img src={logo} alt="logo" className={styles.logo} />
          <img src={props} alt="mascote" className={styles.picto} />
          {/* <img src={props.iconEdito.asset.url} alt="mascote" className={styles.picto} /> */}
          <h1>
            DAERFERUM <span>VELESTIOS ILIGNIET </span>
          </h1>
          <p>
            Liqui omniame solupta tem-pern aturiorpor aliqui tore peroremped
            quisimus vo-lores alis eum quodictem et ipsunte voluptatis aut mo
            ei-caes etur. Epudigent dolupta iur alia veressitat officit elen-to
            voluptate volorestia intias-pit quam quuntis aut pero conecum con
            cus nus, sam quatiamus aut velligendia do-lori ulla dolut
            odicienture, et apietur apid quaestrum quae. Itam hariantur, ut
            porio ide et aut ut ute moluptatur? Quia pro moditi aut occusdae. Et
            odia di dolo eicaten imuscita sit am duscias mo expligen-tium quia
            prest, et fugitatem et, consed mossit qui nem et excest, nis aut
            alicto di dollum dolupie
          </p>
          <span className={styles.contact}>
            <h1> CONTACTEZ-NOUS </h1>
            <span>
              <img src={phone} alt="phone" width="20px" /> 04 95 23 18 92
            </span>
            <span>
              <img src={email} alt="phone" width="20px" />{" "}
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
          <h1>
            LOREM IPSUM DOLOR SIT <span> PISCING ELIT. </span>
          </h1>
          <span className={styles.bar} />
          <img src={first} alt="first" className={styles.firstimg} />
          <p className={styles.quote}>
            «Andigni hilicipis et rae qui officipsae excesti andigen ditatempos
            venit fugia qui quame solorei umenimodi optia nem que re sum
            volupide»
          </p>
          <p className={styles.desc}>
            Sed quas solorit maiore sitissim reped et eum faccupt atempos verci
            de la quam, nam fuga. Ihiciendenim eriae accus.Dicium esti volorae
            nonsequatem. Borepta tincit ex ea sit voles renit eum nost, ute
            molupta ectur? Icae modi re omni comnissus sim volum fugiass imporib
            usaepro vi-dessum voloreium dolorenem que verum, occuptat audi bla
            deliqui solupti cuptatem quis delisquis et atis enisqui ssitatis
            ellab ipsum simillorem ra vit escim que quostotati cuptis et esciet,
            qui ne et et quoditi to iuntisque platur alignih iciatur?Cius
            voloribusaes sumquiatiae. Int quid mi, omnis is que volor sandesed
            quia volorib eruptat as as eosam ventemo luptatum aut il eossequid
            ut et aut eium fugit ipsa veniet idellibusam volo volor as magnimu
            sciunt que porehendi
          </p>
          <span className={styles.bar} />
          <h1> LOREM IPSUM DOLOR SIT </h1>
          <p className={styles.desc}>
            Em qui raturit aute volore odi volorum que et est plis isi-tatibus
            maximus eicabor itatio. Namus.Udae aliberia quas mo qui inctaturis
            doluptusamaligent dellabora sunt ut et, il ipsae il ium nonsequunt
            et volore voles soluptatias mo te re la dere liquas aut ate sequam
            nullantur? Aruntus apisqui am erum et dollab incta volum hillo et
            vid unt qui a vendessequi unto de cus, inteturessit aut ullaborero
            dipsant du sve.
          </p>
        </div>
      </div>
    </section>
    <br />
    <section>
      <div className={styles.containerSecond}>
        <div className={styles.myGrid}>
          <div className={styles.sleft}>
            <img src={first} alt="second" className={styles.secondfirstimg} />
            <h1>
              LOREM IPSUM <span> DOLOR </span>
            </h1>
            <div className={styles.bar} />
            <p>
              Taqui dolo molorero volupta-tur?Net occatem perumqui ip-sae aut
              ipsam ium quatur si suntia cus explandit hillen-dit laceped
              quodita tquatur ibusdandunt.Ceaquibusdae consequas ex-persp eribus
              porrorepel modi aut dolor as eos aut aboreic tem identum rere eos
              elles-totatem quiam, odi.
            </p>
          </div>
          <div className={styles.sright}>
            <h1>
              LOREM IPSUM DOLOR <span> SIT AMET, CONSECTETUR </span>{" "}
            </h1>
            <span className={styles.bar} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              consectetur euis-mod imperdiet. Vivamus eget risus ac ligula
              placerat suscipit. Donec at loremquis sapien viverra cursus quis
              sit amet odio. Aenean ac arcu bibendum nibh sodales sagittis a vel
              lorem. Aenean vehicula sollicitudin leo non varius. Duis tristique
              mi ve-nenatis ante elementum, luctus ultricies erat ornare. Ut
              bibendum at nisl eget iaculis. Nullam tortor eros, pellentesque id
              ultricies ut, ultricies ac mauris. Donec mollis ac leo rhoncus
              vulpu-tate. Curabitur vitae leo vel tortor molestie mattis eu nec
              <div className={styles.txtRight}>
                erat. Class aptent taciti so-ciosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Ut id euismod libero.
                Cras vel malesuada nibh. Donec luctus ut leo eu sollicitudin. In
                dapibus sem nec elit vulputate, ac moles-tie justo auctor.
                Vestibulum ante psum primis in fauci-bus orci luctus et ultrices
                po-suere cubilia curae.Ut bibendum at nisl eget ia-culis. Nullam
                tortor eros, pel-lentesque id ultricies ut, ultri-cies ac
                mauris. Donec mollis ac leo rhoncus vulputate. Curabitur vitae
                leo vel tortor molestie mattis eu nec erat.Donec mollis ac leo
                rhoncus vulputate.
              </div>
            </p>
          </div>
        </div>
        <div className={styles.secondSection}>
          <img src={first} alt="" className={styles.secondsecondimg} />
          <div>
            <h1> LOREM IPSUM DOLOR SIT AMET </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              consectetur euismod imperdiet. Vivamus eget risus ac ligula
              placerat suscipit. Donec at lorem quis sapien viver- ra cursus
              quis sit amet odio. Aenean ac arcu bibendum nibh sodales sagittis
              a vel lorem. Aenean vehicula sollicitudin leo non varius. Duis
              tristique mi venenatis ante elementum, luc- tus ultricies erat
              ornare. Ut bibendum at nisl eget iaculis. Nul- lam tortor eros,
              pellentesque id ultricies ut, ultricies ac mauris. Donec mollis ac
              leo rhoncus vulputate.
            </p>
          </div>
        </div>
        <div className={styles.thirdSection}>
          <div>
            <h1> LOREM IPSUM DOLOR SIT </h1>
            <p>
              Em qui raturit aute volore odi volorum que et est plis isitatibus
              maximus eicabor itatio. Namus. Udae aliberia quas mo qui
              inctaturis doluptusam aligent del- labora sunt ut et, il ipsae il
              ium nonsequunt et volore voles soluptatias mo te re la dere liquas
              aut ate sequam nullantur? Aruntus apisqui am erum et dollab incta
              volum hillo et vid unt qui a vendessequi unto de cus, inteturessit
              aut ullaborero dipsant du sve.
            </p>
          </div>
          <img src={first} alt="" className={styles.lastimg} />
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Newsletter;
