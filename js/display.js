import gameOver from "./gameOver.js";

export function display(game){

    let todisplay = `
        <table>
            <tr>
                <td>Personages</td>
                <td>HP</td>
                <td>Mana</td>
                <td>Attack</td>
                <td>Defense</td>
            </tr>
            <tr>
                <td>${game.squall.name}</td>
                <td>${game.squall.hp}</td>
                <td>${game.squall.mp}</td>
                <td>${game.squall.attack}</td>
                <td>${game.squall.defense}</td>
            </tr>
            <tr>
                <td>${game.bahamut.name}</td>
                <td>${game.bahamut.hp}</td>
                <td>${game.bahamut.mp}</td>
                <td>${game.bahamut.attack}</td>
                <td>${game.bahamut.defense}</td>
            </tr>
        </table>
    
    `;

    if (document.querySelector('#scores')){
        document.querySelector('#scores').remove();
    }
    let toInsert = document.createElement('div');
    toInsert.setAttribute("id","scores");
    toInsert.innerHTML = todisplay; 
    document.querySelector('#state').parentElement.appendChild(toInsert);

    gameOver(game);

}