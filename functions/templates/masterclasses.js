import { BookButton } from "./book-button.js";

export function Masterclasses() {
  return /*html*/ `
    <main class="Stack5 tac">
      <header>
        <h1>Masterclasses</h1>
        <p class="Callout">Hen do? Birthday? Just curious to delve into the secrets of mixology? We offer a range of masterclasses, including cocktail & bourbon classes of varying levels of complexity.</p>
      </header>
      <div class="Stack4">
        <p>
          ${BookButton({
            label: "Book a masterclass",
            type: "masterclass",
            people: 5,
          })}
        </p>
        <p><strong>or email info@deliriumbars.com</strong></p>
      </div>
    </main>
  `;
}
