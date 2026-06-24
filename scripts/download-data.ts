import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const REPO = "5etools-mirror-3/5etools-src";
const REF = "main";
const BASE_URL = `https://raw.githubusercontent.com/${REPO}/${REF}/data`;
const OUTPUT_DIR = join(import.meta.dir, "..", "assets", "data");

const FILES = [
    "spells/spells-xphb.json",
    "variantrules.json",
    "actions.json",
    "conditionsdiseases.json",
    "feats.json",
    "class/class-artificer.json",
    "class/class-barbarian.json",
    "class/class-bard.json",
    "class/class-cleric.json",
    "class/class-druid.json",
    "class/class-fighter.json",
    "class/class-monk.json",
    "class/class-paladin.json",
    "class/class-ranger.json",
    "class/class-rogue.json",
    "class/class-sorcerer.json",
    "class/class-warlock.json",
    "class/class-wizard.json",
    "races.json",
    "backgrounds.json",
];

async function downloadFile(relativePath: string) {
    const url = `${BASE_URL}/${relativePath}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to download ${relativePath}: ${response.status} ${response.statusText}`);
    }

    const outputPath = join(OUTPUT_DIR, relativePath);
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, await response.text());

    console.log(`Downloaded ${relativePath}`);
}

console.log(`Fetching 5etools data from ${REPO}@${REF}...`);

let failed = false;

for (const file of FILES) {
    try {
        await downloadFile(file);
    } catch (error) {
        failed = true;
        console.error(error instanceof Error ? error.message : error);
    }
}

if (failed) {
    process.exit(1);
}

console.log(`Done. Wrote ${FILES.length} files to assets/data/`);
