import gameOver from "./gameOver.js";

export function display(game){

    /***
     * tableau des caractéristiques des players
     */

    let div = document.createElement('div');
    let table1 = document.createElement('table')
    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    td1.innerText = 'Personages';
    td2.innerText = 'HP';
    td3.innerText = 'Mana';
    td4.innerText = 'Attack';
    td5.innerText = 'Defense';
    tr1.append(td1);
    tr1.append(td2);
    tr1.append(td3);
    tr1.append(td4);
    tr1.append(td5);

    let tr2 = document.createElement("tr");
    let td21 = document.createElement("td");
    let td22 = document.createElement("td");
    let td23 = document.createElement("td");
    let td24 = document.createElement("td");
    let td25 = document.createElement("td");
    td21.innerText = game.squall.name;
    td22.innerText = game.squall.hp;
    td23.innerText = game.squall.mp;
    td24.innerText = game.squall.attack;
    td25.innerText = game.squall.defense;
    tr2.append(td21);
    tr2.append(td22);
    tr2.append(td23);
    tr2.append(td24);
    tr2.append(td25);

    let tr3 = document.createElement("tr");
    let td31 = document.createElement("td");
    let td32 = document.createElement("td");
    let td33 = document.createElement("td");
    let td34 = document.createElement("td");
    let td35 = document.createElement("td");
    td31.innerText = game.bahamut.name;
    td32.innerText = game.bahamut.hp;
    td33.innerText = game.bahamut.mp;
    td34.innerText = game.bahamut.attack;
    td35.innerText = game.bahamut.defense;
    tr3.append(td31);
    tr3.append(td32);
    tr3.append(td33);
    tr3.append(td34);
    tr3.append(td35);

    if (document.querySelector('#scores')){
        document.querySelector('#scores').remove();
    }
    div.setAttribute("id","scores");

    document.querySelector('#state').parentElement
        .appendChild(div)
        .appendChild(table1)
        .appendChild(tr1)
        .parentElement.appendChild(tr2)
        .parentElement.appendChild(tr3)

    /**
     * affichages des rounds 
     * */    

   

    // nombre de rounds 

    let nbRounds = game.roundsHistory.length;
    let round = game.round
    if (document.querySelector('#lastRound')){
                document.querySelector('#lastRound').remove();
            }

        if(nbRounds>1){

            let last2Rounds = game.roundsHistory.slice(nbRounds-2);
            let text1 = "";
            let text2 = "";
            let text=""

            last2Rounds.forEach((round, index) => {
                
                switch (round.typeOfAttack) {
                    case 'attaque':
                        text2 = ` il afflige une perte de ${round.damages} points de vie <br><br>`                  
                        break;
                    case 'defense':
                         text2 = ` , il gagne ${round.damages} points de défense <br><br>`
                         break;    
                    default:
                         text2 = ` cela provoque une perte de ${round.damages} points de vie <br><br>`
                        break;
                }

                text1 = ` Round ${nbRounds-1+index}, ${round.attacker} ${round.typeOfAttack}`
                text1 += text2

                 text += text1 

            });
            
            let anchor = document.querySelector("#log")
            let toAppend = document.createElement('span')
            toAppend.setAttribute("id","lastRound");
            toAppend.innerHTML = text;
            anchor.append(toAppend);

            //console.log (text)
        }


    gameOver(game);

}