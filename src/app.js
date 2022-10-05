import { LitElement, html } from 'lit-element';
import data from './data.json' assert { type: "json" };
import './card/card.js';
import './detail/detail.js';
import './list/list.js';

class AppComp extends LitElement {

  static get properties () {
    return {
      path: { attribute: false },
      pokemon: { attribute: false }
    }
  }

  constructor() {
    super();
    this.path = window.location.pathname;
    this.pokemon = {};
  }

  firstUpdated() {
    window.addEventListener('popstate',  () => {
      this.path = window.location.pathname;
    });
    this.showDetail();
  }

  showDetail() {
    if(this.path !== '/') {
      this.pokemon = this.getPokemonByName(this.path.replace('/',''));
      if(!this.pokemon) {
        window.location.pathname = '/';
      }
    }
  }

  pokemonClicked({detail}){
    this.pokemon = this.getPokemonByName(detail);
    this.path = `/${detail}`;
    window.history.pushState({}, '', this.path);
  }

  getPokemonByName(name) {
    return data.results.find((pok) => pok.name === name);
  }

  render() {
    return html`
      ${this.path === '/' ?
        html `<list-comp @pokemon-clicked=${this.pokemonClicked} .pokemons=${data.results}></list-comp>` :
        html `<detail-comp .pokemon=${this.pokemon}></detail-comp>`
      }
    `;
  }
}

customElements.define('app-comp', AppComp);
