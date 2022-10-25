import { BookButton } from "./book-button.js";

export function VenueBookings() {
  return /*html*/ `
    <main class="Stack5 tac">
      <header>
        <h1>Private events</h1>
        <p class="Callout">Book this space now, for groups up to 120 people!</p>
      </header>
      <div class="Stack4">
        <p>
          ${BookButton({
            label: "Book venue",
            type: "venue",
            people: 40,
          })}
        </p>
        <p><strong>or email info@deliriumbars.com</strong></p>
      </div>
    </main>
  `;
}
