export function Home() {
  return /*html*/ `
    <main class="home-layout">
      <picture class="home-bg">
        <source type="image/webp" srcset="/img/home-bg.webp" alt="">
        <img src="/img/home-bg.jpeg" alt="">
      </picture>
      <header>
        <h1>
          <img src="/img/home-logo.png" alt="Delirium & Revelry. Cocktails, world beers, private events">
        </h1>
        <hr>
        <p class="subheading font-title">Coming soon August 2022</p>
      </header>
    </main>
  `;
}
