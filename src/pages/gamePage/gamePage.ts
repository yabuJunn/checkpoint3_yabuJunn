import "../../components/export";
import { pedienteTiempoReal } from "../../utils/firebase";

export class GamePage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render([])
        pedienteTiempoReal(this.render)
    }

    render(listaCubes: any) {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ""
            console.log("Volvio a pintar")
            const linkStyles = this.ownerDocument.createElement("link")
            linkStyles.rel = "stylesheet"
            linkStyles.href = "/src/pages/gamePage/gamePage.css"
            this.shadowRoot?.appendChild(linkStyles)

            const mainContainerGame = this.ownerDocument.createElement("section")
            mainContainerGame.id = "mainContainerLogin"
            this.shadowRoot?.appendChild(mainContainerGame)
            mainContainerGame.innerText = "Game"

            const cubeContainer = this.ownerDocument.createElement("div")
            cubeContainer.id = "cubeContainer"
            mainContainerGame.appendChild(cubeContainer)

            for (let i = 0; i < 100; i++) {
                const newCube = this.ownerDocument.createElement("cubo-cubo")
                newCube.setAttribute("id", `${i}`)
                cubeContainer.appendChild(newCube)

                console.log(listaCubes[i])
            }
        }
    }
}

customElements.define('game-page', GamePage)