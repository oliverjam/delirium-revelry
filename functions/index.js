import { Model } from "../helpers.js";
import { Home } from "../templates/home.js";
import { Layout } from "../templates/layout.js";

export let model = Model("cms::home::", {
  title: { type: "text" },
  intro: { type: "longtext" },
});

export async function onRequestGet({ env }) {
  let data = await model.get(env.DB);
  let content = Home(data);
  let css = ["home"];
  return Layout({ content, css });
}
