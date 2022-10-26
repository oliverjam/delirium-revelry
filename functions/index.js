import { Home } from "./templates/home.js";
import { Layout } from "./templates/layout.js";

export async function onRequestGet() {
  // let data = await model.get(env.DB);
  let content = Home({});
  let css = ["home"];
  return Layout({ content, css });
}
