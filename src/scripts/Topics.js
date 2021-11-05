import { getTopics } from "./dataAccess.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "topic") {
            setTopic(parseInt(event.target.value))
    }
}
)
export const Topics = () => {

    const topics = getTopics()
return `
    <h3>Topics</h3>
        ${
            topics.map(
            (topic) => {
                return `
                <div>
                    <input type="radio" name="topic" value="${topic.id}" /> ${topic.type}
                </div>
                `
            }).join("")
        }`
    }
