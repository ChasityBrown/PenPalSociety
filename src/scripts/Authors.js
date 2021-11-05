// Module Responsibility - Generate HTML for the dropdown of authors

import { getAuthors, setAuthorId } from "./dataAccess.js"

document.addEventListener(
    "change",
    (evt) => {
        if (evt.target.id === "author") {
            setAuthorId(parseInt(evt.target.value))
        }
    }
)


export const Authors = () => {

    const authors = getAuthors()

    return `
    <h3>Authors</h3>
    <select id="author">
        <option value="0">--Choose An Author--</option>
        ${
            authors.map(
            (authorObj) => {
                return `
                    <option value="${authorObj.id}">${authorObj.name}</option>
                `
            })
        }
    </select>
  `
}