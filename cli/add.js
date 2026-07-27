import fs from "node:fs/promises";
import path from "node:path";
import readlineSync from "readline-sync";
import { fileURLToPath } from "node:url";

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
    } catch {
      // continúa
    }
  }

  const defaultDir = candidates[0];

  await fs.mkdir(defaultDir, {
    recursive: true,
  });

  console.log(`Created ${defaultDir}`);

  return defaultDir;
}

async function getComponentFiles(dir, base = dir) {
  const entries = await fs.readdir(dir, {
    withFileTypes: true,
  });

  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(
        ...(await getComponentFiles(fullPath, base))
      );
    }

    if (
      entry.isFile() &&
      (
        entry.name.endsWith(".jsx") ||
        entry.name === "index.js"
      )
    ) {
      files.push({
        source: fullPath,
        relative: path.relative(base, fullPath),
        name: path.basename(entry.name, path.extname(entry.name))
      });
    }
  }

  return files;
}

function normalizeName(name) {
  return name
    .replace(/\.jsx$/, "")
    .toLowerCase();
}

async function askOverwrite(file) {
  const answer = readlineSync
    .question(
      `${file} already exists. Overwrite? (y/N) `
    )
    .toLowerCase();

  return answer === "y" || answer === "yes";
}

async function getComponentFiles(dir, base = dir) {
  const entries = await fs.readdir(dir, {
    withFileTypes: true,
  });

  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...await getComponentFiles(fullPath, base));
    }

    if (
      entry.isFile() &&
      entry.name.endsWith(".jsx")
    ) {
      files.push({
        source: fullPath,
        relative: path.relative(base, fullPath),
        name: path.basename(entry.name, ".jsx"),
      });
    }
  }

  return files;
}


export async function addComponents(requested) {
  const targetDir = await findTargetDirectory();

  const components = await getComponentFiles(
    sourceDir
  );

  if (!components.length) {
    console.error(
      "No components found."
    );
    return;
  }

  let selected;

  if (requested.includes("*")) {
    selected = components;
  } else {
    selected = [];

    for (const requestedName of requested) {
      const component = components.find(
        (item) =>
          normalizeName(item.name) ===
          normalizeName(requestedName)
      );

      if (!component) {
        console.warn(
          `Component not found: ${requestedName}`
        );
        continue;
      }

      selected.push(component);
    }
  }

  if (!selected.length) {
    console.log("Nothing to add.");
    return;
  }

  let copied = 0;

  for (const component of selected) {
    const result = await copyComponent(
      component,
      targetDir
    );

    if (result) {
      copied++;
    }
  }

  console.log(
    `\nAdded ${copied} component(s)`
  );
}


export async function getAvailableComponents() {
  const components = await getComponentFiles(sourceDir);

  return components.map((component) => ({
    name: component.name,
    path: component.relative,
  }));
}


export async function copyIndexes() {
  const targetDir = await findTargetDirectory();

  async function copy(dir, base = dir) {
    const entries = await fs.readdir(dir, {
      withFileTypes: true,
    });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        await copy(fullPath, base);
        continue;
      }

      if (entry.name !== "index.js") {
        continue;
      }

      const relative = path.relative(base, fullPath);

      const destination = path.join(
        targetDir,
        "simpleui",
        relative
      );

      await fs.mkdir(path.dirname(destination), {
        recursive: true,
      });

      try {
        await fs.access(destination);

        const overwrite = await askOverwrite(relative);

        if (!overwrite) {
          console.log(`Skipped ${relative}`);
          continue;
        }
      } catch {
        // no existe
      }

      await fs.copyFile(fullPath, destination);

      console.log(`✓ ${relative}`);
    }
  }

  await copy(sourceDir);
}
