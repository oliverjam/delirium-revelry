import { Bookings } from "./templates/bookings.js";
import { Layout } from "./templates/layout.js";

export async function onRequestGet() {
  let content = Bookings({});
  let css = ["content"];
  return Layout({ content, css });
}
