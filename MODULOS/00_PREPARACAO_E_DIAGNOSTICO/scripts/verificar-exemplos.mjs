import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const moduleDirectory = join(scriptDirectory, "..");
const examplesDirectory = join(moduleDirectory, "exemplos");

const javascriptPath = join(examplesDirectory, "ola-mundo.js");
const htmlPath = join(examplesDirectory, "ola-mundo.html");
const pageScriptPath = join(examplesDirectory, "ola-mundo-pagina.js");

const execution = spawnSync(process.execPath, [javascriptPath], {
  encoding: "utf8",
});

assert.equal(execution.status, 0, execution.stderr);
assert.match(
  execution.stdout,
  /Olá, mundo! Charlie Echo iniciou sua jornada de programação\./,
);

const html = readFileSync(htmlPath, "utf8");
const pageScript = readFileSync(pageScriptPath, "utf8");

assert.match(html, /<html lang="pt-BR">/);
assert.match(html, /<h1>Olá, mundo!<\/h1>/);
assert.match(html, /dados fictícios/);
assert.match(html, /src="ola-mundo-pagina\.js"/);
assert.match(pageScript, /document\.querySelector/);

console.log("Módulo 0: exemplos verificados com sucesso.");
