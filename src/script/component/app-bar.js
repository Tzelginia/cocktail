class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 10px;
            box-sizing: border-box;
          }
          :host {
            display: block;
            width: 100%;
            background-color:  rgb(177, 54, 156);
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          }
          h2 {
            padding: 16px;
            text-align: center;
          }
        </style>
         <div class="jumbotron">
        <h1>
          <marquee width="auto" height="auto">Cocktail Finder</marquee>
        </h1>
      </div>
      `;
  }
}

customElements.define("app-bar", AppBar);
