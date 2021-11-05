// Module Responsibility - Generate HTML for the dropdown of recipients

import { getRecipients, setRecipientId } from "./dataAccess.js"

document.addEventListener(
    "change",
    (evt) => {
        if (evt.target.id === "recipient") {
            setRecipientId(parseInt(evt.target.value))
        }
    }
)


export const Recipients = () => {

    const recipients = getRecipients()

    return `
    <h3>Recipients</h3>
    <select id="recipient">
        <option value="0">--Choose An Recipient--</option>
        ${
            recipients.map(
            (recipient) => {
                return `
                    <option value="${recipient.id}">${recipient.name}</option>
                `
            })
        }
    </select>
  `
}