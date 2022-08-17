import { Model } from "../helpers.js";
import { Contact } from "../templates/contact.js";
import { Layout } from "../templates/layout.js";

export let model = Model("cms::contact::", {
  title: { type: "text" },
  intro: { type: "longtext" },
});

export async function onRequestGet({ env }) {
  let data = await model.get(env.DB);
  let content = Contact(data);
  return Layout({ content });
}
