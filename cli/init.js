import { addComponents, addVersionFile, copyIndexes } from "./add.js";
import { PEER_DEPS, detectPackageManager, installPackages } from "./deps.js";

export async function init() {
  console.log("Installing SimpleUI...\n");

  await addComponents(["*"]);
  await copyIndexes();
  await addVersionFile(process.cwd());

  const cwd = process.cwd();
  const pm = detectPackageManager(cwd);

  console.log("\n─────────────────────────────────────────");
  console.log("The following packages will be installed:");
  PEER_DEPS.forEach((pkg) => console.log(`  • ${pkg}`));
  console.log(`\nUsing package manager: ${pm}`);
  console.log("─────────────────────────────────────────");

  installPackages(PEER_DEPS, cwd);

  console.log("\nSimpleUI installed successfully.");
}
