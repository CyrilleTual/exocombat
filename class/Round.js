export class Round{
    constructor (attacker, typeOfAttack = null , damages = null){
        this.attacker = attacker;
        this.typeOfAttack = typeOfAttack;
        this.damages = damages;
    }
}