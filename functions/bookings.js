import { VenueBookings } from "./templates/bookings.js";
import { Layout } from "./templates/layout.js";

export async function onRequestGet() {
  let content = VenueBookings({});
  let css = ["content"];
  return Layout({ content, css });
}
