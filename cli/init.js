import { addComponents, copyIndexes } from "./add.js";

export async function init() {
  console.log("Installing SimpleUI...\n");

  await addComponents(["*"]);
  await copyIndexes();

  console.log("\nSimpleUI installed successfully.");
}
