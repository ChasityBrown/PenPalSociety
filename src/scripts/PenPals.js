// import { CompleteButton } from "./CompleteButton.js";
import { Recipients } from "./Recipients.js";
import { Authors } from "./Authors.js";
// import { CraftRequestDropdown } from "./CraftRequests.js";
// import { Ingredients } from "./Ingredients.js";
 import { LetterForm } from "./LetterForm.js";
import { Topics } from "./Topics.js";

export const PenPals = () => {
    return `
    <h1>Pen Pal Society</h1>
    
    <section class="section flex row">
    <article class="dropdown craftRequest">
    
    </article>
    <article class="dropdown Authors">
    ${Authors()}
    </article>
    <form>  
        ${LetterForm()}
    </form>
    <article>
        ${Topics()}
    </article>
    <article class="dropdown Recipients">
         ${Recipients()}   
    </article>
    </section>

    
    `
}
//  , ${CraftRequestDropdown()}, ${Ingredients()}, ${CompleteButton()}