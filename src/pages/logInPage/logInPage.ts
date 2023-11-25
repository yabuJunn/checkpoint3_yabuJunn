import "../../components/export";
import { dispatch } from "../../store";
import { changeScreen, loginUser } from "../../store/actions";
import { SCREENS } from "../../types/screens";

export class LoginPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const linkStyles = this.ownerDocument.createElement("link")
        linkStyles.rel = "stylesheet"
        linkStyles.href = "/src/pages/logInPage/logInPage.css"
        this.shadowRoot?.appendChild(linkStyles)

        const mainContainerLogin = this.ownerDocument.createElement("section")
        mainContainerLogin.id = "mainContainerLogin"
        this.shadowRoot?.appendChild(mainContainerLogin)

        const pageTitle = this.ownerDocument.createElement("h1")
        pageTitle.innerText = "Login to Polloc's Board"
        mainContainerLogin.appendChild(pageTitle)

        const userName = this.ownerDocument.createElement("input")
        userName.placeholder = "Ingrese su nombre"
        mainContainerLogin.appendChild(userName)

        const userColor = this.ownerDocument.createElement("input")
        userColor.type = "color"
        userColor.placeholder = "Escoja su color favorito"
        mainContainerLogin.appendChild(userColor)

        const userLetter = this.ownerDocument.createElement("input")
        userLetter.placeholder = "Ingrese su letra favorita"
        mainContainerLogin.appendChild(userLetter)

        const buttonGame = this.ownerDocument.createElement("button")
        buttonGame.innerText = "Prueba Cambiar Pantalla"
        mainContainerLogin.appendChild(buttonGame)

        buttonGame.addEventListener("click", () => {
            dispatch(
                loginUser(userName.value, userColor.value, userLetter.value)
            )
            dispatch(
                changeScreen(SCREENS.GAME_SCREEN)
            )
        })
    }
}

customElements.define('login-page', LoginPage)