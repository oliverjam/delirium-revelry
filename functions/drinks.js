import { Drinks } from "./templates/drinks.js";
import { Layout } from "./templates/layout.js";

export async function onRequestGet() {
  // let data = await model.get(env.DB);
  let content = Drinks({});
  let css = ["content"];
  return Layout({ content, css });
}
