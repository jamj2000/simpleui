import { existsSync } from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

/** Paquetes que SimpleUI necesita en el proyecto del usuario */
export const PEER_DEPS = ["sonner", "next-themes"];

/**
 * Detecta el gestor de paquetes buscando lockfiles en el directorio dado.
 * @param {string} cwd
 * @returns {"pnpm"|"yarn"|"bun"|"npm"}
 */
export function detectPackageManager(cwd) {
  if (existsSync(path.join(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (existsSync(path.join(cwd, "yarn.lock"))) return "yarn";
  if (existsSync(path.join(cwd, "bun.lockb")) || existsSync(path.join(cwd, "bun.lock"))) return "bun";
  return "npm";
}

/**
 * Instala los paquetes indicados usando el gestor detectado.
 * @param {string[]} packages
 * @param {string} cwd
 */
export function installPackages(packages, cwd) {
  const pm = detectPackageManager(cwd);

  const commands = {
    npm: `npm install ${packages.join(" ")}`,
    yarn: `yarn add ${packages.join(" ")}`,
    pnpm: `pnpm add ${packages.join(" ")}`,
    bun: `bun add ${packages.join(" ")}`,
  };

  const cmd = commands[pm];

  console.log(`\nRunning: ${cmd}\n`);

  execSync(cmd, { cwd, stdio: "inherit" });
}
