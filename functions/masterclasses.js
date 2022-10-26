import { Masterclasses } from "./templates/masterclasses.js";
import { Layout } from "./templates/layout.js";

export async function onRequestGet() {
  let content = Masterclasses({});
  let css = ["content"];
  return Layout({ content, css, booking: true });
}
