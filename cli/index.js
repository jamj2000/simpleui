#!/usr/bin/env node

import { Command } from "commander";
import { init } from "./init.js";
import { listComponents } from "./list.js";
import { addComponents } from "./add.js";

const program = new Command();

program
  .name("simpleui")
  .version("0.1.0");

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
