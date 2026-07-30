#!/usr/bin/env node

import { Command } from "commander";
import { init } from "./init.js";
import { listComponents } from "./list.js";
import { addComponents } from "./add.js";

import path from "node:path";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packagePath = path.join(
  __dirname,
  "..",
  "package.json"
);

const packageJson = JSON.parse(
  await readFile(packagePath, "utf-8")
);


const program = new Command();

program
  .name("simpleui")
  .version(packageJson.version);

program
  .command("init")
  .description("Add all components")
  .action(init);

program
  .command("add")
  .argument("<components...>")
  .description("Add components")
  .action(addComponents);

program
  .command("list")
  .description("List available components")
  .action(listComponents);

program.parse();
