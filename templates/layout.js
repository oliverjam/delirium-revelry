export function Layout({ content, css = [] }) {
  let body = /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Delirium & Revelry</title>
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
          <footer>
           <p>© Delirium & Revelry ${new Date().getFullYear()}<p>
           <address>
            52 New Briggate, <a href="https://goo.gl/maps/ABeVSR8MXifsi2cg6">Leeds LS1 6NU</a>
           </address>
          </footer>
        </div>
      </body>
    </html>
  `;
  return new Response(body, {
    headers: { "content-type": "text/html; utf-8" },
  });
}
