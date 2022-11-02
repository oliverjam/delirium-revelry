export function Home() {
  return /*html*/ `
    <main class="home-layout">
      <p class="anaglyph font-title">
        Tonight's revelry inspires tomorrow's delirium.
      </p>
      <picture class="arch-right">
        <source type="image/webp" srcset="/assets/img/delirious-drinks.webp" alt="">
        <img src="/assets/img/derilious-drinks.jpg" alt="" loading="lazy">
      </picture>
    </main>
  `;
}
