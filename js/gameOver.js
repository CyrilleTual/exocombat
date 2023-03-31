function gameOver(game){
    
    // test si il reste vies aux personnages
    if (game.squall.hp < 0){
        window.alert (" GAME OVER, Tu as perdu jeune Padawan")
    }else if (game.bahamut.hp < 0){
        window.alert (" GAME OVER ..... le dragon est mort ")
    }
    // desactivation des boutons de jeux

    // affichage du gagnant

}

export default gameOver