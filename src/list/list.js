import { LitElement, html } from 'lit-element';
import styles from './list.style.js';

class ListComp extends LitElement {

  static get styles(){
    return [styles];
  }

  static get properties () {
    return {
      pokemons: { type: Object }
    }
  }

  constructor() {
    super();
    this.pokemons = [];
  }

  onClick(pokemon) {
    let event = new CustomEvent('pokemon-clicked', {
      detail: pokemon.name
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div class="container">
        ${this.pokemons.map((pok) => html`
          <card-comp @click=${()=>this.onClick(pok)} .pokemon=${pok}></card-comp>
        `)}
      </div>
    `;
  }
}

customElements.define('list-comp', ListComp);
