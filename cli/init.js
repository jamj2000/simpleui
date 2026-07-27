import { addComponents } from "./add.js";

export async function init() {
  console.log("Adding all SimpleUI components...\n");

  await addComponents(["*"]);
}
