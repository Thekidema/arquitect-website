#!/usr/bin/env node
// Structure Validation Script
const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'public/index.html',
  'src/assets/css/variables.css',
  'src/assets/css/premium-design.css',
  'src/assets/js/modules/main.js',
  'config/colors.json',
  'package.json'
];

const requiredFolders = [
  'public',
  'src/assets/css',
  'src/assets/js/modules',
  'src/assets/images',
  'docs',
  'config'
];

let errors = 0;

console.log('🔍 Validating project structure...\n');

requiredFolders.forEach(folder => {
  const folderPath = path.join(__dirname, '..', folder);
  if (!fs.existsSync(folderPath)) {
    console.error(`❌ Missing folder: ${folder}`);
    errors++;
  } else {
    console.log(`✅ Folder exists: ${folder}`);
  }
});

console.log();

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing file: ${file}`);
    errors++;
  } else {
    console.log(`✅ File exists: ${file}`);
  }
});

console.log();
if (errors === 0) {
  console.log('✨ All checks passed! Project structure is valid.');
  process.exit(0);
} else {
  console.log(`⚠️ Found ${errors} issues.`);
  process.exit(1);
}
