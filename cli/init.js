import { addComponents, addVersionFile, copyIndexes } from "./add.js";

export async function init() {
  console.log("Installing SimpleUI...\n");

  await addComponents(["*"]);
  await copyIndexes();
  await addVersionFile(process.cwd());

  console.log("\nSimpleUI installed successfully.");
}
