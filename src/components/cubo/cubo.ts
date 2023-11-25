import { state } from "../../store";
import { subirCubo } from "../../utils/firebase";
import "../export";

enum CuboProperties {
    "letter" = "letter",
    "color" = "color",
    "id" = "id"
}

export class Cubo extends HTMLElement {
    properties = {
        letter: "",
        color: "",
        id: ""
    }

    static get observedAttributes() {
        return ["letter", "color", "id"]
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: CuboProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case CuboProperties.color:
                this.properties.color = newValue
                break;
            case CuboProperties.letter:
                this.properties.letter = newValue
                break
            case CuboProperties.id:
                this.properties.id = newValue
                break
            default:
                break;
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ""

            const linkStyles = this.ownerDocument.createElement("link")
            linkStyles.rel = "stylesheet"
            linkStyles.href = "/src/components/cubo/cubo.css"
            this.shadowRoot?.appendChild(linkStyles)

            const cube = this.ownerDocument.createElement("div")
            cube.classList.add("cube")
            cube.style.backgroundColor = `${this.properties.color}`
            cube.innerText = this.properties.id
            this.shadowRoot.appendChild(cube)

            cube.addEventListener("click", () => {
                subirCubo(this.properties.id, state.user.color, state.user.letter)
            })
        }
    }
}

customElements.define('cubo-cubo', Cubo)