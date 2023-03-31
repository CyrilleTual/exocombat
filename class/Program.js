import Character from "./characters.js";
import { display } from "../js/display.js";
import { Round } from "./Round.js";


class Program {
    constructor() {
        this.squall = new Character("Squall", 132, 60, 10, 7 );
        this.bahamut = new Character("Bahamut", 127, 20, 12, 8 );

        this.attacker = null;
        this.action = null;
        this.roundsHistory = [];

        this.attackBtn = document.getElementById("atkBtn");
        this.defBtn = document.getElementById("defBtn");
        this.spellBtn = document.getElementById("spellBtn")

        // appelle de la méthode displayStateCharacter, pour afficher au lancement du jeu les statistiques des personnages
        display(this); // affichage initial des états

        // je mets en place les écouteurs sur ces boutons
        this.attackBtn.addEventListener("click", () => this.attack());
        this.defBtn.addEventListener("click", () => this.defend());
        this.spellBtn.addEventListener("click", ()=>this.castSpell())
    }

    attack(){   // squall attaque bahamut
        
        let damage =this.squall.setAttack(this.bahamut);

        this.round = new Round(this.squall.name, "attaque", damage)
        this.roundsHistory.push(this.round);
       

        // afficher ce qu'il s'est passé
        this.log();
          
        // on passe au tour du dragon
        this.dragonTurn();              
    }

    defend(){ // squall joue la défense
  
        let damage = this.squall.setDefense(); 

        this.round = new Round(this.squall.name, "defense", damage)
        this.roundsHistory.push(this.round);
       

        // afficher ce qu'il s'est passé
        this.log();  
        this.dragonTurn();               
    }

    castSpell(){

        let damage = this.squall.setCastSpell(this.bahamut);
        this.round = new Round(this.squall.name, "jette un sort", damage);
        this.roundsHistory.push(this.round);
       

        // afficher ce qu'il s'est passé
        this.log(); 
        this.dragonTurn();     

    }

    dragonTurn(){
        this.attacker = this.bahamut.name;
        // faire en sorte que le type d'action soit aléatoire une fois que les 3 actions sont terminés tant que mana 
        let random
        if (this.bahamut.mp > 0 ){
            random = Math.floor(Math.random()*3) + 1 ;
        } else {
            random = Math.floor(Math.random()*2) + 1 ;
        }
        
        let damage = 0;

        switch (random) {
            case 1:
                damage = this.bahamut.setAttack(this.squall);// attaque
                this.action = "attaque";   
                break;
            case 2:
                damage = this.bahamut.setDefense();// se défend
                this.action = "defense";   
                break;     
            default:
                this.action = "jette un sort";
                damage = this.squall.setCastSpell(this.squall); 
                break;
        }

        this.round = new Round(this.bahamut.name, this.action, damage);
        this.roundsHistory.push(this.round);
       

        this.log();
       
    }

    log(){
        //console.log(`${this.attacker} a joué : ${this.action}`)
        display(this);
    }

}

export default Program;