import React from "react";
import { useState} from "react";
import styles from "../styles/questionnaire.css"


function Questionnaire(infos) {
  
    const full = infos.questionReponse.edges 
    const fullcadeaux = infos.fullcadeaux.edges
    
    var comptageDeCadeaux = []
    
    const [counting, setCounting] = useState([{}])
    const [tempc, setTempc] = useState([{}])
    

    function kickstart(e) {
      let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      let note = e.nextSibling.nextSibling
      let click = e.parentNode.parentNode.nextSibling
      if (e.value.match(mailformat))
      {
        note.style.display = 'none'
        click.style.display = 'block'
      }
      else {
        note.style.display = 'block'
        note.style.color = 'red'
        click.style.display = 'none'
      }
      
    }


    function init() {
      fullcadeaux.map(function(i){
        let conc = {
          nom: i.node.name,
          img: i.node.image.asset.url,
          pts: 0
        }
        comptageDeCadeaux.push(conc)
      })
      setCounting(comptageDeCadeaux)
      setTempc(comptageDeCadeaux)
      let nextdiv = document.querySelector('[data-questionnaire]')
      let next = document.querySelector('[data-ordre="1"]')
      let current = document.querySelector('#launch')
      nextdiv.dataset.visible = "oui"
      next.dataset.visible = "oui"
      current.dataset.visible = "non"
    }

    function validateQuestion(q) {
      function yop() {
        let number = Number(q.parentNode.parentNode.dataset.ordre)
        let add = number + 1
        let concat = '[data-ordre="' + add + '"]'
        let next = document.querySelector(concat)
        let current = q.parentNode.parentNode
        next.dataset.visible = "oui"
        current.dataset.visible = "non"
        setCounting(tempc)
      }
      (q.parentNode.parentNode.querySelector('input[type=radio]:checked') ? 
        yop()
        : 
        console.log("nop")
      )
    }
    function terminateQuestion(q) {
      function yop() {
        let next = document.querySelector('#resultats')
        let current = q.parentNode.parentNode
        next.dataset.visible = "oui"
        current.dataset.visible = "non"
        setCounting(tempc)
      }
      (q.parentNode.parentNode.querySelector('input[type=radio]:checked') ? 
        yop()
        : 
        console.log("nop")
      )
    }    

    function temp(t) {

      let selectedOptions = t.map( mpdt => {
        let mappedNomCad = mpdt.cad.name
        let mappedValCad = mpdt.val

        return {nom: mappedNomCad, pts: mappedValCad}

      })

      let newState = counting.map((obj,index) => { // On itère dans couting
        let nomCad = obj.nom
        let valCad = obj.pts
        let imgCad = obj.img

        return {nom: nomCad, img: imgCad, pts: valCad}
        })

        
        for (let i of selectedOptions) {
          let objIndex = newState.findIndex((obj => obj.nom == i.nom));
          let newPointsValue = newState[objIndex].pts + i.pts

          newState[objIndex].pts = newPointsValue
        }
            

      setTempc(newState); // On update le temp
      
    }

    function plop(e) {
      var target = document.querySelectorAll('[data-circle]');
      Array.prototype.forEach.call(target, function(element){
          element.removeAttribute('style')
      });
      let dad = e.parentNode.parentNode.children[0].children[0]
      let bg = getComputedStyle(dad).backgroundColor
      let fullbg = "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, " + bg + " 25%)"
      dad.style.background = fullbg
    }

    // Le drag & drop ci dessous

    var dragSrcEl = null

    function handleDragStart(e) {
      this.style.opacity = '0.4'
      dragSrcEl = this
      e.dataTransfer.clearData()
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('text/html', this.innerHTML)
    }
    
    function handleDragEnd(e) {
      this.style.opacity = '1'
      items.forEach(function (item) {
        item.classList.remove('over')
      })
      console.log("drag end ")
    }
    
  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault()
    }
    
    e.dataTransfer.dropEffect = 'move'
    
    console.log("drag over")
    return false
  }

  function handleDragEnter(e) {
    this.classList.add('over')
  }

  function handleDragLeave(e) {
    this.classList.remove('over')
  }

  function handleDrop(e) {
    e.stopPropagation() // stops the browser from redirecting.
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML
      this.innerHTML = e.dataTransfer.getData('text/html')
    }
    return false
  }
    
    let items = document.querySelectorAll('[data-singlecad]');
    items.forEach(function (item) {
      item.addEventListener('dragstart', handleDragStart);
      item.addEventListener('dragover', handleDragOver);
      item.addEventListener('dragenter', handleDragEnter);
      item.addEventListener('dragleave', handleDragLeave);
      item.addEventListener('dragend', handleDragEnd);
      item.addEventListener('drop', handleDrop);
    });

    // Fin du drag & drop

  return (
   <>
    <div data-container>
    <form>
      <div id={"launch"} data-launch data-visible="oui">
        <h2>Merci d'entrer votre adresse email pour commencer ce questionnaire</h2>
        <div>
          <label>
            <input type="email" placeholder="email" name="email1" onChange={(e) => kickstart(e.target)}/>
            <br />
            <span>Format d'email attendu : example@example.com</span>
          </label>
        </div>
        <a onClick={init} href="#">Commencer le questionnaire</a>
      </div>
      <div data-questionnaire data-visible="non">
        {full.map((item, place, array) =>
            <div id={"question" + item.node.ordre} data-visible="non" data-ordre={item.node.ordre} key={item.node.ordre}>
            <div id="Q1">
              <div data-titre><h3>{item.node.ordre}/ {item.node.question}</h3></div>
                <ul>
                    {item.node.rep.map((m, i) =>
                    {
                      let rep = m.mareponse
                      let index = (i + 1)
                      let letter = String.fromCharCode(index + 64)
                      
                      return <li data-rep data-pos={"color-" + (i+1) } key={m.mareponse} 
                      onChange={(singlevalues) => temp(m.singleval)}
                      ><label>
                        <div data-circle></div><div data-trait></div><input type="radio" value={rep} name="q1" data-cadeau="c1" onChange={(e) => plop(e.target)}/>
                        <div data-reponse><span>{letter}</span> {rep}</div>
                        </label></li>
                    }
                    )}
                </ul>
              {(item.node.ordre === array.length) ?  <a href="#" onClick={(q) => terminateQuestion(q.target)}>Voir mes cadeaux</a> : <a href="#" onClick={(q) => validateQuestion(q.target)}>Suivant</a> }
            </div> 
         </div>
        )}
        </div>
        <div id="resultats" data-visible="non">
            <h3>Votre liste au pingouin de Noël</h3>
            <h4>Classez les 5 cadeaux par ordre de préférence</h4>
            <div data-listefinale>
            {counting.map((cadeau, index, longueur) =>
                          <div data-singlecad data-order="1" draggable="true">
                            <div data-circle><span>1</span></div>
                            <div data-trait></div>
                            <div data-details>
                              <img src={cadeau.img} />
                              <span>{cadeau.nom}</span>
                              <em>{cadeau.pts} points</em>

                            </div>
                        </div>
            )}
            </div>
        </div>
      </form>
    </div>
   </>
  );
}



export default Questionnaire;