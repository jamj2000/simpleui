import { getAvailableComponents } from "./add.js";

export async function listComponents() {
  const components = await getAvailableComponents();

  if (!components.length) {
    console.log("No components found.");
    return;
  }

  console.log("\nAvailable SimpleUI components:\n");

  for (const component of components) {
    console.log(`- ${component.name}`);
  }

  console.log("");
}
