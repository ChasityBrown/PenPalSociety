const applicationState = {
    authors: [],
    recipients: [],
    topics: [],
    letters: [],
    completedLetters: {
        authorId: 0,
        recipientId: 0,
        topicId: 0,
        letterId: 0
    }
}
const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

export const setAuthorId = (id) => {
    applicationState.completedLetters.authorId = id
}
export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then((authors) => {
            applicationState.authors = authors
        })
}
export const getAuthors = () => {
    return applicationState.authors.map(author => ({ ...author}))
}
export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (Letters) => {
                // Store the external state in application state
                applicationState.letters = Letters
            }
            )
        }
export const getLetters = () => {
            return applicationState.letters.map(letter => ({...letter}))
        }
export const getTopics = () => {
            return applicationState.topics.map(topic => ({...topic}))
        }
export const sendLetter = () => {
    const date = new Date().toLocaleDateString()
    applicationState.completedLetters.dateSent = date
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(applicationState.completedLetters)
    }
    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(
            () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then((topics) => {
            applicationState.topics = topics
        })
}
export const setRecipientId = (id) => {
    applicationState.completedLetters.recipientId = id
}
export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then((recipients) => {
            applicationState.recipients = recipients
        })
}
export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({ ...recipient}))
}
// export const denyLetter = (id) => {
//     return fetch(`${API}/letters/${id}`, { method: "DELETE" })
//         .then(
//             () => {
//                 mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
//             }
//         )