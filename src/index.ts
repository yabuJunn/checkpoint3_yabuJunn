import "./components/export";
import { addObserver, state } from "./store";
import { SCREENS } from "./types/screens";

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ""
            switch (state.screen) {
                case SCREENS.LOGIN_SCREEN:
                    const loginScreen = this.ownerDocument.createElement("login-page")
                    this.shadowRoot.appendChild(loginScreen)
                    break;
                case SCREENS.GAME_SCREEN:
                    const gameScreen = this.ownerDocument.createElement("game-page")
                    this.shadowRoot.appendChild(gameScreen)
                    break;
                default:
                    break;
            }
        }
    }
}

customElements.define('app-container', AppContainer)