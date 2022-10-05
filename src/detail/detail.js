import { LitElement, html } from 'lit-element';
import styles from './detail.style.js';

class DetailComp extends LitElement {

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
      <div class="container">
        <img src="${this.pokemon.sprites?.animated}" alt="${this.pokemon.name}">
        <h1>${this.pokemon.name}</h1>
        <h2>Types: ${this.pokemon.type.join(', ')}</h2>
      </div>
    `;
  }
}

customElements.define('detail-comp', DetailComp);
