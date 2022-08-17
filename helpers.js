export function Model(prefix, schema) {
  async function get(db) {
    let { keys } = await db.list({ prefix });
    return Object.fromEntries(
      keys.map(({ name, metadata }) => [unkey(name), metadata])
    );
  }

  async function save(db, data) {
    let promises = [];
    for (let [name, metadata] of data) {
      let promise = db.put(key(name), "", { metadata });
      promises.push(promise);
    }
    return Promise.all(promises);
  }

  async function post({ request, env }) {
    let body = await request.formData();
    await save(env.DB, body);
    let location = request.headers.get("referer");
    return new Response(null, { status: 303, headers: { location } });
  }

  function key(name) {
    return prefix + name;
  }

  function unkey(key) {
    return key.replace(prefix, "");
  }

  async function form(db) {
    let data = await get(db);
    let fields = Object.entries(schema);
    return /*html*/ `
    <aside class="editor">
      <form class="edit-form" method="POST">
        ${fields
          .map(([id, field]) => {
            let value = data[id];
            return /*html*/ `
            <div class="edit-field">
              <label for="${id}">${id}</label>
              ${Field(id, field, value)}
            </div>
          `;
          })
          .join("")}
        <div class="edit-buttons">
        <button form="cancel">Cancel</button>
        <button>Save changes</button>
        </div>
        </form>
      <form id="cancel"></form>
    </aside>
  `;
  }
  return { get, post, schema, form };
}

function Field(id, { type }, value = "") {
  switch (type) {
    case "longtext":
      return `<textarea id="${id}" name="${id}">${value}</textarea>`;
    default:
      return `<input id="${id}" type=${type} name="${id}" value="${value}">`;
  }
}
