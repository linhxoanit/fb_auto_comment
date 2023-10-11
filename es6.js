const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Define the relative path to the "script" folder.
const folderPath = path.join(__dirname, 'script');

// Get a list of all .js files in the specified folder.
const jsFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));

// Run each JavaScript file with the --experimental-modules flag.
jsFiles.forEach(file => {
    const filePath = path.join(folderPath, file);
    const command = `node --experimental-modules "${filePath}"`;
    console.log(`Running: ${command}`);
    execSync(command, { stdio: 'inherit' });
});
