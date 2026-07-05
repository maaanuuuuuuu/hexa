#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const args = new Map(
  process.argv.slice(2).map((arg) => {
    const [key, value = true] = arg.replace(/^--/, '').split('=');
    return [key, value];
  }),
);

const step = Number(args.get('step') || 16);
const out = String(args.get('out') || `rgb-colors-step-${step}.csv`);

if (!Number.isInteger(step) || step < 1 || step > 255) {
  console.error('Usage: node scripts/generate-rgb-csv.mjs --step=16 --out=colors.csv');
  process.exit(1);
}

function pad2(value) {
  return value.toString(16).padStart(2, '0').toUpperCase();
}

function rgbToHex(r, g, b) {
  return `#${pad2(r)}${pad2(g)}${pad2(b)}`;
}

function valuesWithStep(stepValue) {
  const values = [];
  for (let value = 0; value < 256; value += stepValue) values.push(value);
  if (values[values.length - 1] !== 255) values.push(255);
  return values;
}

const values = valuesWithStep(step);
const destination = path.resolve(process.cwd(), out);
const stream = fs.createWriteStream(destination, { encoding: 'utf8' });
stream.write('hex,r,g,b\n');

for (const r of values) {
  for (const g of values) {
    for (const b of values) {
      stream.write(`${rgbToHex(r, g, b)},${r},${g},${b}\n`);
    }
  }
}

stream.end(() => {
  const count = values.length ** 3;
  console.log(`Generated ${count.toLocaleString('fr-FR')} colors → ${destination}`);
  if (step === 1) {
    console.warn('Step 1 creates 16,777,216 rows and a very large file. Use only if you really need it.');
  }
});
