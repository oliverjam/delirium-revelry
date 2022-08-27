export function Home() {
  return /*html*/ `
    <main class="home-layout">
      <picture class="home-bg">
        <source type="image/webp" srcset="/assets/img/home-bg.webp" alt="">
        <img src="/assets/img/home-bg.jpeg" alt="" loading="lazy">
      </picture>
      <header>
        <h1>
          <img
            src="/assets/img/home-logo.png"
            alt="Delirium & Revelry. Cocktails, world beers, private events"
            width="1445"
            height="468"
          >
        </h1>
        <hr>
        <p class="subheading font-title">Now open</p>
      </header>
    </main>
  `;
}
