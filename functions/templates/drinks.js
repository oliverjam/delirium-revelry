import { BookButton } from "./book-button.js";

export function Drinks() {
  return /*html*/ `
    <main class="Stack8 tac">

      <div class="Stack5">
        <header class="Stack4">
          <h1>Tonight’s revelry inspires tomorrow’s delirium…</h1>
          <p class="Callout">…an ongoing study of libation and guilty pleasures.</p>
        </header>

        <p>
          ${BookButton({
            label: "Book a table",
            type: "table",
            people: 2,
          })}
        </p>

        <p style="font-size: var(--s3)">All our drinks are prepared in a bar where nuts, drinks containing gluten and other allergens are present and our drinks menu descriptions do not include all ingredients. If you have an allergy or intolerance, please let us know before ordering. Full allergen information for our menu is available upon request.</p>
      </div>

      
      <section class="Stack8">
        <header class="Stack4">
          <h2>Cocktails</h2>
          <p class="Callout">Elixirs for day or night, our cocktails are crafted with a dreamlike innovision and originality</p>
        </header>
        <div class="Stack4">
          <h3>Signature</h3>
          <dl class="MenuList">
            <dt>Bon Bon Sour</dt>
            <dd>Pink bliss with a bite. Bon Bon infused vodka, blood tonic, lemon juice. Seductive sweetness combined with nettle and rosehip.</dd>
            
            <dt>Ruby Revival</dt>
            <dd>Bittersweet citrus brought to life with bergamot. Grapefruit & Rhubarb gin, Pampelle, Italicus, grapefruit bitters. </dd>
            
            <dt>Parma Violet Martini</dt>
            <dd>A nostalgic trip to violet heaven. Parma Violet gin, lavender gomme, lemon juice.</dd>
            
            <dt>Don’t be a Pr*ck </dt>
            <dd>Cactus coloured concoction with melon and coconut. Coconut tequila, midori, lime, ting top. Sure to spike your mood.</dd>
            
            <dt>Dream Soda</dt>
            <dd>Rhubarb and custard meets cream soda. Rhubarb gin, Banana rum, vanilla gomme, half and half, soda top.</dd>
            
            <dt>Sloely Does it</dt>
            <dd>Berrylicious. Sloe gin, blackberry liqueur, lemon, Blueberry gomme, Soda top. </dd>
          </dl>
        </div>
        <div class="Stack4">
          <h3>Classics, Delirium style</h3>
          <dl class="MenuList">
            <dt>Mojito (coconut, berry, or elderflower)</dt>
            <dd>Get muddled. Rum, mint, flavoured gomme, lime, soda top.</dd>
            
            <dt>Chocolate Orange Espresso Martini</dt>
            <dd>Day or night, this’ll hit the spot. Dowsed in Vodka, Coffee liqueur, chocolate liqueur, Terry’s chocolate orange syrup, and fresh espresso.</dd>
            
            <dt>Chile Marg</dt>
            <dd>Chilean inspired Margarita. Hacien pineapple tequila, triple sec, agave, lime, chili, fresh coriander. Like it hot? Tell us. </dd>
            
            <dt>Banacolada</dt>
            <dd>Creamy spiced banana goodness. Banana rum, pineapple, coconut gomme, lime, half and half. </dd>
            
            <dt>Rasmaretto Sour</dt>
            <dd>Fresh raspberries bring this classic sour to a new level. Amaretto, Framboise, raspberries, lemon.</dd>
            
            <dt>Passion Daiquiri</dt>
            <dd>A delightful tangy yet sweet twist on the original. Slydog Spiced Rum, Passion fruit puree, lime, passionfruit gomme.</dd>
          </dl>
        </div>
        <p><strong>Fancy something else, or have any requests? Just ask. If it’s possible, we’ll make it happen!</strong></p>
      </section>
      <section class="Stack6">
        <header class="Stack4">
          <h2>Perfect Pairings</h2>
          <p class="Callout">Recommended by us, these beautifully balanced combinations of quality spirits and artisanal mixers have been hand picked to make the perfect tipple</p>
        </header>
        <div class="Stack4">
          <h3>Rum</h3>
          <ul role="list">
            <li>Diablesse Coconut & Hibiscus - <i>Three cents Cherry Soda</i></li>
            <li>Slydog Spiced Rum - <i>Artisan Amalfi Lime Tonic</i></li>
            <li>Salford Rum Dark Spiced - <i>Artisan Ginger Beer</i></li>
            <li>Dead Man’s Fingers Coconut - <i>Ting</i></li>
          </ul>
        </div>

          <div class="Stack4">
            <h3>Tequila & Mezcal</h3>
            <ul role="list">
              <li>Hacien Pineapple Tequila - <i>Artsian Ginger Ale</i></li>
              <li>Hacien Tequila - <i> Artisan Agave Lemon Tonic</i></li>
              <li>Hacien Tequila - <i>Artisan Smokey Cola</i></li>
              <li>El Tequileno Blanco - <i>Artisan Smokey Cola</i></li>
              <li>Banhez Mezcal - <i>Artisan Agave Lemon or Violet Blossom Tonic</i></li>
            </ul>
          </div>

          <div class="Stack4">
            <h3>Gin</h3>
            <ul role="list">
              <li>Tappers Brightside - <i>Artisan Amalfi Lime or Violet Blossom</i></li>
              <li>Tappers Darkside - <i>Artisan classic London Tonic</i></li>
              <li>Tappers Pink - <i>Artisan Pink Citrus</i></li>
              <li>Sipsmith Sloe - <i>Cranberry & Ginger Soda</i></li>
            </ul>
          </div>
      </section>
      <section class="Stack8">
        <header class="Stack4">
          <h2>Wine</h2>
          <p class="Callout">The juice of the grape is the liquid quintessence of concentrated sunbeams</p>
        </header>
          <div class="Stack4">
            <h3>White</h3>
            <ul role="list" class="Stack4">
              <li>
                <h4>Calaveros Vino Blanco</h4>
                <p><i>Our house Pinot has delicious peach aromas with fresh pear and subtle floral notes. Good volume and crisp acidity makes for a long lingering finish.</i></p>
              </li>
              <li>
                <h4>Recantos de Lisboa White (Ve)	</h4>
                <p><i>From Portugal, this bright appearing, citrus coloured wine has intense aromas of tropical fruits, with harmonious flavours on the palate and finishing with lemon zest acidity.</i></p>
              </li>
              <li>
                <h4>Entreflores Albarino	</h4>
                <p><i>This spanish white is elegant, with a  rich, well structured  palate. Fresh and acidic mid-palate highlights subtle varietal character, enhanced by some fruity notes.</i></p>
              </li>
              <li>
                <h4>Cloud Rock Sauvignon</h4>
                <p><i>Originating from Chile, this fresh, zesty Sauvignon Blanc has wonderful aromatic aromas, hints of citrus and floral notes.</i></p>
              </li>
            </ul>
          </div>

          <div class="Stack4">
            <h3>Red</h3>
            <ul role="list" class="Stack4">
              <li>
                <h4>Calaveros Vino Tino</h4>
                <p><i>Our house red is incredibly quaff-able, full of fruit cake and spice. Very elegant tannins which lengthen the liquorice and fennel characters on finish.</i></p>
              </li>
              <li>
                <h4>Lou Magret Merlot Grenache</h4>
                <p><i>This French Merlot is soft and rounded, offering expressive and generous red cherry and berry fruit with a hint of spice and a creamy velvety character.</i></p>
              </li>
              <li>
                <h4>Bodega Piedra Negra Organic Malbec (O) (Ve)</h4>
                <p><i>An Argentinian wine with a bright ruby colour, dominated with summer fruit aromas and a slight touch of black pepper. On the palate it has ripe red fruits, with soft and smooth tannins.</i></p>
            </ul>
          </li> 
          </div>

          <div class="Stack4">
            <h3>Rose</h3>
            <ul role="list" class="Stack4">
              <li>
                <h4>Calaveras Vino Rosado</h4>
                <p><i>Fresh generous cherry, strawberry, herb aromas, supple textures and seductive mineral length make this an ideal everyday wine.</i></p>
              </li>

              <li>
                <h4>Monterey Bay Zinfandel Rose</h4>
                <p><i>A delicious New Zealand Zinfandel, with a mix of watermelon and cherry notes and delectable sweetness. Swiss Commended</i></p>
              </li>
            </ul>
          </div>

          <div class="Stack4">
            <h3>Fizz</h3>
            <ul role="list" class="Stack4">
              <li>House Prosecco - £5/£25</li>
              <li>Rose Prosecco - £6/£28</li>
              <li>Bottega Rose - £40</li>
              <li>Champagne Castelnau Brut Classiquee - £48</li>
              <li>Moet & Chandon - £65</li>
            </ul>
          </div>

          <div class="Stack4">
            <header>
              <h3>Prosecco Cocktails</h3>
              <p>£7.50 or 2-4-£10</p>
            </header>

            <ul role="list" class="Stack4">
              <li>
                <h4>Bellini (Passionfruit/Strawberry)</h4>
                <p><i>A mix of fruity liqueur, fruit puree, Prosecco</i></p>
              </li>
              <li>
                <h4>Kir Royale</h4>
                <p><i>Creme de cassis, Prosecco</i></p>
              </li>
              <li>
                <h4>Aperol Spritz</h4>
                <p><i>Aperol, Prosecco, Soda top</i></p>
              </li>
              <li>
                <h4>Elderflower Spritz</h4>
                <p><i>St Germaine, cucumber, mint, Prosecco</i></p>
              </li>
            </ul>
          </div>

      </section>

      <section class="Stack6">
        <header class="Stack4">
          <h2>Beer/Cider</h2>
          <p class="Callout">Good people drink good beer, so what are you?</p>
        </header>
        <div class="Stack4">
          <h3>Draught</h3>
          <ul role="list">
            <li>Delirium and Revelry - House Lager</li>
            <li>Camden Hells</li>
            <li>Camden Pale</li>
            <li>Corona</li>
            <li>Guinness</li>
            <li>Appleshed Cider</li>
            <li>Goose Island Midway IPA</li>
            <li>Brew York - Juice Forsyth</li>
          </ul>
        </div>

        <div class="Stack4">
          <h3>Bottles</h3>
          <ul role="list">
            <li>Blue Moon</li>
            <li>Desperados</li>
            <li>Bulmers</li>
            <li>Old Mout Cider - Berries & Cherries</li>
            <li>Old Mout Cider - Kiwi & Lime</li>
            <li class="no-abv">Old Mout Cider- Berries & Cherries 0%</li>
          </ul>
        </div>
        <div class="Stack4">
          <h3>Cans</h3>
          <ul role="list">
            <li>Beavertown - Gamma Ray</li>
            <li>Beavertown - Neck Oil</li>
            <li>Schofferhofer - Grapefruit</li>
            <li>Redstripe </li>
            <li>Brewdog - Nanny State</li>
            <li>Brewdog - Punk IPA</li>
            <li>Brewdog - Elvis Juice</li>
            <li>Brew York - Lupa Lion Gluten free</li>
            <li class="no-abv">Brew York - Lo-rider (0%)</li>
            <li class="no-abv">Peroni 0%</li>
          </ul>
        </div>
    </main>
  `;
}
