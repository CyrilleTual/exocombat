class Character {
    constructor(name, hp, mp, attack, defense ) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.attack = attack;
		this.defense = defense;
    }

	setAttack(opponent){
        opponent.hp -= this.attack;
    }

	setDefense(){
		this.defense += 1;
	}

    setCastSpell(opponent){
         let random = Math.floor(Math.random()*this.mp/2) + 1 ;

        opponent.hp -= random;
        this.mp -= random;
        if (this.mp < 0 ){
            this.mp = 0; 
            let spellBtn = document.getElementById("spellBtn");
            spellBtn.setAttribute('disabled',"true")
            // et desactication du bouton sort 
        };
        


    }




}

export default Character;