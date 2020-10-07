/***** Deliverable 1 *****/
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("#header")
    console.log("Here's your header:", header)
    header.style.color = "red"

    for (player of PLAYERS) {
        const newNode = document.createElement('div')
        newNode.className = "player"
        newNode["data-number"] = player.number
        newNode.innerHTML = `
        <h3>
            ${player.name} (<em>${player.nickname}</em>)
        </h3>
        <img src="${player.photo}" alt="${player.name}">
        `
        document.getElementsByClassName("player-container")[0].append(newNode)
    }
})



/***** Deliverable 2 *****/


/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)


/***** Deliverable 4 *****/