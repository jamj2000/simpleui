import fs from "node:fs/promises";
import path from "node:path";
import readlineSync from "readline-sync";
import { fileURLToPath } from "node:url";
import packageJson from "../package.json" with { type: "json" };



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, "..", "components");




async function findTargetDirectory() {
  const candidates = [
    path.join(process.cwd(), "src", "components"),
    path.join(process.cwd(), "components"),
  ];

  for (const dir of candidates) {
    try {
      await fs.access(dir);
      return dir;
    } catch { }
  }

  const dir = candidates[0];

  await fs.mkdir(dir, { recursive: true });

  console.log(`Created ${dir}`);

  return dir;
}

function normalize(name) {
  return name.replace(/\.jsx$/, "").toLowerCase();
}

async function askOverwrite(file) {
  const answer = readlineSync
    .question(`${file} already exists. Overwrite? (y/N) `)
    .trim()
    .toLowerCase();

  return answer === "y" || answer === "yes";
}

async function copyFiles(filter) {
  const targetDir = await findTargetDirectory();

  let copied = 0;

  async function walk(dir, base = dir) {
    const entries = await fs.readdir(dir, {
      withFileTypes: true,
    });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        await walk(fullPath, base);
        continue;
      }

      const relative = path.relative(base, fullPath);

      if (!filter({
        name: entry.name,
        relative,
        fullPath,
      })) {
        continue;
      }

      const destination = path.join(
        targetDir,
        "simpleui",
        relative
      );

      await fs.mkdir(path.dirname(destination), {
        recursive: true,
      });

      let overwrite = true;

      try {
        await fs.access(destination);
        overwrite = await askOverwrite(relative);
      } catch { }

      if (!overwrite) {
        console.log(`Skipped ${relative}`);
        continue;
      }

      await fs.copyFile(fullPath, destination);

      console.log(`✓ ${relative}`);

      copied++;
    }
  }

  await walk(sourceDir);

  return copied;
}

async function getAvailableComponentNames() {
  const names = [];

  async function walk(dir) {
    const entries = await fs.readdir(dir, {
      withFileTypes: true,
    });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        await walk(fullPath);
        continue;
      }

      if (!entry.name.endsWith(".jsx")) {
        continue;
      }

      names.push(normalize(entry.name));
    }
  }

  await walk(sourceDir);

  return names;
}

export async function addComponents(requested) {
  const wanted = requested.map(normalize);

  const available = await getAvailableComponentNames();

  if (!wanted.includes("*")) {
    for (const name of wanted) {
      if (!available.includes(name)) {
        console.warn(`Component not found: ${name}`);
      }
    }
  }

  const copied = await copyFiles(({ name }) => {
    if (!name.endsWith(".jsx")) {
      return false;
    }

    if (wanted.includes("*")) {
      return true;
    }

    return wanted.includes(normalize(name));
  });

  console.log(`\nAdded ${copied} component(s).`);
}

export async function copyIndexes() {
  const copied = await copyFiles(({ name }) => {
    return name === "index.js";
  });

  console.log(`Copied ${copied} index file(s).`);
}

export async function getAvailableComponents() {
  const components = [];

  async function walk(dir, base = dir) {
    const entries = await fs.readdir(dir, {
      withFileTypes: true,
    });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        await walk(fullPath, base);
        continue;
      }

      if (!entry.name.endsWith(".jsx")) {
        continue;
      }

      components.push({
        name: path.basename(entry.name, ".jsx"),
        path: path.relative(base, fullPath),
      });
    }
  }

  await walk(sourceDir);

  return components;
}


export async function addVersionFile() {
  const targetDir = await findTargetDirectory();
  const destination = path.join(
    targetDir,
    "simpleui"
  )

  const versionPath = path.join(destination, "VERSION");

  await fs.writeFile(versionPath, `${packageJson.version}\n`, "utf8");
}


