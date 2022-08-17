export function Home({ title = "" }) {
  return /*html*/ `
    <div class="layout">
      <header>
        <a href="/">🥹</a>
        <nav>
          <a href="/drinks">Drinks</a>
          <a href="/bookings">Bookings</a>
        </nav>
      </header>
      <main>
        <h1>${title}</h1>
      </main>
      <footer>© Delirium & Revelry 2022</footer>
    </div>
  `;
}
