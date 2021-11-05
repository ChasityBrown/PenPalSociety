// import { fetchTypes, fetchRequests, fetchAuthors, fetchIngredients } from "./dataAccess.js";
import { fetchLetters, fetchAuthors, fetchTopics, fetchRecipients } from "./dataAccess.js";
import { PenPals } from "./PenPals.js";

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchLetters()
        .then(() => fetchAuthors())
        .then(() => fetchTopics())
        .then(() => fetchRecipients())
        .then(() => {
            mainContainer.innerHTML = PenPals()
        })
}

render()

document.addEventListener(
    "stateHasChanged",
    () => {
        render()
    }
)
