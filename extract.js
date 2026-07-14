const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'kanjii_old.htm');
const content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');
const kanjis = [];

for (const line of lines) {
    if (line.includes('new KANJI(')) {
        // Find all strings in quotes
        const matches = [];
        const regex = /"([^"]*)"/g;
        let match;
        while ((match = regex.exec(line)) !== null) {
            matches.push(match[1]);
        }
        
        if (matches.length >= 7) {
            kanjis.push({
                nivel: matches[0],
                tracos: matches[1],
                bushu: matches[2],
                kanji: matches[3],
                onyomi: matches[4],
                kunyomi: matches[5],
                portugues: matches[6]
            });
        }
    }
}

console.log(`Extracted ${kanjis.length} kanjis.`);
const output = `// Dados de Kanji extraídos
const kanjiData = ${JSON.stringify(kanjis, null, 2)};
export default kanjiData;
`;
fs.writeFileSync(path.join(__dirname, 'data.js'), output);
console.log("data.js successfully recreated with all kanjis.");
