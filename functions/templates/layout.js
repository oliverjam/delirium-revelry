export function Layout({ content, css = [] }) {
  let body = /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Delirium & Revelry</title>
        <link rel="icon" type="image/png" href="/assets/favicon.png">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Limelight&display=block" rel="stylesheet"> 
        <link rel="stylesheet" href="/assets/css/base.css" />
        ${css
          .map(
            (name) => `<link rel="stylesheet" href="/assets/css/${name}.css">`
          )
          .join("")}
      </head>
      <body>
        <div class="layout">
          <header class="site-header font-title">
            <a href="/">
              <img src="/assets/img/logo-circle.png" alt="Home" width="48" height="48">
            </a>
            <nav>
              <a href="/drinks">Drinks</a>
              <a href="/bookings">Bookings</a>
            </nav>
          </header>
          ${content}
          <footer class="Stack2">
            <ul role="list" class="Stack2">
              <li>
                <svg viewBox="0 0 30 30" width="20" height="20" fill="white">
                  <use href="/assets/img/icons.svg#facebook"></use>
                </svg> <a href="https://facebook.com/deliriumandrevelry">Delirium and Revelry</a></li>
              <li>
                <svg viewBox="0 0 30 30" width="20" height="20" fill="white">
                  <use href="/assets/img/icons.svg#instagram"></use>
                </svg> <a href="https://instagram.com/dnr">dnrleeds</a>
              </li>
              <li>
                <address>
                  <svg viewBox="0 0 20 20" width="20" height="20" fill="white">
                    <use href="/assets/img/icons.svg#pin"></use>
                  </svg> <a href="https://goo.gl/maps/ABeVSR8MXifsi2cg6">52 New Briggate, Leeds LS1 6NU</a>
                </address>
              </li>
            </ul>
            <p>© Delirium & Revelry ${new Date().getFullYear()}</p>
          </footer>
        </div>
      </body>
    </html>
  `;
  return new Response(body, {
    headers: { "content-type": "text/html; utf-8" },
  });
}
