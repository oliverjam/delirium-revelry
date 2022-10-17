import { Brunch } from "./templates/brunch.js";
import { Layout } from "./templates/layout.js";

export async function onRequestGet() {
  // let data = await model.get(env.DB);
  let content = Brunch({});
  let css = ["content"];
  return Layout({ content, css });
}
