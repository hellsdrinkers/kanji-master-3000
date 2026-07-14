const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'kanjii-data.html');
const content = fs.readFileSync(filePath, 'utf8');

// The file seems to have line breaks inside strings because of how it was pasted.
// But we can try to extract Kanji[X] using regex matching multiline.
// Alternatively, we can just remove all newlines and then match.

const cleanContent = content.replace(/\n/g, ' ');

const matches = [];
const regex = /new KANJI\((.*?)\)/g;
let match;
const kanjis = [];

while ((match = regex.exec(cleanContent)) !== null) {
    const argsStr = match[1];
    
    // find all strings in quotes
    const strRegex = /"([^"]*)"/g;
    const args = [];
    let strMatch;
    while ((strMatch = strRegex.exec(argsStr)) !== null) {
        args.push(strMatch[1]);
    }
    
    if (args.length >= 7) {
        kanjis.push({
            tipo: 'kanji',
            nivel: args[0],
            tracos: args[1],
            bushu: args[2],
            kanji: args[3],
            onyomi: args[4],
            kunyomi: args[5],
            portugues: args[6]
        });
    }
}

console.log(`Extracted ${kanjis.length} kanjis from kanjii-data.html`);
const output = `const kanjiMaster1Data = ${JSON.stringify(kanjis, null, 2)};\nexport default kanjiMaster1Data;\n`;
fs.writeFileSync(path.join(__dirname, 'kanjiMaster1Data.js'), output);
console.log("kanjiMaster1Data.js created.");
