import { BookButton } from "./book-button.js";

export function Brunch() {
  return /*html*/ `
    <main class="Stack8 tac">
      <div class="Stack5">
        <header>
          <h1>Bottomless Brunch - Cheese &amp; Charcuterie</h1>
          <p class="Callout">£29.50 pp, bottomless prosecco or DnR lager, combined with a
          delectable selection of cheeses and cured meats, and artisan breads,
          crackers and dips to pair them with. Upgrade to bottomless cocktail
          carafes for an extra £5!</p>
        </header>
        <div class="Stack4">
          <p>
            ${BookButton({
              label: "Book brunch",
              type: "brunch",
              people: 2,
            })}
          </p>
          <p><strong>or email info@deliriumbars.com</strong></p>
        </div>
      </div>

      <section class="Stack4">
        <h2>Classic:</h2>
        <p class="Callout">
          Smoky Iberico chorizo, pork and fennel salami, Sicilian prosciutto,
          Serrano ham rollitos, wensleydale and cranberry, yorkshire blue, brie,
          Gouda, mini mozzarella balls. Served with Haldilki stuffed olives,
          fresh fruit, sun dried tomatoes, rocket, sourdough bread with balsamic
          and olive oil and a range of artisanal crackers.
        </p>
      </section>
      <section class="Stack4">
        <h2>Vegan:</h2>
        <p class="Callout">
          A selection of vegan cured meats and cheeses such as spanish chorizo,
          salami, smoked ham, and tofu pastrami, brie, mature cheddar, garlic
          and herb cream cheese, mini jackfruit sausage rolls, moroccan spiced
          falafel. Served with olives, red pepper hummus, fruit, rocket,
          sourdough bread with balsamic and olive oil and vegan crackers.
        </p>
      </section>
      <section class="Stack4">
        <p>
          <b>
            GF options available on both boards, please just tell us upon booking!
          </b>
        </p>
        <p>
          <b>Cocktail Carafes included in the bottomless brunch</b>: Eldermint
          Spritz (gin, st germaine, mint, cucumber, topped with prosecco), Chile
          Marg (pineapple tequila, coriander, mango, agave, lime, chili), Spiced
          Sangria (red or white wine, spiced rum, apple, orange, lemonade).
        </p>
      </section>
    </main>
  `;
}
