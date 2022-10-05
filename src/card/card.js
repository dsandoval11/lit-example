import { LitElement, html } from 'lit-element';
import styles from './card.styles.js';

class CardComp extends LitElement {

  static get styles(){
    return [styles];
  }

  static get properties () {
    return {
      pokemon: { type: Object }
    }
  }

  constructor() {
    super();
    this.pokemon = {
      sprites: {},
      name: '',
      type: []
    };
  }

  render() {
    return html`
      <div class="pokemon">
        <img src="${this.pokemon.sprites?.normal}" alt="${this.pokemon.name}">
        <h1>${this.pokemon.name}</h1>
        <h2>Types: ${this.pokemon.type.join(', ')}</h2>
      </div>
    `;
  }
}

customElements.define('card-comp', CardComp);
