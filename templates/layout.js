export function Layout({ content, editing, form }) {
  let body = /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Delirium & Revelry</title>
        <link rel="stylesheet" href="/assets/base.css" />
      </head>
      <body>
        ${content}
        ${
          editing
            ? form
            : `<form class="edit-button"><button name="edit">Edit page</button></form>`
        }
      </body>
    </html>
  `;
  return new Response(body, {
    headers: { "content-type": "text/html; utf-8" },
  });
}
