#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const process = require("process");

function format(num) {
  return String(num).padStart(4, "0");
}

function main(dirPath) {
  let js = 0,
    ts = 0,
    php = 0;
  try {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
      const extension = path.extname(file);
      if (extension == ".js") {
        js++;
      }
      if (extension == ".ts") {
        ts++;
      }
      if (extension == ".php") {
        php++;
      }
    }
    console.log(`
    *.js: ${format(js)}
    *.ts: ${format(ts)}
    *.php: ${format(php)}
  `);
  } catch (err) {
    console.error(`Error reading directory: ${err}`);
  }
}

main(process.cwd());
