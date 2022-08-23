import * as models from "../../model.js";
import { Layout } from "../../templates/layout.js";

async function onRequestGet({ params, env }) {
  let page = params.path?.join("/");
  let model = models[page];
  if (!model) {
    return new Response(`Page ${page} does not exist`, { status: 404 });
  }
  let form = await model.form(env.DB);
  let preview_url = "/" + page.replace("home", "");
  let content = Edit({ form, preview_url });
  let css = ["edit"];
  return Layout({ content, css });
}

function onRequestPost({ request, params, env }) {
  let page = params.path?.join("/") || "home";
  let model = models[page];
  if (!model) {
    return new Response(`Page ${page} does not exist`, { status: 404 });
  }
  return model.post({ request, env });
}

function Edit({ form, preview_url }) {
  return /*html*/ `
    <main class="admin-layout">
      ${form}
      <section class="preview">
        <iframe src="${preview_url}"></iframe>
      </section>
    </main>
  `;
}
