import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Alps Mountain";
    this.description = `A clear mountain lake in the Alps is a cold, high-elevation body of water
    that is pristine and often reflects the surrounding mountains, trees, and sky.`;
    this.image = "https://media.istockphoto.com/id/521200806/photo/idyllic-summer-landscape-with-clear-mountain-lake-in-the-alps.jpg?s=612x612&w=0&k=20&c=ndMwgDkoWEBJE8ZaL0Nfe2Cpvr5AB0FkE945itl-KKA="; 
    this.alt="Alps Mountain and Lake";
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        text-align: center;
      }
      h1 {
        text-align: center;

      }
      .control-wrapper {
        text-align: center;
        margin-bottom: 1rem;
      }
      .card {
        display: inline-block; 
        border: 1px solid green;
        border-radius: 8px; 
        box-shadow: 0 4px 8px black; 
        text-align: center;
        padding: 16px;
        margin: 24px;
        background-color: white; 
        width: 300px;
        max-width: 400px;
      }
      button:hover {
        background-color: blue;
      }

      .card img {
        width: 100%;
        max-width: 350px;
        height: 200px;
        object-fit: cover;
        border-radius: 4px;
        margin-bottom: 12px;
      }

      .details {
        display: inline-block;
        padding: 8px 16px;
        color: green;
        font-size: 25px;
        text-decoration-line: underline;
        text-decoration-color: green;
      }

      .bg-toggle {
        background-color: lightyellow;
      }
      @media (min-width: 500px) and (max-width: 800px) {
        .details {
          display: inline-block;
        }
      }

      @media (max-width: 500px) {
        .card {
          width: 90%;
        }
      }

    `;
  }

  render() {
    return html`<div class="card">
    <h1>${this.title}</h1>
    <p>${this.description}</p>
    <img src="${this.image}" alt="${this.alt}" />
    <div>
      <button>
        <a href="https://oer.hax.psu.edu/ftf5022/sites/firaolswrld/" class="details">Details</a>
      </button>
    </div>
  </div>`
  
  
  ;
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      image: { type: String },
      cards: { type: Array },
      alt: { type: String}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
