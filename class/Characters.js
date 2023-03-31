class Character {
    constructor(name, hp, mp, attack, defense ) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.attack = attack;
		this.defense = defense;
    }

	setAttack(opponent){
        let damage = Math.floor(((this.attack)*100 - opponent.defense) / 100 );
        opponent.hp -= damage;
        return damage;
    }

	setDefense(){
		this.defense += 1;
        return 1;
	}

    setCastSpell(opponent){
        let damage = Math.floor(Math.random()*this.mp/2) + 1 ;

        opponent.hp -= damage;
        this.mp -= damage;
        if (this.mp < 0 ){
            this.mp = 0; 
            let spellBtn = document.getElementById("spellBtn");
            spellBtn.setAttribute('disabled',"true")
            // et desactication du bouton sort 
        };

        return damage

    }

}

export default Character;