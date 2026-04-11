const fs = require('fs');
let content = fs.readFileSync('project.md', 'utf-8');

function fixEnums(text) {
  // Replace Enums, handling newlines
  text = text.replace(/Enum\[([\s\S]*?)\]/g, (match, p1) => {
    return p1.split(',')
             .map(s => s.trim().replace(/\n/g, '').replace(/\s+/g, ''))
             .filter(s => s.length > 0)
             .map(s => `'${s}'`)
             .join(' | ');
  });
  text = text.replace(/ \| None/g, ' | null');
  text = text.replace(/Array<str>/g, 'Array<string>');
  return text;
}

const startPattern = '## Core Data Models';
const endPattern = 'Key API Contracts';
const startIndex = content.indexOf(startPattern);
const endIndex = content.indexOf(endPattern);

if (startIndex !== -1 && endIndex !== -1) {
  const before = content.slice(0, startIndex);
  const section = content.slice(startIndex, endIndex);
  const after = content.slice(endIndex);
  
  const modifiedSection = fixEnums(section);
  fs.writeFileSync('project.md', before + modifiedSection + after);
  console.log('Enums fixed successfully');
} else {
  console.log('Section not found');
}
